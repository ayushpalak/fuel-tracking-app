import { useSelector } from "react-redux";
import { LABELS } from "../constants/Utils";

function useFuelConsumptionHelper() {
  const {
    firstEntryId,
    secondLastEntryId,
    currentEntryId,
    monthYearToIdMap,
    ...rest
  } = useSelector((state: any) => state.fuelEntry);

  const calcTotalGas = () => {
    const entries = Object.values(rest);
    console.log({ entries });
    return entries.reduce(
      (accum: number, entry: any) => accum + parseInt(entry[LABELS.gas]),
      0
    );
  };
  const calcAverageFuelConsumption = () => {
    return (
      (rest[currentEntryId]?.[LABELS.odometer] -
        rest[firstEntryId]?.[LABELS.odometer]) /
      calcTotalGas()
    )?.toFixed(2);
  };
  const calcLastFuelConsumption = () => {
    return (
      (rest[currentEntryId]?.[LABELS.odometer] -
        rest[currentEntryId - 1]?.[LABELS.odometer]) /
      rest[secondLastEntryId][LABELS.gas]
    )?.toFixed(2);
  };
  const calcLastFuelPrice = () => {
    return (
      rest?.[currentEntryId]?.[LABELS.totalCost] /
      rest?.[currentEntryId]?.[LABELS.gas]
    )?.toFixed(2);
  };

  const calcLastOdometerValue = () => {
    console.log("last", { rest, currentEntryId });
    return rest?.[currentEntryId]?.[LABELS.odometer] || 0;
  };

  return {
    calcAverageFuelConsumption,
    calcLastFuelConsumption,
    calcLastFuelPrice,
    calcTotalGas,
    calcLastOdometerValue,
  };
}

export default useFuelConsumptionHelper;
