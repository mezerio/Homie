import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  setIndexOfViewedAppliance,
  setViewApplianceTrigger,
  setViewEventTrigger,
} from "../redux/actions";
import home from "/Users/maazvali/Documents/coding/Github Projects/Homie/assets/img/homeImg.png";

function EventCard({ event, index }) {
  const { viewApplianceTrigger, dateSelected } = useSelector(
    (state) => state.myReducer
  );
  const dispatch = useDispatch();
  function handleOpenEventDetails() {
    dispatch(setViewEventTrigger(true));
    dispatch(setIndexOfViewedAppliance(index));

    // view event
  }
  return (
    <Pressable onPress={handleOpenEventDetails}>
      <View style={styles.card}>
        <Image style={styles.img} source={home} />
        <View style={styles.col}>
          <Text style={styles.bb}>{event["Title"]}</Text>
          <Text style={styles.tex}>{event["Desc"]}</Text>
        </View>
        <Text style={styles.time}>{event["Time"]}</Text>
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

    width: "90%",
    padding: 10,
    marginHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
  },
  img: {
    flex: 1,
    aspectRatio: 1,
    margin: 5,
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
