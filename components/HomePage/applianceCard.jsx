import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import colorScheme from "../../assets/functions/colors";
import {
  setIndexOfViewedAppliance,
  setViewApplianceTrigger,
  setNewEventItem,
  setSearchTrigger,
  setUpdatedIcon,
} from "../../redux/actions";

function ApplianceCard({ appliance, index }) {
  const { currentPage, colorTheme } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleOpenApplianceDetails() {
    if (currentPage == "Home" || currentPage == "People") {
      dispatch(setUpdatedIcon(appliance["Icon"]));
      dispatch(setViewApplianceTrigger(true));
      dispatch(setIndexOfViewedAppliance(index));
    } else {
      dispatch(setNewEventItem(appliance));
      dispatch(setSearchTrigger(false));
    }
  }
  return (
    <Pressable onPress={handleOpenApplianceDetails}>
      <View style={styles[colorTheme].card}>
        <Image style={styles[colorTheme].img} source={appliance["Icon"]} />
        <View style={styles[colorTheme].col1}>
          <Text style={styles[colorTheme].text1}>Name:</Text>
          <Text style={styles[colorTheme].text1}>Vender: </Text>
          <Text style={styles[colorTheme].text1}>Model#:</Text>
          <Text style={styles[colorTheme].text1}>Serial#:</Text>
        </View>
        <View style={styles[colorTheme].col}>
          <Text style={styles[colorTheme].text}>
            {appliance["Product Name/Title:"]}
          </Text>
          <Text style={styles[colorTheme].text}>{appliance["Vender:"]}</Text>
          <Text style={styles[colorTheme].text}>
            {appliance["Model Number:"]}
          </Text>
          <Text style={styles[colorTheme].text}>
            {appliance["Serial Number:"]}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ApplianceCard;
const styles = {};
styles["dark"] = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colorScheme["dark"].secondary,
    width: 300,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    color: colorScheme["dark"].primaryFont,
    textAlign: "left",
    marginVertical: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colorScheme["dark"].tertiary,
    paddingHorizontal: 5,
    fontSize: 13,
  },
  text1: {
    color: colorScheme["dark"].secondaryFont,
    textAlign: "right",
    fontWeight: "bold",
    backgroundColor: colorScheme["dark"].primaryAccent,
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
styles["light"] = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colorScheme["light"].secondary,
    width: 300,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    color: colorScheme["light"].primaryFont,
    textAlign: "left",
    marginVertical: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colorScheme["light"].tertiary,
    paddingHorizontal: 5,
    fontSize: 13,
  },
  text1: {
    color: colorScheme["light"].secondaryFont,
    textAlign: "right",
    fontWeight: "bold",
    backgroundColor: colorScheme["light"].primaryAccent,
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
styles["blue"] = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colorScheme["blue"].secondary,
    width: 300,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    color: colorScheme["blue"].primaryFont,
    textAlign: "left",
    marginVertical: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colorScheme["blue"].tertiary,
    paddingHorizontal: 5,
    fontSize: 13,
  },
  text1: {
    color: colorScheme["blue"].secondaryFont,
    textAlign: "right",
    fontWeight: "bold",
    backgroundColor: colorScheme["blue"].primaryAccent,
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
styles["purple"] = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colorScheme["purple"].secondary,
    width: 300,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    color: colorScheme["purple"].primaryFont,
    textAlign: "left",
    marginVertical: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colorScheme["purple"].tertiary,
    paddingHorizontal: 5,
    fontSize: 13,
  },
  text1: {
    color: colorScheme["purple"].secondaryFont,
    textAlign: "right",
    fontWeight: "bold",
    backgroundColor: colorScheme["purple"].primaryAccent,
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
