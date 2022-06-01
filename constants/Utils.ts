export const LABELS = {
  odometer: "Odometer",
  gas: "Gas",
  gasType: "Gas Type",
  price: "Price",
  totalCost: "Total Cost",
  date: "Date",
  time: "Time",
};

export const init = {
  [LABELS.odometer]: "",
  [LABELS.gas]: "",
  [LABELS.gasType]: "Regular",
  [LABELS.price]: "",
  [LABELS.totalCost]: "",
  [LABELS.date]: new Date().toLocaleString("fr-CA").split(" ")[0],
  [LABELS.time]: new Date().toLocaleString("en-US").split(",")[1],
};
