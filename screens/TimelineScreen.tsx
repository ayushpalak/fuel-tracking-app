import { Dimensions, FlatList, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "../components/Themed";
import {
  background,
  charcoalblue,
  gray1,
  gray2,
  gray3,
  primaryBlue,
} from "../constants/Colors";
import { RootTabScreenProps } from "../types";
import AddEntryButton from "../components/AddEntryButton";

interface TimelineCardProps {
  id: string;
  title: string;
  date: Date;
  price: number;
  index?: number;
}

interface renderItemProps {
  item: TimelineCardProps;
  index: number;
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Refueling",
    date: new Date(),
    price: 10.34,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Refueling",
    date: new Date(),
    price: 11.44,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Refueling",
    date: new Date(),
    price: 11.3,
  },
];

const renderItem = ({ item, index }: renderItemProps) => (
  <TimelineCard {...item} index={index} />
);

const TimelineCard = ({
  title,
  date: dateObj,
  price,
  index,
}: TimelineCardProps) => {
  const month = dateObj.toLocaleString("default", { month: "long" });
  const year = dateObj.getUTCFullYear();
  const date = dateObj.getDate();
  const day = dateObj.toLocaleString("default", { weekday: "long" });
  return (
    <View style={styles.timeline_card}>
      <View style={styles.vertical_bar}></View>
      <View style={styles.timeline_header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.pump_circle_container}>
          <FontAwesome5
            style={styles.pump_icon}
            name="gas-pump"
            size={24}
            color="white"
          />
        </View>
        <View style={styles.day_price_container}>
          <Text style={styles.day}>{`${day}, ${date}`}</Text>
          <Text style={styles.price}>{`$${price}`}</Text>
        </View>
        <View style={styles.miles_container}>
          <MaterialCommunityIcons name="speedometer" size={18} color={gray2} />
          <Text style={styles.miles}>3,245 mi</Text>
        </View>
      </View>

      <View style={styles.circle_month_container}>
        <View style={styles.circle}></View>
        <Text style={styles.month}>{`${month} ${year}`}</Text>
      </View>
      {index === 0 && <View style={styles.starting_circle}></View>}
    </View>
  );
};

export default function TimelineScreen({
  navigation,
}: RootTabScreenProps<"Timeline">) {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <AddEntryButton navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  day_price_container: {
    position: "absolute",
    top: 34,
    left: 78,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 100,
    zIndex: 3,
    backgroundColor: background,
  },
  miles_container: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    top: 70,
    left: 78,
    width: "100%",
    backgroundColor: background,
  },
  miles: {
    paddingLeft: 10,
  },
  month: {
    paddingLeft: 20,
    fontSize: 16,
    color: primaryBlue,
  },
  title: {
    fontSize: 16,
    position: "absolute",
    paddingLeft: 78,
    paddingTop: 7,
  },
  timeline_header: {
    position: "absolute",
    top: 100,
    width: "100%",
    paddingLeft: 17,
    zIndex: 2,
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: background,
  },
  timeline_card: {
    width: Dimensions.get("window").width,
    height: 300,
    backgroundColor: background,
  },
  vertical_bar: {
    position: "absolute",
    width: 2,
    height: "100%",
    left: 40,
    backgroundColor: primaryBlue,
    zIndex: 2,
  },
  circle: {
    backgroundColor: primaryBlue,
    width: 20,
    height: 20,
    borderRadius: 50,
    zIndex: 1,
  },
  starting_circle: {
    width: 20,
    height: 20,
    borderRadius: 50,
    zIndex: 1,
    backgroundColor: primaryBlue,
    left: 31,
  },
  circle_month_container: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    bottom: 0,
    left: 31,
    backgroundColor: background,
  },
  pump_circle_container: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: primaryBlue,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pump_icon: {
    paddingLeft: 2,
  },
  price: {
    color: charcoalblue,
    fontWeight: "600",
  },
  day: {
    color: gray1,
  },
});
