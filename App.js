import { StyleSheet, View, Text, StatusBar } from "react-native";
import NavBar from "./components/navBar.jsx";
import AddNew from "./components/addNew.jsx";
import HomePage from "./components/homePage.jsx";
import { Provider } from "react-redux";
import { Store } from "./redux/store.jsx";

export default function App() {
  return (
    <>
      <Provider store={Store}>
        <View style={styles.full}>
          <StatusBar barStyle="dark-content" backgroundColor={"white"} />
          <AddNew></AddNew>
          <HomePage></HomePage>
          <NavBar></NavBar>
        </View>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: "lightgrey",
    paddingTop: 20,
  },
});
