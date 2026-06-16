import type { Metadata } from "next";

import { createPageMetadata } from "@/app/metadata";
import { ConnectPage } from "@/components/connect/ConnectPage";

export const metadata: Metadata = createPageMetadata({
  title: "Connect | Methmal Deshapriya",
  description:
    "Contact Methmal Deshapriya for software collaborations, product engineering work, and thoughtfully built digital products.",
  path: "/connect",
});

export default function ConnectRoute() {
  return <ConnectPage />;
}
