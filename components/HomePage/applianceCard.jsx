import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import colorScheme from "../../assets/functions/colors";
import {
  setIndexOfViewedAppliance,
  setViewApplianceTrigger,
  setNewEventItem,
  setSearchTrigger,
  setUpdatedIcon,
} from "../../redux/actions";

function ApplianceCard({ appliance, index }) {
  const { currentPage, colorTheme } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleOpenApplianceDetails() {
    if (currentPage == "Home" || currentPage == "People") {
      dispatch(setUpdatedIcon(appliance["Icon"]));
      dispatch(setViewApplianceTrigger(true));
      dispatch(setIndexOfViewedAppliance(index));
    } else {
      dispatch(setNewEventItem(appliance));
      dispatch(setSearchTrigger(false));
    }
  }
  return (
    <Pressable onPress={handleOpenApplianceDetails}>
      <View style={styles[colorTheme].card}>
        <View style={styles[colorTheme].imageContainer}>
          <Image style={styles[colorTheme].img} source={appliance["Icon"]} />
        </View>
        <View style={styles[colorTheme].textContainer}>
          <View style={styles[colorTheme].mainTextContainer}>
            <Text style={styles[colorTheme].textTitle}>
              {appliance["Product Name/Title:"]}
            </Text>
            <Text style={styles[colorTheme].textVender}>
              {appliance["Vender:"]}
            </Text>
          </View>
          <View style={styles[colorTheme].subTextContainer}>
            <Text style={styles[colorTheme].textBottom}>
              {appliance["Model Number:"]}
            </Text>
            <Text style={styles[colorTheme].textBottom}>
              {appliance["Serial Number:"]}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default ApplianceCard;
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
      paddingHorizontal: 20,
      paddingVertical: 10,
      margin: 5,
      borderRadius: 15,
      alignItems: "center",
      elevation: 10,
    },

    img: {
      resizeMode: "contain",
      height: 40,
      width: 40,
    },

    mainTextContainer: {
      textAlign: "left",
      marginBottom: 10,
    },
    subTextContainer: {
      justifyContent: "space-between",
      flexDirection: "row",
      alignContent: "flex-end",
    },
    textContainer: {
      flexDirection: "column",
      marginLeft: 20,
      flex: 1,
    },
    textTitle: {
      color: colorScheme[theme].primaryFont,
      fontWeight: "bold",
    },
    textVender: {
      color: colorScheme[theme].primaryFont,
      fontSize: 12,
    },
    textBottom: {
      color: colorScheme[theme].secondaryFont,
      fontSize: 10,
    },
  });
}
