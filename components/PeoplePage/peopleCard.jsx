import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import colorScheme from "../../assets/functions/colors";
import {
  setIndexOfViewedAppliance,
  setNewEventItem,
  setViewApplianceTrigger,
  setSearchTrigger,
  setUpdatedIcon,
} from "../../redux/actions";

function PeopleCard({ person, index }) {
  const dispatch = useDispatch();
  const { currentPage, colorTheme } = useSelector((state) => state.myReducer);

  function handleOpenApplianceDetails() {
    if (currentPage == "Home" || currentPage == "People") {
      dispatch(setUpdatedIcon(person["Icon"]));
      dispatch(setViewApplianceTrigger(true));
      dispatch(setIndexOfViewedAppliance(index));
    } else {
      dispatch(setNewEventItem(person));
      dispatch(setSearchTrigger(false));
    }
  }
  return (
    <Pressable onPress={handleOpenApplianceDetails}>
      <View style={styles[colorTheme].card}>
        <Image style={styles[colorTheme].img} source={person["Icon"]} />
        <View style={styles[colorTheme].col1}>
          <Text style={styles[colorTheme].text1}>Name:</Text>
          <Text style={styles[colorTheme].text1}>D.O.B:</Text>
        </View>
        <View style={styles[colorTheme].col}>
          <Text style={styles[colorTheme].text}>{person["Name:"]}</Text>
          <Text style={styles[colorTheme].text}>{person["D.O.B:"]}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default PeopleCard;
const styles = {};
styles["dark"] = StyleSheet.create({
  text: {
    color: colorScheme["dark"].primaryFont,
    textAlign: "left",
    marginVertical: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colorScheme["dark"].tertiary,
    paddingHorizontal: 5,
    fontSize: 13,
    marginRight: 10,
  },
  text1: {
    color: colorScheme["dark"].secondaryFont,
    textAlign: "right",
    fontWeight: "bold",
    backgroundColor: colorScheme["dark"].primaryAccent,
    marginVertical: 1,
    borderTopLeftRadius: 10,
    fontSize: 13,
    borderBottomLeftRadius: 10,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colorScheme["dark"].secondary,
    width: 300,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  img: {
    flex: 3,
    aspectRatio: 1,
    margin: 10,
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
  text: {
    color: colorScheme["light"].primaryFont,
    textAlign: "left",
    marginVertical: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colorScheme["light"].tertiary,
    paddingHorizontal: 5,
    fontSize: 13,
    marginRight: 10,
  },
  text1: {
    color: colorScheme["light"].secondaryFont,
    textAlign: "right",
    fontWeight: "bold",
    backgroundColor: colorScheme["light"].primaryAccent,
    marginVertical: 1,
    borderTopLeftRadius: 10,
    fontSize: 13,
    borderBottomLeftRadius: 10,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colorScheme["light"].secondary,
    width: 300,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  img: {
    flex: 3,
    aspectRatio: 1,
    margin: 10,
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
  text: {
    color: colorScheme["blue"].primaryFont,
    textAlign: "left",
    marginVertical: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colorScheme["blue"].tertiary,
    paddingHorizontal: 5,
    fontSize: 13,
    marginRight: 10,
  },
  text1: {
    color: colorScheme["blue"].secondaryFont,
    textAlign: "right",
    fontWeight: "bold",
    backgroundColor: colorScheme["blue"].primaryAccent,
    marginVertical: 1,
    borderTopLeftRadius: 10,
    fontSize: 13,
    borderBottomLeftRadius: 10,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colorScheme["blue"].secondary,
    width: 300,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  img: {
    flex: 3,
    aspectRatio: 1,
    margin: 10,
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
  text: {
    color: colorScheme["purple"].primaryFont,
    textAlign: "left",
    marginVertical: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colorScheme["purple"].tertiary,
    paddingHorizontal: 5,
    fontSize: 13,
    marginRight: 10,
  },
  text1: {
    color: colorScheme["purple"].secondaryFont,
    textAlign: "right",
    fontWeight: "bold",
    backgroundColor: colorScheme["purple"].primaryAccent,
    marginVertical: 1,
    borderTopLeftRadius: 10,
    fontSize: 13,
    borderBottomLeftRadius: 10,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colorScheme["purple"].secondary,
    width: 300,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  img: {
    flex: 3,
    aspectRatio: 1,
    margin: 10,
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
