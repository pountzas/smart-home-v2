import { ReactNode } from "react";

type IconProps = {
  size?: number;
  fill?: string;
  fill2?: string;
};

type CarCardData = {
  id: number;
  car: string;
  owner: string;
  block1: string[];
  block2: string[];
  block3: string[];
  block4: string[];
  block5: string[];
  emissionsData: number[];
  costData: number[];
  offPeakData: number[];
  midPeakData: number[];
  peakData: number[];
  carBalance: number[];
  schedules: [number, string, string, string, string][];
  balanced: number[];
  boosted: number[];
};

type CarDetailsTypes = {
  cars: CarCardData[];
  carIndex?: number;
};

type SolarDataType = {
  title: string[];
  details: string[];
  info: string[];
  status: string[];
};

type ChargeHistoryDataType = {
  title: string[];
  details: string[];
  info: string[];
  status: string[];
};

type FakeData = {
  title: "Alarm" | "Warning" | "Error";
  timeAgo: string;
  description: string;
  contributor: string;
  status: Status;
};

type Status = "New" | "Open" | "Forgoten!";

type ChildrenProps = {
  children: ReactNode;
};
