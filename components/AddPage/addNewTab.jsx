import { StyleSheet, Text, View, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setAppTabChosen } from "../../redux/actions";
import colorScheme from "../../assets/functions/colors";

function AddNewTab() {
  const { appTabChosen, colorTheme } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();
  function handleAppTabChosen() {
    dispatch(setAppTabChosen(true));
  }
  function handlePeopleTabChosen() {
    dispatch(setAppTabChosen(false));
  }

  return (
    <>
      <View style={styles[colorTheme].tab}>
        <Pressable onPress={handleAppTabChosen}>
          <Text
            style={[
              appTabChosen
                ? styles[colorTheme].chosenTab
                : styles[colorTheme].otherTab,
            ]}
          >
            Appliance
          </Text>
        </Pressable>
        <Pressable onPress={handlePeopleTabChosen}>
          <Text
            style={[
              appTabChosen
                ? styles[colorTheme].otherTab
                : styles[colorTheme].chosenTab,
            ]}
          >
            Person
          </Text>
        </Pressable>
      </View>
    </>
  );
}

export default AddNewTab;

const styles = {};
styles["dark"] = StyleSheet.create({
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
    color: colorScheme["dark"].primary,
    padding: 8,
    backgroundColor: colorScheme["dark"].primaryAccent,
    borderRadius: 25,
  },
  otherTab: {
    padding: 8,
    color: "grey",
  },
});
styles["light"] = StyleSheet.create({
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
    color: colorScheme["light"].primary,
    padding: 8,
    backgroundColor: colorScheme["light"].primaryAccent,
    borderRadius: 25,
  },
  otherTab: {
    padding: 8,
    color: "grey",
  },
});
styles["blue"] = StyleSheet.create({
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
    color: colorScheme["blue"].primary,
    padding: 8,
    backgroundColor: colorScheme["blue"].primaryAccent,
    borderRadius: 25,
  },
  otherTab: {
    padding: 8,
    color: "grey",
  },
});
styles["purple"] = StyleSheet.create({
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
    color: colorScheme["purple"].primary,
    padding: 8,
    backgroundColor: colorScheme["purple"].primaryAccent,
    borderRadius: 25,
  },
  otherTab: {
    padding: 8,
    color: "grey",
  },
});
