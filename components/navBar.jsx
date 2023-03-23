import { StyleSheet, View, Image, Pressable, Text } from "react-native";
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
  const { peopleList, currentPage } = useSelector((state) => state.myReducer);
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
        <Pressable
          style={[
            currentPage === "Home"
              ? styles.currentNavBtns
              : styles.otherNavBtns,
          ]}
          onPress={homeHandler}
        >
          <Image style={styles.icon} source={homeImg} />
          <Text style={styles.navName}>Home</Text>
        </Pressable>
        <Pressable
          style={[
            currentPage === "People"
              ? styles.currentNavBtns
              : styles.otherNavBtns,
          ]}
          onPress={peopleHandler}
        >
          <Image style={styles.icon} source={peopleImg} />
          <Text style={styles.navName}>People</Text>
        </Pressable>
        <Pressable
          style={[
            currentPage === "New" ? styles.currentNavBtns : styles.otherNavBtns,
          ]}
          onPress={addNewHandler}
        >
          <Image style={styles.addIcon} source={addImg} />
        </Pressable>
        <Pressable
          style={[
            currentPage === "Calender"
              ? styles.currentNavBtns
              : styles.otherNavBtns,
          ]}
          onPress={calenderHandler}
        >
          <Image style={styles.icon} source={calenderImg} />
          <Text style={styles.navName}>Calender</Text>
        </Pressable>
        <Pressable
          style={[
            currentPage === "Settings"
              ? styles.currentNavBtns
              : styles.otherNavBtns,
          ]}
          onPress={settingsHandler}
        >
          <Image style={styles.icon} source={settngsImg} />
          <Text style={styles.navName}>Settings</Text>
        </Pressable>
      </View>
    </>
  );
}

export default NavBar;

const styles = StyleSheet.create({
  navName: {
    color: colorScheme.primaryFont,
    fontSize: 10,
    margin: 3,
  },
  currentNavBtns: {
    aspectRatio: 1,
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
  },
  otherNavBtns: {
    aspectRatio: 1,
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.3,
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
    borderTopColor: colorScheme.primaryFont,
    borderTopWidth: 1,
  },
});
