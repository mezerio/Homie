import { StyleSheet, View, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import addImg from "../assets/img/addImg.png";
import calenderImg from "../assets/img/calenderImg.png";
import homeImg from "../assets/img/homeImg.png";
import peopleImg from "../assets/img/peopleImg.png";
import settngsImg from "../assets/img/settingsImg.png";

import {
  setNewAddPage,
  setHomePage,
  setPeople,
  setUpdatedInputs,
  setCalender,
  setSettings,
} from "../redux/actions";

function NavBar(props) {
  const { peopleList } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();
  function homeHandler() {
    console.log("home");
    dispatch(setNewAddPage(false));
    dispatch(setPeople(false));
    dispatch(setHomePage(true));
    dispatch(setCalender(false));
    dispatch(setSettings(false));
  }
  function peopleHandler() {
    console.log("peeps");
    dispatch(setNewAddPage(false));
    dispatch(setHomePage(false));
    dispatch(setPeople(true));
    dispatch(setCalender(false));
    dispatch(setSettings(false));
  }
  function addNewHandler() {
    console.log("new");
    dispatch(setUpdatedInputs([]));
    dispatch(setPeople(false));
    dispatch(setNewAddPage(true));
    dispatch(setHomePage(false));
    dispatch(setCalender(false));
    dispatch(setSettings(false));
  }
  function calenderHandler() {
    console.log("calender");
    dispatch(setPeople(false));
    dispatch(setNewAddPage(false));
    dispatch(setHomePage(false));
    dispatch(setCalender(true));
    dispatch(setSettings(false));
  }
  function settingsHandler() {
    console.log("settings");
    dispatch(setPeople(false));
    dispatch(setNewAddPage(false));
    dispatch(setHomePage(false));
    dispatch(setCalender(false));
    dispatch(setSettings(true));
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
    height: "60%",
  },
  addIcon: {
    aspectRatio: 1,
    height: "90%",
  },

  nav: {
    width: "100%",
    backgroundColor: "white",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
