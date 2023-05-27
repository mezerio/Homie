import { StyleSheet, View, ScrollView, Pressable, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ViewAppliance from "../HomePage/viewAppliance";
import PeopleCard from "./peopleCard";
import colorScheme from "../../assets/functions/colors";
import {
  setAppTabChosen,
  setCurrentPage,
  setUpdatedInputs,
} from "../../redux/actions";

function People() {
  const { currentPage, peopleList, viewApplianceTrigger, colorTheme } =
    useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(setAppTabChosen(false));
    dispatch(setUpdatedInputs([]));
    dispatch(setCurrentPage("New"));
  }

  return currentPage === "People" ? (
    <>
      <ScrollView>
        <View style={styles[colorTheme].view}>
          {peopleList.map((person, index) => (
            <View key={index}>
              <PeopleCard person={person} index={index} />
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

export default People;
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
      marginVertical: 10,
    },
  });
}
