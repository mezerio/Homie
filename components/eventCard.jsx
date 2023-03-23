import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import colorScheme from "./colors";
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
        <Image style={styles.img} source={event["Item"]["Icon"]} />
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
    color: colorScheme.secondaryFont,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colorScheme.primaryAccent,
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
    resizeMode: "contain",
  },
  col: {
    flex: 5,
  },
  bb: {
    color: colorScheme.secondaryFont,
    borderBottomColor: colorScheme.secondaryFont,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  time: {
    color: colorScheme.secondaryFont,
    textAlignVertical: "top",
    margin: 5,
  },
});
