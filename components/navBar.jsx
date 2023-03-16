import { StyleSheet, View, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
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
          <Image
            style={styles.icon}
            source={require("../assets/img/homeImg.png")}
          />
        </Pressable>
        <Pressable style={styles.navBtns} onPress={peopleHandler}>
          <Image
            style={styles.icon}
            source={require("../assets/img/peopleImg.png")}
          />
        </Pressable>
        <Pressable style={styles.addBtn} onPress={addNewHandler}>
          <Image
            style={styles.icon}
            source={require("../assets/img/addImg.png")}
          />
        </Pressable>
        <Pressable style={styles.navBtns} onPress={calenderHandler}>
          <Image
            style={styles.icon}
            source={require("../assets/img/calenderImg.png")}
          />
        </Pressable>
        <Pressable style={styles.navBtns} onPress={settingsHandler}>
          <Image
            style={styles.icon}
            source={require("../assets/img/settingsImg.png")}
          />
        </Pressable>
      </View>
    </>
  );
}

export default NavBar;

const styles = StyleSheet.create({
  navBtns: {
    aspectRatio: 1,
    width: "7.5%",
    marginRight: "5.5%",
    marginLeft: "5.5%",
    marginTop: "3%",
    marginBottom: "3%",
  },

  addBtn: {
    aspectRatio: 1,
    width: "15%",
    marginTop: "3%",
    marginBottom: "3%",
    marginRight: "5.5%",
    marginLeft: "5.5%",
  },
  icon: {
    aspectRatio: 1,
    height: "100%",
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
