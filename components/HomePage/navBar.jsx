import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import addImg from "../../assets/img/addImg.png";
import calendarImg from "../../assets/img/calendarImg.png";
import homeImg from "../../assets/img/homeImg.png";
import peopleImg from "../../assets/img/peopleImg.png";
import settngsImg from "../../assets/img/settingsImg.png";
import colorScheme from "../../assets/functions/colors";
import { setUpdatedInputs, setCurrentPage } from "../../redux/actions";

function NavBar() {
  const { currentPage, colorTheme } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();
  function handleCurrentPage(page) {
    dispatch(setUpdatedInputs([]));
    dispatch(setCurrentPage(page));
  }
  return (
    <>
      <View style={styles[colorTheme].nav}>
        <Pressable
          style={[
            currentPage === "Home"
              ? styles[colorTheme].currentNavBtns
              : styles[colorTheme].otherNavBtns,
          ]}
          onPress={() => handleCurrentPage("Home")}
        >
          <Image style={styles[colorTheme].icon} source={homeImg} />
          <Text style={styles[colorTheme].navName}>Home</Text>
        </Pressable>
        <Pressable
          style={[
            currentPage === "People"
              ? styles[colorTheme].currentNavBtns
              : styles[colorTheme].otherNavBtns,
          ]}
          onPress={() => handleCurrentPage("People")}
        >
          <Image style={styles[colorTheme].icon} source={peopleImg} />
          <Text style={styles[colorTheme].navName}>People</Text>
        </Pressable>
        <Pressable
          style={[
            currentPage === "New"
              ? styles[colorTheme].currentNavBtns
              : styles[colorTheme].otherNavBtns,
          ]}
          onPress={() => handleCurrentPage("New")}
        >
          <Image style={styles[colorTheme].addIcon} source={addImg} />
        </Pressable>
        <Pressable
          style={[
            currentPage === "Calendar"
              ? styles[colorTheme].currentNavBtns
              : styles[colorTheme].otherNavBtns,
          ]}
          onPress={() => handleCurrentPage("Calendar")}
        >
          <Image style={styles[colorTheme].icon} source={calendarImg} />
          <Text style={styles[colorTheme].navName}>Calendar</Text>
        </Pressable>
        <Pressable
          style={[
            currentPage === "Settings"
              ? styles[colorTheme].currentNavBtns
              : styles[colorTheme].otherNavBtns,
          ]}
          onPress={() => handleCurrentPage("Settings")}
        >
          <Image style={styles[colorTheme].icon} source={settngsImg} />
          <Text style={styles[colorTheme].navName}>Settings</Text>
        </Pressable>
      </View>
    </>
  );
}

export default NavBar;

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
    navName: {
      color: colorScheme[theme].primaryFont,
      fontSize: 10,
      margin: 3,
    },
    currentNavBtns: {
      aspectRatio: 1,
      width: "20%",
      alignItems: "center",
      justifyContent: "center",
      opacity: 1,
    },
    otherNavBtns: {
      aspectRatio: 1,
      width: "20%",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0.3,
    },
    icon: {
      aspectRatio: 1,
      height: "35%",
    },
    addIcon: {
      aspectRatio: 1,
      height: "80%",
    },

    nav: {
      width: "100%",
      backgroundColor: colorScheme[theme].secondary,
      bottom: 0,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      elevation: 30,
    },
  });
}
