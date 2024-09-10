const EmissionsData = [90.3, 121.1];

const CostData = [65.32, 84.12];

const UsageData = [80, 100];

const MidPeakData = [16, 100];

const PeakData = [4, 100];

const CarsModalCardData = [
  {
    id: 1,
    car: "Tesla 3",
    owner: "James",
    block1: ["Charging Time", "2h51m"],
    block2: ["Energy", "12.11kWh"],
    block3: ["Status", "Charging"],
    block4: ["Charging cost", "12£"],
    block5: ["CO2", "14kg"],
    emissionsData: [EmissionsData[0], EmissionsData[1]],
    costData: [CostData[0], CostData[1]],
    offPeakData: [UsageData[0], UsageData[1]],
    midPeakData: [MidPeakData[0], MidPeakData[1]],
    peakData: [PeakData[0], PeakData[1]],
    carBalance: [34.32, 40],
    schedules: [
      [24, "wed", "oct 2022", "09:00", "15:00"],
      [27, "Sat", "Oct 2022", "07:00", "15:00"]
    ],
    balanced: [
      34, 32, 40, 0, 45, 66, 45, 66, 51, 0, 69, 55, 45, 66, 51, 44, 87, 22, 33,
      0, 14, 0, 0, 69, 55, 45, 66, 45, 66, 100
    ],
    boosted: [
      34, 32, 40, 0, 45, 66, 45, 66, 51, 0, 75, 55, 45, 66, 51, 55, 87, 22, 33,
      0, 14, 0, 0, 69, 55, 45, 66, 45, 66, 100
    ]
  },
  {
    id: 2,
    car: "Tesla S Plaid",
    owner: "Nikos",
    block1: ["Charging Time", "0h51m"],
    block2: ["Energy", "5.11kWh"],
    block3: ["Status", "Charging"],
    block4: ["Charging cost", "2£"],
    block5: ["CO2", "1kg"],
    emissionsData: [EmissionsData[0], EmissionsData[1]],
    costData: [CostData[0], CostData[1]],
    offPeakData: [UsageData[0] * 1.1, UsageData[1]],
    midPeakData: [MidPeakData[0] * 1.3, MidPeakData[1]],
    peakData: [PeakData[0] * 1.4, PeakData[1]],
    carBalance: [33.32, 100],
    schedules: [
      [24, "Wed", "Oct 2022", "09:00", "15:00"],
      [26, "Fri", "Oct 2022", "09:00", "15:00"]
    ],
    balanced: [
      34, 32, 40, 0, 45, 66, 45, 66, 51, 0, 69, 55, 45, 66, 51, 44, 87, 22, 33,
      0, 14, 0, 0, 69, 55, 45, 66, 45, 66, 60
    ],
    boosted: [
      34, 32, 50, 0, 45, 66, 45, 66, 51, 30, 69, 55, 74, 66, 51, 44, 87, 22, 33,
      0, 14, 0, 0, 69, 55, 45, 66, 45, 66, 100
    ]
  },
  {
    id: 3,
    car: "BMW i3",
    owner: "Jack",
    block1: ["Charging Time", "1h51m"],
    block2: ["Energy", "7.11kWh"],
    block3: ["Status", "Charging"],
    block4: ["Charging cost", "5£"],
    block5: ["CO2", "4kg"],
    emissionsData: [EmissionsData[0], EmissionsData[1]],
    costData: [CostData[0], CostData[1]],
    offPeakData: [UsageData[0] * 1.2, UsageData[1]],
    midPeakData: [MidPeakData[0] * 1.5, MidPeakData[1]],
    peakData: [PeakData[0] * 1.8, PeakData[1]],
    carBalance: [14.32, 27.2],
    schedules: [
      [24, "Wed", "Oct 2022", "09:00", "15:00"],
      [26, "Fri", "Oct 2022", "09:00", "10:00"]
    ],
    balanced: [
      34, 32, 40, 0, 45, 66, 45, 66, 51, 0, 69, 55, 45, 66, 51, 44, 87, 22, 33,
      0, 14, 0, 0, 69, 55, 45, 66, 45, 66, 90
    ],
    boosted: [
      34, 32, 50, 0, 45, 66, 45, 66, 51, 0, 69, 55, 45, 66, 51, 44, 87, 22, 33,
      0, 14, 0, 0, 69, 55, 45, 66, 55, 70, 100
    ]
  }
];

export {
  CarsModalCardData,
  CostData,
  EmissionsData,
  MidPeakData,
  PeakData,
  UsageData
};
