"use client";

import { ChildrenProps } from "@/typings";
import { RecoilRoot as Root } from "recoil";

export default function RecoilRoot({ children }: ChildrenProps) {
  return <Root>{children}</Root>;
}
