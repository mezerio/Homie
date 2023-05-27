import { StyleSheet, View, Text, Pressable, StatusBar } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import colorScheme from "../../assets/functions/colors";
import {
  setAppTabChosen,
  setCurrentPage,
  setEventModalTrigger,
  setNewEventItem,
  setUpdatedInputs,
  setNewEventDesc,
} from "../../redux/actions";

function Header() {
  const { currentPage, colorTheme } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handlePlusBtn() {
    switch (currentPage) {
      case "Home": {
        dispatch(setAppTabChosen(true));
        dispatch(setUpdatedInputs([]));
        dispatch(setCurrentPage("New"));
        break;
      }
      case "People": {
        dispatch(setAppTabChosen(false));
        dispatch(setCurrentPage("New"));
        break;
      }
      case "Calendar": {
        dispatch(setNewEventItem(""));
        dispatch(setNewEventDesc("Appointment"));
        dispatch(setEventModalTrigger(true));
        break;
      }
    }
  }
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colorScheme[colorTheme].primary}
      />
      <View style={styles[colorTheme].col}>
        <Text style={styles[colorTheme].cp}>{currentPage}</Text>
        {currentPage === "Home" ||
        currentPage === "People" ||
        currentPage === "Calendar" ? (
          <Pressable onPress={handlePlusBtn}>
            <Text style={styles[colorTheme].plusBtn}>+</Text>
          </Pressable>
        ) : (
          ""
        )}
      </View>
    </>
  );
}

export default Header;
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
    col: {
      flexDirection: "row",
      padding: 10,
      alignItems: "center",
      marginBottom: 10,
    },
    cp: {
      fontSize: 20,
      width: "80%",
      color: colorScheme[theme].primaryFont,
      marginLeft: 30,
      height: 40,
      fontWeight: "bold",
    },
    plusBtn: {
      fontSize: 30,
      color: colorScheme[theme].accent,
    },
  });
}
