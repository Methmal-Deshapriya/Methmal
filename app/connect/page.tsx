import type { Metadata } from "next";

import { createPageMetadata } from "@/app/metadata";
import { ConnectPage } from "@/components/connect/ConnectPage";

export const metadata: Metadata = createPageMetadata({
  title: "Connect | Methmal Deshapriya",
  description:
    "Get in touch with Methmal Deshapriya for software collaborations, freelance work, or project enquiries.",
  path: "/connect",
});

export default function ConnectRoute() {
  return <ConnectPage />;
}
