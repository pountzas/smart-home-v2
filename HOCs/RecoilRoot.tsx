"use client";

import { RecoilRoot as Root } from "recoil";

type ChildrenProps = {
  children: React.ReactNode;
};

export default function RecoilRoot({ children }: ChildrenProps) {
  return <Root>{children}</Root>;
}
