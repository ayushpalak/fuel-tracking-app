import { StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { primaryBlue } from "../constants/Colors";

interface Props {
  navigation: any;
}
export default function AddEntryButton({ navigation }: Props) {
  return (
    <IconButton
      icon="plus"
      color="white"
      style={styles.add_entry_button}
      size={20}
      onPress={() => navigation.navigate("Refueling")}
    />
  );
}

const styles = StyleSheet.create({
  add_entry_button: {
    width: 55,
    height: 55,
    borderRadius: 50,
    position: "absolute",
    bottom: 15,
    right: 15,
    zIndex: 10,
    backgroundColor: primaryBlue,
  },
});
