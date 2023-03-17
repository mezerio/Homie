import { StyleSheet, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import ViewAppliance from "./viewAppliance";
import PeopleCard from "./peopleCard";

function People() {
  const { peopleTrigger, peopleList, viewApplianceTrigger } = useSelector(
    (state) => state.myReducer
  );

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
