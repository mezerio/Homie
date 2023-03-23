import { StyleSheet, View, ScrollView, Pressable, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ViewAppliance from "./viewAppliance";
import PeopleCard from "./peopleCard";
import colorScheme from "./colors";
import {
  setAppTabChosen,
  setCurrentPage,
  setUpdatedInputs,
} from "../redux/actions";

function People() {
  const { currentPage, peopleList, viewApplianceTrigger } = useSelector(
    (state) => state.myReducer
  );
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(setAppTabChosen(false));
    dispatch(setUpdatedInputs([]));
    dispatch(setCurrentPage("New"));
  }

  return currentPage === "People" ? (
    <>
      <ScrollView>
        <View style={styles.view}>
          {peopleList.map((person, index) => (
            <View key={index}>
              <PeopleCard person={person} index={index} />
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

export default People;

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
