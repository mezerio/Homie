import { StyleSheet, View } from "react-native";
import NavBar from "./components/navBar.jsx";
import AddNew from "./components/addNew.jsx";
import { Provider } from "react-redux";
import { Store } from "./redux/store.jsx";

export default function App() {
  return (
    <Provider style={styles.prov} store={Store}>
      {/* <View style={styles.container}></View> */}
      <AddNew style={styles.container} trigger={true}></AddNew>
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
