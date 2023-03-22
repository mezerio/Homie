import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  setIndexOfViewedAppliance,
  setNewEventItem,
  setViewApplianceTrigger,
  setSearchToggle,
} from "../redux/actions";
import people from "/Users/maazvali/Documents/coding/Github Projects/Homie/assets/img/peopleImg.png";

function PeopleCard({ person, index }) {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.myReducer);

  function handleOpenApplianceDetails() {
    if (currentPage == "Home" || currentPage == "People") {
      dispatch(setViewApplianceTrigger(true));
      dispatch(setIndexOfViewedAppliance(index));
    } else {
      dispatch(setNewEventItem(person["Name:"]));
      dispatch(setSearchToggle(false));
    }
  }
  return (
    <Pressable onPress={handleOpenApplianceDetails}>
      <View style={styles.card}>
        <Image style={styles.img} source={people} />
        <View style={styles.col}>
          <Text>Name: {person["Name:"]}</Text>
          <Text>D.O.B: {person["D.O.B:"]}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default PeopleCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    width: 300,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  img: {
    flex: 1,
    aspectRatio: 1,
    margin: 10,
  },
  col: {
    flex: 5,
  },
});
