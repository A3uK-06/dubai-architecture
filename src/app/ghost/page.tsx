import type { Metadata } from "next";
import GhostClient from "./GhostClient";

export const metadata: Metadata = {
  title: "Ghost Mode | Dubai Architecture",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GhostPage() {
  return <GhostClient />;
}
