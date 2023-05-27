import { StyleSheet, View } from "react-native";
import NavBar from "./components/HomePage/navBar.jsx";
import AddNew from "./components/AddPage/addNew.jsx";
import HomePage from "./components/HomePage/homePage.jsx";
import People from "./components/PeoplePage/people.jsx";
import { useSelector } from "react-redux";
import CalendarPage from "./components/CalendarPage/calendar.jsx";
import Settings from "./components/SettingsPage/settings.jsx";
import Header from "./components/HomePage/header.jsx";
import colorScheme from "./assets/functions/colors.jsx";

export default function Main() {
  const { colorTheme } = useSelector((state) => state.myReducer);
  return (
    <View style={styles[colorTheme].full}>
      <Header />
      <HomePage />
      <People />
      <AddNew />
      <CalendarPage />
      <Settings />
      <NavBar />
    </View>
  );
}

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
    full: {
      flex: 1,
      backgroundColor: colorScheme[theme].primary,
    },
  });
  styles["light"] = StyleSheet.create({
    full: {
      flex: 1,
      backgroundColor: colorScheme["light"].primary,
    },
  });

  styles["green"] = StyleSheet.create({
    full: {
      flex: 1,
      backgroundColor: colorScheme["green"].primary,
    },
  });
  styles["purple"] = StyleSheet.create({
    full: {
      flex: 1,
      backgroundColor: colorScheme["purple"].primary,
    },
  });
}
