import { StyleSheet, View, Text, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  setAppTabChosen,
  setCurrentPage,
  setEventModalTrigger,
} from "../redux/actions";

function Header(props) {
  const { currentPage, appTabChosen } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handlePlusBtn() {
    switch (currentPage) {
      case "Home": {
        console.log(currentPage, 1);
        dispatch(setAppTabChosen(true));
        dispatch(setCurrentPage("New"));
        break;
      }
      case "People": {
        console.log(currentPage, 2);

        dispatch(setAppTabChosen(false));
        dispatch(setCurrentPage("New"));
        break;
      }
      case "Calender": {
        console.log(currentPage, 3);
        dispatch(setEventModalTrigger(true));

        // dispatch(setAppTabChosen(false));
        // add event
        break;
      }
    }

    console.log(appTabChosen, 1, currentPage);
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
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  cp: {
    fontSize: 20,
    width: "80%",
    color: "orange",
    marginLeft: 30,
    height: 40,
  },
  plusBtn: {
    fontSize: 30,
    color: "orange",
  },
});
