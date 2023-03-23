import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import colorScheme from "./colors";
import {
  setIndexOfViewedAppliance,
  setViewApplianceTrigger,
  setNewEventItem,
  setSearchToggle,
  setUpdatedIcon,
} from "../redux/actions";

function ApplianceCard({ appliance, index }) {
  const { currentPage } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleOpenApplianceDetails() {
    if (currentPage == "Home" || currentPage == "People") {
      dispatch(setUpdatedIcon(appliance["Icon"]));
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
        <Image style={styles.img} source={appliance["Icon"]} />
        <View style={styles.col1}>
          <Text style={styles.text1}>Name:</Text>
          <Text style={styles.text1}>Vender: </Text>
          <Text style={styles.text1}>Model#:</Text>
          <Text style={styles.text1}>Serial#:</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.text}>{appliance["Product Name/Title:"]}</Text>
          <Text style={styles.text}>{appliance["Vender:"]}</Text>
          <Text style={styles.text}>{appliance["Model Number:"]}</Text>
          <Text style={styles.text}>{appliance["Serial Number:"]}</Text>
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
    // borderColor: colorScheme.primaryFont,
    // borderWidth: 1,
  },
  text: {
    color: colorScheme.primaryFont,
    textAlign: "left",
    marginVertical: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colorScheme.tertiary,
    paddingHorizontal: 5,
    fontSize: 13,
  },
  text1: {
    color: colorScheme.secondaryFont,
    textAlign: "right",
    fontWeight: "bold",
    backgroundColor: colorScheme.primaryAccent,
    marginVertical: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    fontSize: 13,
  },
  img: {
    flex: 3,
    aspectRatio: 1,
    margin: 5,
    opacity: 0.8,
    resizeMode: "contain",
  },
  col: {
    flex: 10,
  },
  col1: {
    flex: 4,
  },
});
