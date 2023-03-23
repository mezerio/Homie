import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import addImg from "../../assets/img/addImg.png";
import calendarImg from "../../assets/img/calendarImg.png";
import homeImg from "../../assets/img/homeImg.png";
import peopleImg from "../../assets/img/peopleImg.png";
import settngsImg from "../../assets/img/settingsImg.png";
import colorScheme from "../../assets/functions/colors";
import { setUpdatedInputs, setCurrentPage } from "../../redux/actions";

function NavBar() {
  const { currentPage } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();
  function handleCurrentPage(page) {
    dispatch(setUpdatedInputs([]));
    dispatch(setCurrentPage(page));
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
          onPress={() => handleCurrentPage("Home")}
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
          onPress={() => handleCurrentPage("People")}
        >
          <Image style={styles.icon} source={peopleImg} />
          <Text style={styles.navName}>People</Text>
        </Pressable>
        <Pressable
          style={[
            currentPage === "New" ? styles.currentNavBtns : styles.otherNavBtns,
          ]}
          onPress={() => handleCurrentPage("New")}
        >
          <Image style={styles.addIcon} source={addImg} />
        </Pressable>
        <Pressable
          style={[
            currentPage === "Calendar"
              ? styles.currentNavBtns
              : styles.otherNavBtns,
          ]}
          onPress={() => handleCurrentPage("Calendar")}
        >
          <Image style={styles.icon} source={calendarImg} />
          <Text style={styles.navName}>Calendar</Text>
        </Pressable>
        <Pressable
          style={[
            currentPage === "Settings"
              ? styles.currentNavBtns
              : styles.otherNavBtns,
          ]}
          onPress={() => handleCurrentPage("Settings")}
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
