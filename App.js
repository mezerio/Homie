import { StyleSheet, View } from "react-native";
import NavBar from "./components/navBar.jsx";
import AddNew from "./components/addNew.jsx";
import HomePage from "./components/homePage.jsx";
import { Provider } from "react-redux";
import { Store } from "./redux/store.jsx";

export default function App() {
  return (
    <Provider style={styles.prov} store={Store}>
      <AddNew style={styles.container}></AddNew>
      <HomePage style={styles.container}></HomePage>
      <NavBar style={styles.nav}></NavBar>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    flex: 1,
    bottom: 0,
  },
  prov: {
    flex: 1,
  },
});
