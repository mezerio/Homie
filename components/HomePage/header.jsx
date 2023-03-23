import { StyleSheet, View, Text, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import colorScheme from "../../assets/functions/colors";
import {
  setAppTabChosen,
  setCurrentPage,
  setEventModalTrigger,
  setNewEventItem,
  setUpdatedInputs,
  setNewEventDesc,
} from "../../redux/actions";

function Header() {
  const { currentPage } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handlePlusBtn() {
    switch (currentPage) {
      case "Home": {
        dispatch(setAppTabChosen(true));
        dispatch(setUpdatedInputs([]));
        dispatch(setCurrentPage("New"));
        break;
      }
      case "People": {
        dispatch(setAppTabChosen(false));
        dispatch(setCurrentPage("New"));
        break;
      }
      case "Calendar": {
        dispatch(setNewEventItem(""));
        dispatch(setNewEventDesc("Appointment"));
        dispatch(setEventModalTrigger(true));
        break;
      }
    }
  }
  return (
    <>
      <View style={styles.col}>
        <Text style={styles.cp}>{currentPage}</Text>
        {currentPage === "Home" ||
        currentPage === "People" ||
        currentPage === "Calendar" ? (
          <Pressable onPress={handlePlusBtn}>
            <Text style={styles.plusBtn}>+</Text>
          </Pressable>
        ) : (
          ""
        )}
      </View>
    </>
  );
}

export default Header;

const styles = StyleSheet.create({
  col: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  cp: {
    fontSize: 20,
    width: "80%",
    color: colorScheme.secondaryAccent,
    marginLeft: 30,
    height: 40,
  },
  plusBtn: {
    fontSize: 30,
    color: colorScheme.secondaryAccent,
  },
});
