import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ViewAppliance from "./viewAppliance";
import ApplianceCard from "./applianceCard";
import colorScheme from "../../assets/functions/colors";
import {
  setAppTabChosen,
  setCurrentPage,
  setUpdatedInputs,
} from "../../redux/actions";

function HomePage() {
  const { currentPage, applianceList, viewApplianceTrigger, colorTheme } =
    useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(setAppTabChosen(true));
    dispatch(setUpdatedInputs([]));
    dispatch(setCurrentPage("New"));
  }

  return currentPage === "Home" ? (
    <>
      <ScrollView>
        <View style={styles[colorTheme].view}>
          {applianceList.map((appliance, index) => (
            <View key={index}>
              <ApplianceCard appliance={appliance} index={index} />
            </View>
          ))}
          <Pressable>
            <Text style={styles[colorTheme].btn} onPress={handleAdd}>
              + ADD NEW
            </Text>
          </Pressable>
        </View>
      </ScrollView>
      <ViewAppliance trigger={viewApplianceTrigger} />
    </>
  ) : (
    ""
  );
}

export default HomePage;
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
    view: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    btn: {
      color: colorScheme[theme].accent,
      fontWeight: "bold",
      padding: 3,
      borderRadius: 5,
      width: "100%",
      textAlign: "center",
      fontSize: 14,
      marginTop: 10,
      marginBottom: 30,
    },
  });
}
