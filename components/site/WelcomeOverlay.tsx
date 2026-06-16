"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const STORAGE_KEY = "portfolio-welcome-seen";

interface StrokeDef {
  d: string;
  delay: number;
  duration: number;
}

/**
 * Geometric stroke paths for "Hello" (capital H + lowercase ello)
 * ViewBox 0 0 278 122  |  cap-height: y 22–100  |  x-height body: y 36–100
 */
const STROKES: StrokeDef[] = [
  // H — left stem
  { d: "M 20,22 L 20,100", delay: 0, duration: 0.33 },
  // H — crossbar
  { d: "M 20,61 L 76,61", delay: 0.24, duration: 0.28 },
  // H — right stem
  { d: "M 76,22 L 76,100", delay: 0.45, duration: 0.33 },
  // e — crossbar right, then sweep up-around-down to opening
  {
    d: "M 96,62 L 150,62 C 150,47 140,36 123,36 C 106,36 94,47 94,62 C 94,79 106,100 123,100 C 137,100 148,91 152,83",
    delay: 0.68,
    duration: 0.58,
  },
  // l (first)
  { d: "M 170,22 L 170,100", delay: 1.18, duration: 0.28 },
  // l (second)
  { d: "M 192,22 L 192,100", delay: 1.38, duration: 0.28 },
  // o — clockwise from top-center, closes at start
  {
    d: "M 226,36 C 242,36 254,50 254,68 C 254,86 242,100 226,100 C 210,100 198,86 198,68 C 198,50 210,36 226,36",
    delay: 1.55,
    duration: 0.55,
  },
];

const DRAW_DONE_MS = (1.55 + 0.55) * 1000; // 2 100 ms — when last stroke finishes
const SUBTITLE_DELAY_S = DRAW_DONE_MS / 1000; // 2.1 s — subtitle fade-in starts
const EXIT_TRIGGER_MS = DRAW_DONE_MS + 900; // 3 000 ms — 900 ms to read subtitle
const REDUCED_MOTION_EXIT_MS = 1_400;

interface WelcomeOverlayProps {
  /** Pass true in dev to always replay without clearing sessionStorage. */
  forceShow?: boolean;
}

export function WelcomeOverlay({ forceShow = false }: WelcomeOverlayProps) {
  /**
   * Key SSR flash fix:
   * Initialize `visible` as TRUE so the overlay is rendered on the server
   * and remains on screen during hydration — no gap where content peeks through.
   * On the client we decide whether to animate (first visit) or hide instantly
   * (returning visitor). The overlay background matches the site background so
   * the instant hide for returning visitors is imperceptible.
   */
  const [visible, setVisible] = useState(true);
  /** Becomes true only on the client after confirming it's a first visit. */
  const [drawing, setDrawing] = useState(false);
  /** 0 for returning visitors (instant hide), 0.55 for first-visit fade-out. */
  const exitDurationRef = useRef(0.55);
  const prefersReducedMotion = useReducedMotion();

  const dismiss = useCallback(() => setVisible(false), []);

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);

    if (forceShow || !seen) {
      setDrawing(true);
      if (!forceShow) sessionStorage.setItem(STORAGE_KEY, "1");

      const ms = prefersReducedMotion ? REDUCED_MOTION_EXIT_MS : EXIT_TRIGGER_MS;
      const id = setTimeout(dismiss, ms);
      return () => clearTimeout(id);
    } else {
      // Already seen — collapse instantly so returning visitors aren't blocked
      exitDurationRef.current = 0;
      setVisible(false);
    }
  }, [forceShow, prefersReducedMotion, dismiss]);

  // Lock body scroll for the lifetime of the overlay
  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="welcome-overlay"
          // Start fully opaque — no entrance fade, we're blocking from SSR
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: exitDurationRef.current,
              ease: "easeInOut",
            },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#fcf8ff" }}
          role="presentation"
          onClick={dismiss}
        >
          {/* ── Gradient blobs ─────────────────────────────────────────── */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full"
            style={{
              background: "rgba(94,92,230,0.10)",
              filter: "blur(110px)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-[440px] w-[440px] rounded-full"
            style={{
              background: "rgba(149,76,233,0.07)",
              filter: "blur(100px)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(94,92,230,0.055) 0%, transparent 68%)",
            }}
          />

          {/* ── Content ────────────────────────────────────────────────── */}
          <div className="relative flex flex-col items-center gap-6 sm:gap-8">
            {/* "Hello" SVG wordmark */}
            <div
              aria-hidden
              className="w-[80vw] max-w-[300px] sm:max-w-[400px] md:max-w-[520px] lg:max-w-[580px]"
            >
              <svg
                viewBox="0 0 278 122"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Hello"
                role="img"
                style={{
                  filter: "drop-shadow(0 0 14px rgba(94,92,230,0.20))",
                }}
              >
                {drawing &&
                  (prefersReducedMotion
                    ? // Static paths — no motion, dismissed after REDUCED_MOTION_EXIT_MS
                      STROKES.map((s, i) => (
                        <path
                          key={i}
                          d={s.d}
                          stroke="#5e5ce6"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      ))
                    : STROKES.map((s, i) => (
                        <motion.path
                          key={i}
                          d={s.d}
                          stroke="#5e5ce6"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{
                            pathLength: 1,
                            opacity: 1,
                            transition: {
                              pathLength: {
                                delay: s.delay,
                                duration: s.duration,
                                ease: "easeInOut",
                              },
                              opacity: { delay: s.delay, duration: 0.05 },
                            },
                          }}
                        />
                      )))}
              </svg>
            </div>

            {/* Subtitle — appears after "Hello" finishes drawing */}
            {drawing && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: prefersReducedMotion ? 0.6 : SUBTITLE_DELAY_S,
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }}
                className="font-hanken text-sm font-medium tracking-[-0.01em] text-[var(--editorial-muted)] sm:text-base"
              >
                I&apos;m Methmal Deshapriya
              </motion.p>
            )}
          </div>

          {/* ── Skip button ─────────────────────────────────────────────── */}
          {drawing && (
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.9, duration: 0.5, ease: "easeOut" },
              }}
              onClick={(e) => {
                e.stopPropagation();
                dismiss();
              }}
              className="absolute bottom-10 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)] transition-colors duration-200 hover:text-[var(--editorial-muted)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[rgba(94,92,230,0.35)] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fcf8ff]"
              aria-label="Skip welcome animation"
            >
              Skip
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
