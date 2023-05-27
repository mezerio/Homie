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
        <View style={styles[colorTheme].textContainer}>
          <Text style={styles[colorTheme].textName}>{person["Name:"]}</Text>
          <Text style={styles[colorTheme].textDob}>{person["D.O.B:"]}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default PeopleCard;
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
    card: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: colorScheme[theme].secondary,
      width: 300,
      margin: 5,
      borderRadius: 5,
      padding: 15,
      alignItems: "center",
    },
    img: {
      resizeMode: "contain",
      height: 40,
      width: 40,
    },
    textName: {
      fontWeight: "bold",
      color: colorScheme[theme].primaryFont,
    },
    textDob: {
      color: colorScheme[theme].secondaryFont,
      fontSize: 12,
    },
    textContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginLeft: 15,
    },
  });
}
