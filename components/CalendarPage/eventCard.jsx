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

// Define the color themes and their corresponding primary font colors
const colorThemes = {
  dark: "white",
  light: "black",
  green: "white",
  purple: "white",
};
for (const [theme] of Object.entries(colorThemes)) {
  styles[theme] = StyleSheet.create({
    tex: {
      color: colorScheme[theme].secondaryFont,
    },
    card: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: colorScheme[theme].secondary,
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
      color: colorScheme[theme].secondaryFont,
      borderBottomColor: colorScheme[theme].secondaryFont,
      borderBottomWidth: 1,
      borderStyle: "solid",
    },
    time: {
      color: colorScheme[theme].secondaryFont,
      textAlignVertical: "top",
      margin: 5,
    },
  });
}
