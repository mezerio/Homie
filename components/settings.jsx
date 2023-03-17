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
import settings from "/Users/maazvali/Documents/coding/Github Projects/Homie/assets/img/settingsImg.png";

function Settings() {
  const { settingsTrigger, soundToggle, notifToggle } = useSelector(
    (state) => state.myReducer
  );
  const dispatch = useDispatch();

  function handleSoundToggle() {
    dispatch(setSoundToggle(!soundToggle));
  }
  function handleNotifToggle() {
    dispatch(setNotifToggle(!notifToggle));
  }

  return settingsTrigger === true ? (
    <>
      <ScrollView>
        <View style={styles.view}>
          <Image style={styles.img} source={settings} />
          <View style={styles.set}>
            <Text
              style={{ alignSelf: "center", marginLeft: "5%", width: "75%" }}
            >
              Sound
            </Text>
            <Switch
              style={{ width: "20%" }}
              trackColor={{ false: "grey", true: "lightgrey" }}
              thumbColor={soundToggle ? "lightblue" : "lightgrey"}
              onValueChange={handleSoundToggle}
              value={soundToggle}
            />
          </View>
          <View style={styles.set}>
            <Text
              style={{ alignSelf: "center", marginLeft: "5%", width: "75%" }}
            >
              Notification
            </Text>
            <Switch
              style={{ width: "20%" }}
              trackColor={{ false: "grey", true: "lightgrey" }}
              thumbColor={notifToggle ? "lightblue" : "lightgrey"}
              onValueChange={handleNotifToggle}
              value={notifToggle}
            />
          </View>
          <View style={styles.set}>
            <Text
              style={{ alignSelf: "center", marginLeft: "5%", width: "75%" }}
            >
              Help
            </Text>
          </View>
          <View style={styles.set}>
            <Text
              style={{ alignSelf: "center", marginLeft: "5%", width: "75%" }}
            >
              Feedback
            </Text>
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
  img: {
    height: "20%",
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
    backgroundColor: "white",
    width: "80%",
    borderRadius: 5,
    margin: 10,
    height: "6%",
  },
});
