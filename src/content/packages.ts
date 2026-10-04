export const packages = [
  { id: 'Basic', price: 85, storage: '2.5', daily: 5, days: '180', setup: 50, disk: 100, gui: false, recommended: false },
  { id: 'Standard', price: 140, storage: '5.0', daily: 10, days: '365', setup: 50, disk: 100, gui: false, recommended: true },
  { id: 'Premium', price: 220, storage: '10.0', daily: 25, days: '365+', setup: 50, disk: 100, gui: true, recommended: false },
] as const;
