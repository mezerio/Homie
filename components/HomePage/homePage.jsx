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
styles["dark"] = StyleSheet.create({
  view: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  btn: {
    color: colorScheme["dark"].primaryAccent,
    fontWeight: "bold",
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 14,
    marginVertical: 10,
  },
});
styles["light"] = StyleSheet.create({
  view: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  btn: {
    color: colorScheme["light"].primaryAccent,
    fontWeight: "bold",
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 14,
    marginVertical: 10,
  },
});
styles["blue"] = StyleSheet.create({
  view: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  btn: {
    color: colorScheme["blue"].primaryAccent,
    fontWeight: "bold",
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 14,
    marginVertical: 10,
  },
});
styles["purple"] = StyleSheet.create({
  view: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  btn: {
    color: colorScheme["purple"].primaryAccent,
    fontWeight: "bold",
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 14,
    marginVertical: 10,
  },
});
