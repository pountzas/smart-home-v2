"use client";

type ChildrenProps = {
  children: React.ReactNode;
};

export default function RecoilRoot({ children }: ChildrenProps) {
  return <>{children}</>;
}
