import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { View } from "../components/Themed";

function EntryScreen() {
  return (
    <View style={styles.container}>
      <Text>EntryScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EntryScreen;
