import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  setIndexOfViewedAppliance,
  setViewApplianceVisible,
} from "../redux/actions";
import people from "/Users/maazvali/Documents/coding/Github Projects/Homie/assets/img/peopleImg.png";

function PeopleCard({ person, index }) {
  const dispatch = useDispatch();
  const { viewApplianceTrigger } = useSelector((state) => state.myReducer);

  function handleOpenApplianceDetails() {
    dispatch(setViewApplianceVisible(!viewApplianceTrigger));
    dispatch(setIndexOfViewedAppliance(index));
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
