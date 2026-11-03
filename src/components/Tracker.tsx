"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

export default function Tracker() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return null;
}
