import { StyleSheet, View, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import addImg from "../assets/img/addImg.png";
import calenderImg from "../assets/img/calenderImg.png";
import homeImg from "../assets/img/homeImg.png";
import peopleImg from "../assets/img/peopleImg.png";
import settngsImg from "../assets/img/settingsImg.png";
import colorScheme from "./colors";

import {
  setNewAddPage,
  setHomePage,
  setPeople,
  setUpdatedInputs,
  setCalender,
  setSettings,
  setCurrentPage,
} from "../redux/actions";

function NavBar(props) {
  const { peopleList } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();
  function homeHandler() {
    console.log("Home");
    dispatch(setCurrentPage("Home"));
    // dispatch(setNewAddPage(false));
    // dispatch(setPeople(false));
    // dispatch(setHomePage(true));
    // dispatch(setCalender(false));
    // dispatch(setSettings(false));
  }
  function peopleHandler() {
    console.log("peeps");
    dispatch(setCurrentPage("People"));

    // dispatch(setNewAddPage(false));
    // dispatch(setHomePage(false));
    // dispatch(setPeople(true));
    // dispatch(setCalender(false));
    // dispatch(setSettings(false));
  }
  function addNewHandler() {
    console.log("new");
    dispatch(setCurrentPage("New"));
    dispatch(setUpdatedInputs([]));
    // dispatch(setPeople(false));
    // dispatch(setNewAddPage(true));
    // dispatch(setHomePage(false));
    // dispatch(setCalender(false));
    // dispatch(setSettings(false));
  }
  function calenderHandler() {
    console.log("Calender");
    dispatch(setCurrentPage("Calender"));

    // dispatch(setPeople(false));
    // dispatch(setNewAddPage(false));
    // dispatch(setHomePage(false));
    // dispatch(setCalender(true));
    // dispatch(setSettings(false));
  }
  function settingsHandler() {
    console.log("Settings");
    dispatch(setCurrentPage("Settings"));

    // dispatch(setPeople(false));
    // dispatch(setNewAddPage(false));
    // dispatch(setHomePage(false));
    // dispatch(setCalender(false));
    // dispatch(setSettings(true));
  }
  return (
    <>
      <View style={styles.nav}>
        <Pressable style={styles.navBtns} onPress={homeHandler}>
          <Image style={styles.icon} source={homeImg} />
        </Pressable>
        <Pressable style={styles.navBtns} onPress={peopleHandler}>
          <Image style={styles.icon} source={peopleImg} />
        </Pressable>
        <Pressable style={styles.navBtns} onPress={addNewHandler}>
          <Image style={styles.addIcon} source={addImg} />
        </Pressable>
        <Pressable style={styles.navBtns} onPress={calenderHandler}>
          <Image style={styles.icon} source={calenderImg} />
        </Pressable>
        <Pressable style={styles.navBtns} onPress={settingsHandler}>
          <Image style={styles.icon} source={settngsImg} />
        </Pressable>
      </View>
    </>
  );
}

export default NavBar;

const styles = StyleSheet.create({
  navBtns: {
    aspectRatio: 1,
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    aspectRatio: 1,
    height: "35%",
  },
  addIcon: {
    aspectRatio: 1,
    height: "80%",
  },

  nav: {
    width: "100%",
    backgroundColor: colorScheme.secondary,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
