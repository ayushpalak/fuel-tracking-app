import { ReactChild } from "react";
import { StyleSheet, View } from "react-native";

export default function FlexRow({ children }: { children: ReactChild[] }) {
  return <View style={styles.flexrow}>{children}</View>;
}

const styles = StyleSheet.create({
  flexrow: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
