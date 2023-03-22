import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import colorScheme from "./colors";
import {
  setIndexOfViewedAppliance,
  setViewApplianceTrigger,
  setNewEventItem,
  setSearchToggle,
} from "../redux/actions";
import home from "/Users/maazvali/Documents/coding/Github Projects/Homie/assets/img/homeImg.png";

function ApplianceCard({ appliance, index }) {
  const { currentPage } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleOpenApplianceDetails() {
    if (currentPage == "Home" || currentPage == "People") {
      dispatch(setViewApplianceTrigger(true));
      dispatch(setIndexOfViewedAppliance(index));
    } else {
      dispatch(setNewEventItem(appliance["Vender:"]));
      dispatch(setSearchToggle(false));
    }
  }
  return (
    <Pressable onPress={handleOpenApplianceDetails}>
      <View style={styles.card}>
        <Image style={styles.img} source={home} />
        <View style={styles.col}>
          <Text style={styles.text}>Vender: {appliance["Vender:"]}</Text>
          <Text style={styles.text}>
            Product Name/Title: {appliance["Product Name/Title:"]}
          </Text>
          <Text style={styles.text}>
            Model Number: {appliance["Model Number:"]}
          </Text>
          <Text style={styles.text}>
            Serial Number: {appliance["Serial Number:"]}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ApplianceCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colorScheme.secondary,
    width: 300,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    color: colorScheme.primaryFont,
  },
  img: {
    flex: 1,
    aspectRatio: 1,
    margin: 5,
  },
  col: {
    flex: 5,
  },
});
