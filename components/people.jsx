import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ViewAppliance from "./viewAppliance";
import ApplianceCard from "./applianceCard";
import PeopleCard from "./poepleCard";

function People() {
  const { peopleTrigger } = useSelector((state) => state.myReducer);
  const { peopleList } = useSelector((state) => state.myReducer);
  const { viewApplianceTrigger } = useSelector((state) => state.myReducer);

  return peopleTrigger === true ? (
    <>
      <ScrollView>
        <View style={styles.view}>
          {peopleList.map((person, index) => (
            <View key={index}>
              <PeopleCard person={person} index={index} />
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

export default People;

const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "lightgrey",
  },
});
