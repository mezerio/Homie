import { StyleSheet, View, StatusBar } from "react-native";
import NavBar from "./components/navBar.jsx";
import AddNew from "./components/addNew.jsx";
import HomePage from "./components/homePage.jsx";
import People from "./components/people.jsx";
import { Provider } from "react-redux";
import { Store } from "./redux/store.jsx";
import Calender from "./components/calender.jsx";
import Settings from "./components/settings.jsx";
import Header from "./components/header.jsx";

export default function App() {
  return (
    <Provider store={Store}>
      <View style={styles.full}>
        <StatusBar barStyle="dark-content" backgroundColor={"white"} />
        <Header />
        <HomePage />
        <People />
        <AddNew />
        <Calender />
        <Settings />
        <NavBar />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
});
