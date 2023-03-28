import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import colorScheme from "../../assets/functions/colors";
import {
  setIndexOfViewedAppliance,
  setViewEventTrigger,
} from "../../redux/actions";

function EventCard({ event, index }) {
  const { colorTheme } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();
  function handleOpenEventDetails() {
    dispatch(setViewEventTrigger(true));
    dispatch(setIndexOfViewedAppliance(index));
  }
  return (
    <Pressable onPress={handleOpenEventDetails}>
      <View style={styles[colorTheme].card}>
        <Image style={styles[colorTheme].img} source={event["Item"]["Icon"]} />
        <View style={styles[colorTheme].col}>
          <Text style={styles[colorTheme].bb}>{event["Title"]}</Text>
          <Text style={styles[colorTheme].tex}>{event["Desc"]}</Text>
        </View>
        <Text style={styles[colorTheme].time}>{event["Time"]}</Text>
      </View>
    </Pressable>
  );
}

export default EventCard;

const styles = {};
styles["dark"] = StyleSheet.create({
  tex: {
    color: colorScheme["dark"].secondaryFont,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colorScheme["dark"].primaryAccent,
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
    color: colorScheme["dark"].secondaryFont,
    borderBottomColor: colorScheme["dark"].secondaryFont,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  time: {
    color: colorScheme["dark"].secondaryFont,
    textAlignVertical: "top",
    margin: 5,
  },
});
styles["light"] = StyleSheet.create({
  tex: {
    color: colorScheme["light"].secondaryFont,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colorScheme["light"].primaryAccent,
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
    color: colorScheme["light"].secondaryFont,
    borderBottomColor: colorScheme["light"].secondaryFont,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  time: {
    color: colorScheme["light"].secondaryFont,
    textAlignVertical: "top",
    margin: 5,
  },
});
styles["blue"] = StyleSheet.create({
  tex: {
    color: colorScheme["blue"].secondaryFont,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colorScheme["blue"].primaryAccent,
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
    color: colorScheme["blue"].secondaryFont,
    borderBottomColor: colorScheme["blue"].secondaryFont,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  time: {
    color: colorScheme["blue"].secondaryFont,
    textAlignVertical: "top",
    margin: 5,
  },
});
styles["purple"] = StyleSheet.create({
  tex: {
    color: colorScheme["purple"].secondaryFont,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colorScheme["purple"].primaryAccent,
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
    color: colorScheme["purple"].secondaryFont,
    borderBottomColor: colorScheme["purple"].secondaryFont,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  time: {
    color: colorScheme["purple"].secondaryFont,
    textAlignVertical: "top",
    margin: 5,
  },
});
