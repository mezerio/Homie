import { StyleSheet, View, Text, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import colorScheme from "./colors";
import {
  setAppTabChosen,
  setCurrentPage,
  setEventModalTrigger,
  setUpdatedInputs,
} from "../redux/actions";

function Header(props) {
  const { currentPage, appTabChosen } = useSelector((state) => state.myReducer);
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
      case "Calender": {
        dispatch(setEventModalTrigger(true));

        // dispatch(setAppTabChosen(false));
        // add event
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
        currentPage === "Calender" ? (
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
