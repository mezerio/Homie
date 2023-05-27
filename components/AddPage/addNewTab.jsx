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

// Define the color themes and their corresponding primary font colors
const colorThemes = {
  dark: "white",
  light: "black",
  green: "white",
  purple: "white",
};
for (const [theme] of Object.entries(colorThemes)) {
  styles[theme] = StyleSheet.create({
    tab: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: colorScheme[theme].primaryFont,
      width: "50%",
      marginHorizontal: "25%",
      marginVertical: 20,
      borderRadius: 25,
      alignItems: "center",
      padding: 2,
    },
    chosenTab: {
      color: colorScheme[theme].primaryFont,
      padding: 8,
      backgroundColor: colorScheme[theme].accent,
      borderRadius: 25,
    },
    otherTab: {
      padding: 8,
      color: colorScheme[theme].secondaryFont,
    },
  });
}
