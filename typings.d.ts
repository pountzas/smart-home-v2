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
