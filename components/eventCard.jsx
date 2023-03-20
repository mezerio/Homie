import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  setIndexOfViewedAppliance,
  setViewApplianceVisible,
} from "../redux/actions";
import home from "/Users/maazvali/Documents/coding/Github Projects/Homie/assets/img/homeImg.png";

function EventCard({ event, index }) {
  const { viewApplianceTrigger } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();
  function handleOpenApplianceDetails() {
    dispatch(setViewApplianceVisible(!viewApplianceTrigger));
    dispatch(setIndexOfViewedAppliance(index));
  }
  return (
    <Pressable onPress={handleOpenApplianceDetails}>
      <View style={styles.card}>
        <Image style={styles.img} source={home} />
        <View style={styles.col}>
          <Text style={styles.bb}>{event["Title"]}</Text>
          <Text style={styles.tex}>service appointment</Text>
        </View>
        <Text style={styles.time}>11:30</Text>
      </View>
    </Pressable>
  );
}

export default EventCard;

const styles = StyleSheet.create({
  tex: {
    color: "white",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",

    width: 300,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  img: {
    flex: 1,
    aspectRatio: 1,
  },
  col: {
    flex: 5,
  },
  bb: {
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  time: {
    color: "white",
    textAlignVertical: "top",
    margin: 5,
  },
});
