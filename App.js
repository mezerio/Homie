import { StyleSheet, View, StatusBar } from "react-native";
import NavBar from "./components/HomePage/navBar.jsx";
import AddNew from "./components/AddPage/addNew.jsx";
import HomePage from "./components/HomePage/homePage.jsx";
import People from "./components/PeoplePage/people.jsx";
import { Provider } from "react-redux";
import { Store } from "./redux/store.jsx";
import CalendarPage from "./components/CalendarPage/calendar.jsx";
import Settings from "./components/SettingsPage/settings.jsx";
import Header from "./components/HomePage/header.jsx";
import colorScheme from "./assets/functions/colors.jsx";

export default function App() {
  return (
    <Provider store={Store}>
      <View style={styles.full}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colorScheme.primary}
        />
        <Header />
        <HomePage />
        <People />
        <AddNew />
        <CalendarPage />
        <Settings />
        <NavBar />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: colorScheme.primary,
  },
});
