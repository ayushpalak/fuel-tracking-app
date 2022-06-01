import { createSlice, configureStore } from "@reduxjs/toolkit";
import { init, LABELS } from "../constants/Utils";

const initialState = {
  currentEntryId: -1,
  firstEntryId: 0,
  secondLastEntryId: 1,
  monthYearToIdMap: {},
  0: { ...init },
  1: { ...init },
};

const fuelEntrySlice = createSlice({
  name: "fuelEntry",
  initialState,
  reducers: {
    addEntry: (state, action) => {
      state.currentEntryId = state.currentEntryId + 1;
      state[state.currentEntryId] = action?.payload?.entry;
      const date = action?.payload?.entry?.[LABELS.date];
      if (state.monthYearToIdMap[date]) {
        const updatedIdArr = state.monthYearToIdMap[date];
        state.monthYearToIdMap[action?.payload?.entry?.[LABELS.date]] = [
          ...updatedIdArr,
          state.currentEntryId,
        ];
      } else {
        state.monthYearToIdMap[action?.payload?.entry?.[LABELS.date]] = [
          state.currentEntryId,
        ];
      }

      
    },
  },
});

export const fuelEntryActions = fuelEntrySlice.actions;

export const store = configureStore({
  reducer: {
    fuelEntry: fuelEntrySlice.reducer,
  },
});
