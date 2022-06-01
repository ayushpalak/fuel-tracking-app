import { Dimensions, FlatList, ScrollView, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
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
import { Chip } from "react-native-paper";
import AddEntryButton from "../components/AddEntryButton";
import useFuelConsumptionHelper from "../hooks/useFuelConsumptionHelper";

function CardItem({ icon, title, description }) {
  return (
    <View style={styles.card_item__container}>
      <View style={styles.card_item__icon}>{icon}</View>
      <Text style={styles.card_item__title}>{title}</Text>
      <View style={styles.card_item__description}>
        <Text style={styles.card_item__description_text}>{description}</Text>
      </View>
    </View>
  );
}

function Card({ children }: { children: any }) {
  return <View style={styles.card_container}>{children}</View>;
}
function CardHeader({ title }: { title: string }) {
  return <Text style={styles.card_header__title}>{title}</Text>;
}
function SectionContainer({ children }: { children: any }) {
  return <View style={styles.section_container}>{children}</View>;
}

function GasSection() {
  const {
    calcAverageFuelConsumption,
    calcLastFuelConsumption,
    calcLastFuelPrice,
    calcTotalGas,
  } = useFuelConsumptionHelper();
  const dropIcon = <Entypo name="drop" color={primaryBlue} />;
  const trendIcon = <Ionicons name="trending-up" color="green" />;
  const avgFuelConsumption = (
    <Text>
      {calcAverageFuelConsumption()} <Text style={styles.title_unit}>mi/l</Text>
    </Text>
  );
  const lastFuelConsumption = (
    <Text>
      {calcLastFuelConsumption()} <Text style={styles.title_unit}>mi/l</Text>
    </Text>
  );
  const lastFuelPrice = (
    <Text>
      ${calcLastFuelPrice()} <Text style={styles.title_unit}>mi/l</Text>
    </Text>
  );

  const avgFuelConsumptionDescription = "Average fuel consumption";
  const lastFuelConsumptionDescription = "Last fuel consumption";
  const lastFuelPriceDescription = "Last fuel price";

  return (
    <SectionContainer>
      <Chip
        style={styles.chip}
        icon={() => <MaterialCommunityIcons name="fuel" color={primaryBlue} />}
        onPress={() => {}}
      >
        Gas
      </Chip>

      <Card>
        <CardItem
          icon={dropIcon}
          title={avgFuelConsumption}
          description={avgFuelConsumptionDescription}
        />
        <CardItem
          icon={trendIcon}
          title={lastFuelConsumption}
          description={lastFuelConsumptionDescription}
        />
        <CardItem
          icon={trendIcon}
          title={lastFuelPrice}
          description={lastFuelPriceDescription}
        />
      </Card>
    </SectionContainer>
  );
}

function CostsSection() {
  const fuelIcon = <MaterialCommunityIcons name="fuel" color={primaryBlue} />;
  const billIcon = <FontAwesome5 name="money-bill-alt" color={primaryBlue} />;
  const totalGasConsumption = <Text>$0.00</Text>;
  const totalOtherCostConsumption = <Text>$0.00</Text>;

  const totalGasDescription = "Gas";
  const otherCostDescription = "Other costs";

  return (
    <SectionContainer>
      <Chip
        style={styles.chip}
        icon={() => <FontAwesome5 name="coins" color={primaryBlue} />}
        onPress={() => {}}
      >
        Costs
      </Chip>
      <Card>
        <CardHeader title="THIS MONTH"></CardHeader>
        <CardItem
          icon={fuelIcon}
          title={totalGasConsumption}
          description={totalGasDescription}
        />
        <CardItem
          icon={billIcon}
          title={totalOtherCostConsumption}
          description={otherCostDescription}
        />
        <CardHeader title="PREVIOUS MONTH"></CardHeader>
        <CardItem
          icon={fuelIcon}
          title={totalGasConsumption}
          description={totalGasDescription}
        />
        <CardItem
          icon={billIcon}
          title={totalOtherCostConsumption}
          description={otherCostDescription}
        />
      </Card>
    </SectionContainer>
  );
}

function LastEntriesSection() {
  const fuelIcon = <MaterialCommunityIcons name="fuel" color={primaryBlue} />;
  const billIcon = <FontAwesome5 name="money-bill-alt" color={primaryBlue} />;
  const totalGasConsumption1 = <Text>$57.00</Text>;
  const totalGasConsumption2 = <Text>$52.00</Text>;

  const totalRefuelingDescription = "Refueling";

  return (
    <SectionContainer>
      <Chip
        style={styles.chip}
        icon={() => <Ionicons name="trending-up" color={primaryBlue} />}
        onPress={() => {}}
      >
        Last entries
      </Chip>
      <Card>
        <CardHeader title="SEPTEMBER 2021" />
        <CardItem
          icon={fuelIcon}
          title={totalGasConsumption1}
          description={totalRefuelingDescription}
        />
        <CardHeader title="JULY 2021" />
        <CardItem
          icon={billIcon}
          title={totalGasConsumption2}
          description={totalRefuelingDescription}
        />
      </Card>
    </SectionContainer>
  );
}

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <>
      <ScrollView style={styles.container}>
        <GasSection></GasSection>
        <CostsSection></CostsSection>
        <LastEntriesSection></LastEntriesSection>
      </ScrollView>
      <AddEntryButton navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    paddingHorizontal: 15,
  },
  section_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: background,
  },
  chip: {
    maxHeight: 50,
    height: 35,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  card_container: {
    width: "100%",
    marginHorizontal: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  card_item__container: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: gray3,
  },
  card_item__icon: {
    paddingRight: 10,
    backgroundColor: gray3,
    minWidth: 28,
    maxWidth: "auto",
  },
  card_item__title: {
    fontSize: 16,
    color: "white",
  },
  card_item__description: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: gray3,
  },
  title_unit: {
    paddingLeft: 10,
    color: gray1,
    fontSize: 12,
  },
  card_item__description_text: {
    color: gray1,
    fontSize: 12,
  },
  card_header__title: {
    color: gray2,
    fontSize: 10,
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: gray3,
  },
});
