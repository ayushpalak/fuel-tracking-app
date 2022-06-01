import { useNavigation } from "@react-navigation/native";
import { useCallback, useReducer } from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { init, LABELS } from "../constants/Utils";
import { fuelEntryActions } from "../redux-toolkit-store/redux-toolkit-store";
import useFuelConsumptionHelper from "./useFuelConsumptionHelper";

type formReducer = (
  currVal: { [x: number]: any },
  newVal: { [x: number]: any }
) => any;

// get form value from redux store and save them into localstorage and clear the form.
export default function useSaveEntry() {
  const [formValues, setFormValues] = useReducer<formReducer>(
    (currVal, newVal) => ({
      ...currVal,
      ...newVal,
    }),
    init
  );
  const {
    calcAverageFuelConsumption,
    calcLastFuelConsumption,
    calcLastFuelPrice,
    calcTotalGas,
  } = useFuelConsumptionHelper();

  console.log(
    "calc ",
    calcAverageFuelConsumption(),
    calcLastFuelConsumption(),
    calcLastFuelPrice(),
    calcTotalGas()
  );

  const dispatch = useDispatch();
  const handleFormChange = useCallback((name, value) => {
    setFormValues({ [name]: value });
  }, []);

  const navigation = useNavigation();
  const saveEntry = () => {
    //   // save to localstorage
    //   // reset redux state to init.
    //   // navigte to home screen
    //   navigation.navigate("Root");
    dispatch(
      fuelEntryActions.addEntry({
        entry: formValues,
      })
    );
    Alert.alert(JSON.stringify(formValues, undefined, 4));
  };

  return { formValues, saveEntry, handleFormChange };
}
