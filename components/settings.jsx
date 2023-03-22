import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  Switch,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setNotifToggle, setSoundToggle } from "../redux/actions";
import colorScheme from "./colors";
import settings from "/Users/maazvali/Documents/coding/Github Projects/Homie/assets/img/settingsImg.png";

function Settings() {
  const { currentPage, soundToggle, notifToggle } = useSelector(
    (state) => state.myReducer
  );
  const dispatch = useDispatch();

  function handleSoundToggle() {
    dispatch(setSoundToggle(!soundToggle));
  }
  function handleNotifToggle() {
    dispatch(setNotifToggle(!notifToggle));
  }

  return currentPage === "Settings" ? (
    <>
      <ScrollView>
        <View style={styles.view}>
          <Image style={styles.img} source={settings} />
          <View style={styles.set}>
            <Text style={styles.text}>Sound</Text>
            <Switch
              style={{ width: "20%" }}
              trackColor={{ false: "grey", true: "lightgrey" }}
              thumbColor={soundToggle ? colorScheme.primaryAccent : "lightgrey"}
              onValueChange={handleSoundToggle}
              value={soundToggle}
            />
          </View>
          <View style={styles.set}>
            <Text style={styles.text}>Notification</Text>
            <Switch
              style={{ width: "20%" }}
              trackColor={{ false: "grey", true: "lightgrey" }}
              thumbColor={notifToggle ? colorScheme.primaryAccent : "lightgrey"}
              onValueChange={handleNotifToggle}
              value={notifToggle}
            />
          </View>
          <View style={styles.set}>
            <Text style={styles.text}>Help</Text>
          </View>
          <View style={styles.set}>
            <Text style={styles.text}>Feedback</Text>
          </View>
        </View>
      </ScrollView>
    </>
  ) : (
    ""
  );
}

export default Settings;

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    marginLeft: "5%",
    width: "75%",
    color: colorScheme.primaryFont,
  },
  img: {
    height: "10%",
    aspectRatio: 1,
    marginBottom: 20,
  },
  view: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  set: {
    flexDirection: "row",
    backgroundColor: colorScheme.secondary,
    width: "80%",
    borderRadius: 5,
    margin: 5,
    height: 50,
  },
});
