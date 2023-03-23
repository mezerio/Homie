import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ViewAppliance from "./viewAppliance";
import ApplianceCard from "./applianceCard";
import colorScheme from "./colors";
import {
  setAppTabChosen,
  setCurrentPage,
  setUpdatedInputs,
} from "../redux/actions";

function HomePage() {
  const { currentPage, applianceList, viewApplianceTrigger } = useSelector(
    (state) => state.myReducer
  );
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(setAppTabChosen(true));
    dispatch(setUpdatedInputs([]));
    dispatch(setCurrentPage("New"));
  }

  return currentPage === "Home" ? (
    <>
      <ScrollView>
        <View style={styles.view}>
          {applianceList.map((appliance, index) => (
            <View key={index}>
              <ApplianceCard appliance={appliance} index={index} />
            </View>
          ))}
          <Pressable>
            <Text style={styles.btn} onPress={handleAdd}>
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

const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  btn: {
    color: colorScheme.primaryAccent,
    fontWeight: "bold",
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 14,
    marginVertical: 10,
  },
});
