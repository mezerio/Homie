import { StyleSheet, View } from "react-native";
import NavBar from "./components/navBar.jsx";
import AddNew from "./components/addNew.jsx";

export default function App() {
  return (
    <>
      <View style={styles.container}></View>
      <AddNew style={styles.container} trigger={true}></AddNew>
      <NavBar style={styles.nav}></NavBar>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    flex: 1,
    bottom: 0,
  },
});
