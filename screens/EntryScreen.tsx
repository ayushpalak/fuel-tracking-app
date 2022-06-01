import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useCallback, useReducer } from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Text, TextInput } from "react-native-paper";
import FlexRow from "../components/FlexRow";
import { View } from "../components/Themed";
import { background, gray1, gray2 } from "../constants/Colors";
import { LABELS } from "../constants/Utils";
import useFuelConsumptionHelper from "../hooks/useFuelConsumptionHelper";

function EntryScreen({ formValues, handleFormChange }) {
  const { calcLastOdometerValue } = useFuelConsumptionHelper();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <FlexRow>
          <MaterialCommunityIcons
            style={styles.icon}
            name="speedometer"
            size={18}
            color={gray2}
          />

          <TextInput
            style={styles.fullWidth}
            label={LABELS.odometer}
            autoComplete="off"
            value={formValues[LABELS.odometer]}
            keyboardType="number-pad"
            mode="outlined"
            onChangeText={(val) => {
              handleFormChange(LABELS.odometer, val);
            }}
          />
        </FlexRow>
        <Text style={styles.lastValue}>
          Last value: {calcLastOdometerValue?.()} mi
        </Text>
        <FlexRow>
          <MaterialCommunityIcons
            style={styles.icon}
            name="fuel"
            size={18}
            color={gray2}
          />
          <TextInput
            style={styles.halfWidth}
            label={LABELS.gas}
            autoComplete="off"
            value={formValues[LABELS.gas]}
            keyboardType="number-pad"
            mode="outlined"
            onChangeText={(val) => {
              handleFormChange(LABELS.gas, val);
            }}
          />
          <TextInput
            style={styles.halfWidth}
            label={LABELS.gasType}
            editable={false}
            autoComplete="off"
            value={formValues[LABELS.gasType]}
            mode="outlined"
            onChangeText={(val) => {
              handleFormChange(LABELS.gasType, val);
            }}
          />
        </FlexRow>
        <FlexRow>
          <MaterialIcons
            style={styles.icon}
            name="attach-money"
            size={18}
            color={gray2}
          />

          <TextInput
            style={styles.halfWidth}
            label={LABELS.price}
            autoComplete="off"
            value={formValues[LABELS.price]}
            keyboardType="number-pad"
            mode="outlined"
            onChangeText={(val) => {
              handleFormChange(LABELS.price, val);
            }}
          />
          <TextInput
            style={styles.halfWidth}
            label={LABELS.totalCost}
            autoComplete="off"
            value={formValues[LABELS.totalCost]}
            keyboardType="number-pad"
            mode="outlined"
            onChangeText={(val) => {
              handleFormChange(LABELS.totalCost, val);
            }}
          />
        </FlexRow>
        <FlexRow>
          <MaterialCommunityIcons
            style={styles.icon}
            name="calendar"
            size={18}
            color={gray2}
          />
          <TextInput
            style={styles.halfWidth}
            label={LABELS.date}
            editable={false}
            autoComplete="off"
            value={formValues[LABELS.date]}
            mode="outlined"
            onChangeText={(val) => {
              handleFormChange(LABELS.date, val);
            }}
          />
          <TextInput
            style={styles.halfWidth}
            label={LABELS.time}
            editable={false}
            autoComplete="off"
            value={formValues[LABELS.time]}
            mode="outlined"
            onChangeText={(val) => {
              handleFormChange(LABELS.time, val);
            }}
          />
        </FlexRow>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background,
  },
  fullWidth: {
    flex: 1,
    width: "auto",
    marginRight: 10,
    marginBottom: 5,
  },
  halfWidth: {
    flex: 1,
    marginRight: 10,
    marginVertical: 10,
  },
  flexrow: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    paddingHorizontal: 15,
  },
  lastValue: {
    fontSize: 12,
    paddingTop: 5,
    marginBottom: 18,
    alignSelf: "flex-start",
    paddingLeft: 60,
    color: gray1,
  },
});

export default EntryScreen;
