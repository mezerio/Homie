import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setAppTabChosen } from "../redux/actions";

function AddNewTab() {
  const { appTabChosen } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();
  function handleAppTabChosen() {
    dispatch(setAppTabChosen(true));
  }
  function handlePeopleTabChosen() {
    dispatch(setAppTabChosen(false));
  }

  return (
    <>
      <View style={styles.tab}>
        <Pressable onPress={handleAppTabChosen}>
          <Text style={[appTabChosen ? styles.chosenTab : styles.otherTab]}>
            Appliance
          </Text>
        </Pressable>
        <Pressable onPress={handlePeopleTabChosen}>
          <Text style={[appTabChosen ? styles.otherTab : styles.chosenTab]}>
            Person
          </Text>
        </Pressable>
      </View>
    </>
  );
}

export default AddNewTab;

const styles = StyleSheet.create({
  tab: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    width: "50%",
    marginHorizontal: "25%",
    marginVertical: 20,
    borderRadius: 25,
    alignItems: "center",
    padding: 2,
  },
  chosenTab: {
    color: "white",
    padding: 8,
    backgroundColor: "grey",
    borderRadius: 25,
  },
  otherTab: {
    padding: 8,
    color: "grey",
  },
});
