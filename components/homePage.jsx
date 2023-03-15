import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ViewAppliance from "./viewAppliance";
import ApplianceCard from "./applianceCard";

function HomePage() {
  const { homePageTrigger } = useSelector((state) => state.myReducer);
  const { applianceList } = useSelector((state) => state.myReducer);
  const { viewApplianceTrigger } = useSelector((state) => state.myReducer);

  return homePageTrigger === true ? (
    <>
      <ScrollView contentContainerStyle={styles.outer}>
        <View style={styles.view1}>
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
  view1: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "lightgrey",
  },
});
