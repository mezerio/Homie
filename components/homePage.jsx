import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ViewAppliance from "./viewAppliance";
import ApplianceCard from "./applianceCard";
import colorScheme from "./colors";

function HomePage() {
  const { currentPage, applianceList, viewApplianceTrigger } = useSelector(
    (state) => state.myReducer
  );

  return currentPage === "Home" ? (
    <>
      <ScrollView>
        <View style={styles.view}>
          {applianceList.map((appliance, index) => (
            <View key={index}>
              <ApplianceCard appliance={appliance} index={index} />
            </View>
          ))}
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
});
