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
  const { currentPage } = useSelector((state) => state.myReducer);

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
      <View style={styles.card}>
        <Image style={styles.img} source={person["Icon"]} />
        <View style={styles.col1}>
          <Text style={styles.text1}>Name:</Text>
          <Text style={styles.text1}>D.O.B:</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.text}>{person["Name:"]}</Text>
          <Text style={styles.text}>{person["D.O.B:"]}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default PeopleCard;

const styles = StyleSheet.create({
  text: {
    color: colorScheme.primaryFont,
    textAlign: "left",
    marginVertical: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colorScheme.tertiary,
    paddingHorizontal: 5,
    fontSize: 13,
    marginRight: 10,
  },
  text1: {
    color: colorScheme.secondaryFont,
    textAlign: "right",
    fontWeight: "bold",
    backgroundColor: colorScheme.primaryAccent,
    marginVertical: 1,
    borderTopLeftRadius: 10,
    fontSize: 13,
    borderBottomLeftRadius: 10,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colorScheme.secondary,
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
