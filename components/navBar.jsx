import { StyleSheet, View, Image, Pressable } from "react-native";

function NavBar(props) {
  function homeHandler() {
    console.log("home");
  }
  function peopleHandler() {
    console.log("peeps");
  }
  function addNewHandler() {
    console.log("new");
  }
  function calenderHandler() {
    console.log("calender");
  }
  function settingsHandler() {
    console.log("settings");
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
    backgroundColor: "lightblue",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
