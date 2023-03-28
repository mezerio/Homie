import { useSelector, useDispatch } from "react-redux";
import {
  setColorTheme,
  setNotifTrigger,
  setSoundTrigger,
} from "../../redux/actions";
import colorScheme from "../../assets/functions/colors";
import settings from "/Users/maazvali/Documents/coding/Github Projects/Homie/assets/img/settingsImg.png";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  Switch,
  Pressable,
} from "react-native";

function Settings() {
  const { currentPage, soundTrigger, notifTrigger, colorTheme } = useSelector(
    (state) => state.myReducer
  );
  const dispatch = useDispatch();

  function handleSoundTrigger() {
    dispatch(setSoundTrigger(!soundTrigger));
  }
  function handleNotifTrigger() {
    dispatch(setNotifTrigger(!notifTrigger));
  }

  function handleThemeChanged(theme) {
    dispatch(setColorTheme(theme));
  }

  return currentPage === "Settings" ? (
    <>
      <ScrollView>
        <View style={styles[colorTheme].view}>
          <Image style={styles[colorTheme].img} source={settings} />
          <View style={styles[colorTheme].set}>
            <Text style={styles[colorTheme].text}>Sound</Text>
            <Switch
              style={{ width: "20%" }}
              trackColor={{ false: "grey", true: "lightgrey" }}
              thumbColor={
                soundTrigger
                  ? colorScheme[colorTheme].primaryAccent
                  : "lightgrey"
              }
              onValueChange={handleSoundTrigger}
              value={soundTrigger}
            />
          </View>
          <View style={styles[colorTheme].set}>
            <Text style={styles[colorTheme].text}>Notification</Text>
            <Switch
              style={{ width: "20%" }}
              trackColor={{ false: "grey", true: "lightgrey" }}
              thumbColor={
                notifTrigger
                  ? colorScheme[colorTheme].primaryAccent
                  : "lightgrey"
              }
              onValueChange={handleNotifTrigger}
              value={notifTrigger}
            />
          </View>
          <View style={styles[colorTheme].set}>
            <Text style={styles[colorTheme].text}>Help</Text>
          </View>
          <View style={styles[colorTheme].set}>
            <Text style={styles[colorTheme].text}>Feedback</Text>
          </View>
          <View style={styles[colorTheme].set}>
            <View style={styles[colorTheme].setTheme}>
              <Text style={styles[colorTheme].textTheme}>Theme:</Text>
              <View style={styles[colorTheme].setTheme}>
                <Pressable
                  style={
                    colorTheme == "dark"
                      ? [
                          styles[colorTheme].dark,
                          styles[colorTheme].colorBorder,
                        ]
                      : styles[colorTheme].dark
                  }
                  onPress={() => handleThemeChanged("dark")}
                ></Pressable>
                <Pressable
                  style={
                    colorTheme == "light"
                      ? [
                          styles[colorTheme].light,
                          styles[colorTheme].colorBorder,
                        ]
                      : styles[colorTheme].light
                  }
                  onPress={() => handleThemeChanged("light")}
                ></Pressable>
                <Pressable
                  style={
                    colorTheme == "blue"
                      ? [
                          styles[colorTheme].blue,
                          styles[colorTheme].colorBorder,
                        ]
                      : styles[colorTheme].blue
                  }
                  onPress={() => handleThemeChanged("blue")}
                ></Pressable>
                <Pressable
                  style={
                    colorTheme == "purple"
                      ? [
                          styles[colorTheme].purple,
                          styles[colorTheme].colorBorder,
                        ]
                      : styles[colorTheme].purple
                  }
                  onPress={() => handleThemeChanged("purple")}
                ></Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  ) : (
    ""
  );
}

export default Settings;

const styles = {};

// Define the color themes and their corresponding primary font colors
const colorThemes = {
  dark: "white",
  light: "black",
  blue: "white",
  purple: "white",
};

// Loop through the color themes and create the styles dynamically
for (const [theme] of Object.entries(colorThemes)) {
  styles[theme] = StyleSheet.create({
    dark: {
      backgroundColor: colorScheme["dark"].primary,
      height: 30,
      width: 30,
      padding: 5,
      borderRadius: 5,
      margin: 5,
      borderColor: "transparent",
      borderWidth: 2,
    },
    light: {
      backgroundColor: colorScheme["light"].primary,
      height: 30,
      width: 30,
      padding: 5,
      borderRadius: 5,
      margin: 5,
      borderColor: "transparent",
      borderWidth: 2,
    },
    blue: {
      backgroundColor: colorScheme["blue"].primary,
      height: 30,
      width: 30,
      padding: 5,
      borderRadius: 5,
      margin: 5,
      borderColor: "transparent",
      borderWidth: 2,
    },
    purple: {
      backgroundColor: colorScheme["purple"].primary,
      height: 30,
      width: 30,
      padding: 5,
      borderRadius: 5,
      margin: 5,
      borderColor: "transparent",
      borderWidth: 2,
    },
    colorBorder: { borderColor: colorScheme[theme].primaryFont },
    setTheme: { flex: 1, flexDirection: "row", alignItems: "center" },
    textTheme: {
      alignSelf: "center",
      margin: "5%",
      color: colorScheme[theme].primaryFont,
    },
    text: {
      alignSelf: "center",
      marginLeft: "5%",
      width: "75%",
      color: colorScheme[theme].primaryFont,
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
      backgroundColor: colorScheme[theme].secondary,
      width: "80%",
      borderRadius: 5,
      margin: 5,
      height: 50,
    },
  });
}
