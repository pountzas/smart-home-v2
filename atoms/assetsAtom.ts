import { create } from "zustand";

interface GraphStore {
  activeGraphConsState: boolean;
  setActiveGraphConsState: (value: boolean) => void;
  
  activeGraphExpState: boolean;
  setActiveGraphExpState: (value: boolean) => void;
  
  activeGraphImpState: boolean;
  setActiveGraphImpState: (value: boolean) => void;
  
  activeGraphGenState: boolean;
  setActiveGraphGenState: (value: boolean) => void;
  
  activeGraphGridState: boolean;
  setActiveGraphGridState: (value: boolean) => void;
  
  activeGraphBattState: boolean;
  setActiveGraphBattState: (value: boolean) => void;
}

// Graph state store
export const useGraphStore = create<GraphStore>((set) => ({
  activeGraphConsState: false,
  setActiveGraphConsState: (value: boolean) => set({ activeGraphConsState: value }),
  
  activeGraphExpState: false,
  setActiveGraphExpState: (value: boolean) => set({ activeGraphExpState: value }),
  
  activeGraphImpState: false,
  setActiveGraphImpState: (value: boolean) => set({ activeGraphImpState: value }),
  
  activeGraphGenState: false,
  setActiveGraphGenState: (value: boolean) => set({ activeGraphGenState: value }),
  
  activeGraphGridState: false,
  setActiveGraphGridState: (value: boolean) => set({ activeGraphGridState: value }),
  
  activeGraphBattState: false,
  setActiveGraphBattState: (value: boolean) => set({ activeGraphBattState: value }),
}));

interface SensorsStore {
  sensorsUUIDsState: any[];
  setSensorsUUIDsState: (value: any) => void;

  sensorsValuesState: any;
  setSensorsValuesState: (value: any) => void;

  sensorsPopulationsState: any;
  setSensorsPopulationsState: (value: any) => void;
}

// Sensors state store
export const useSensorsStore = create<SensorsStore>((set) => ({
  sensorsUUIDsState: [
    { gridUUID: "Grid" },
    { solarUUID: "Solar" },
    { windUUID: "Wind" },
    { consUUID: "Home" },
    { battUUID: "Battery" },
    { battPercentUUID: "battPercentUUID" },
    { carUUID: "EVcharger" },
    { carPercentUUID: "carPercentUUID" },
    { bigLoad1UUID: "Big01" },
    { bigLoad2UUID: "Big02" },
    { bigLoad3UUID: "Big03" },
    { bigLoad4UUID: "Big04" },
    { bigLoad5UUID: "Big05" },
    { bigLoad6UUID: "Big06" },
    { bigLoad7UUID: "Big07" },
    { bigLoad8UUID: "Big08" },
    { bigLoad9UUID: "Big09" },
    { bigLoad10UUID: "Big10" }
  ],
  setSensorsUUIDsState: (value: any) => set({ sensorsUUIDsState: value }),

  sensorsValuesState: {
    isConnectedToStream: false,
    wsGridValue: 0,
    wsSolarValue: 0,
    wsWindValue: 0,
    wsConsValue: 0,
    wsBattValue: 0,
    wsBattPercentValue: 0,
    wsCarValue: 0,
    wsCarPercentValue: 0,
    wsBigLoad1Value: 0,
    wsBigLoad2Value: 0,
    wsBigLoad3Value: 0,
    wsBigLoad4Value: 0,
    wsBigLoad5Value: 0,
    wsBigLoad6Value: 0,
    wsBigLoad7Value: 0,
    wsBigLoad8Value: 0,
    wsBigLoad9Value: 0,
    wsBigLoad10Value: 0
  },
  setSensorsValuesState: (value: any) => set({ sensorsValuesState: value }),

  sensorsPopulationsState: {
    wsGridPopulation: 1,
    wsSolarPopulation: 24,
    wsWindPopulation: 3,
    wsConsPopulation: 1,
    wsBattPopulation: 4,
    wsCarPopulation: 3,
    wsBigLoad1Population: 1,
    wsBigLoad2Population: 1,
    wsBigLoad3Population: 1,
    wsBigLoad4Population: 1,
    wsBigLoad5Population: 1,
    wsBigLoad6Population: 1,
    wsBigLoad7Population: 1,
    wsBigLoad8Population: 1,
    wsBigLoad9Population: 1,
    wsBigLoad10Population: 1
  },
  setSensorsPopulationsState: (value: any) => set({ sensorsPopulationsState: value }),
}));

interface SensorsDetailsStore {
  sensorsDetailsState: any;
  setSensorsDetailsState: (value: any) => void;
}

// Sensors details store
export const useSensorsDetailsStore = create<SensorsDetailsStore>((set) => ({
  sensorsDetailsState: {
    grid: {},
    solar: {
      output: 350
    },
    wind: {
      output: 4850
    },
    battery: [
      {
        model: "PowerWall 2",
        brand: "Tesla",
        output: 5000,
        capacity: 13500
      },
      {
        model: "PowerWall 2",
        brand: "Tesla",
        output: 5000,
        capacity: 13500
      },
      {
        model: "PowerWall 2",
        brand: "Tesla",
        output: 5000,
        capacity: 13500
      }
    ],
    car: {
      model: ["Model S", "Model 3", "Model X"],
      brand: ["Tesla", "Tesla", "Tesla"],
      chargeType: ["Rapid", "SuperFast", "Fast", "Slow"],
      input: [120000, 22000, 7000, 3000],
      output: [22000, 22000, 7000, 3000],
      batteryCapacity: [135000, 45000, 80000]
    },
    airConditioner: {
      model: ["LG", "Samsung", "Panasonic", "Daikin"],
      brand: ["LG", "Samsung", "Panasonic", "Daikin"],
      input: [1680, 1520, 1800, 1800]
    },
    oven: {
      model: ["Miele"],
      brand: ["Miele"],
      input: [3000]
    },
    washingMachine: {
      model: ["Miele"],
      brand: ["Miele"],
      input: [2000]
    },
    dishwasher: {
      model: ["Miele"],
      brand: ["Miele"],
      input: [1200]
    },
    dryer: {
      model: ["Miele"],
      brand: ["Miele"],
      input: [1000]
    },
    fridge: {
      model: ["Miele"],
      brand: ["Miele"],
      input: [350]
    },
    freezer: {
      model: ["Miele"],
      brand: ["Miele"],
      input: [250]
    }
  },
  setSensorsDetailsState: (value: any) => set({ sensorsDetailsState: value }),
}));
