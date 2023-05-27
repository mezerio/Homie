import { useSelector, useDispatch } from "react-redux";
import { setSearchInput, setSearchTrigger } from "../../redux/actions";
import searchImg from "../../assets/img/searchImg.png";
import ApplianceCard from "../HomePage/applianceCard";
import PeopleCard from "../PeoplePage/peopleCard";
import colorScheme from "../../assets/functions/colors";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
  Pressable,
  Image,
  TextInput,
} from "react-native";

function ViewAppliance() {
  const { peopleList, applianceList, searchTrigger, searchInput, colorTheme } =
    useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleCancel() {
    dispatch(setSearchTrigger(false));
  }

  return searchTrigger == true ? (
    <>
      <Modal animationType="fade">
        <View style={styles[colorTheme].bg}>
          <Pressable onPress={handleCancel}>
            <Text style={styles[colorTheme].back}>{"<"}</Text>
          </Pressable>
          <View style={styles[colorTheme].searchbar}>
            <TextInput
              style={styles[colorTheme].input}
              placeholder="search..."
              onChangeText={(text) => dispatch(setSearchInput(text))}
            />
            <Image style={styles[colorTheme].searchImg} source={searchImg} />
          </View>
          <ScrollView contentContainerStyle={styles[colorTheme].scroll}>
            {applianceList
              .filter((appliance) =>
                appliance["Vender:"]
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              )
              .map((appliance, index) => (
                <View key={index}>
                  <ApplianceCard appliance={appliance} index={index} />
                </View>
              ))}
            {peopleList
              .filter((person) =>
                person["Name:"]
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              )
              .map((person, index) => (
                <View key={index}>
                  <PeopleCard person={person} index={index} />
                </View>
              ))}
          </ScrollView>
        </View>
      </Modal>
    </>
  ) : (
    ""
  );
}

export default ViewAppliance;

const styles = {};

// Define the color themes and their corresponding primary font colors
const colorThemes = {
  dark: "white",
  light: "black",
  green: "white",
  purple: "white",
};
for (const [theme] of Object.entries(colorThemes)) {
  styles[theme] = StyleSheet.create({
    scroll: {
      backgroundColor: colorScheme[theme].primary,
      alignItems: "center",
    },
    searchbar: {
      height: 40,
      flexDirection: "row",
      width: "90%",
      backgroundColor: colorScheme[theme].accent,
      margin: "5%",
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
    },
    back: {
      fontSize: 30,
      color: colorScheme[theme].primaryAccent,
      paddingHorizontal: 30,
    },
    searchImg: {
      aspectRatio: 1,
      width: "10%",
    },
    input: {
      width: "90%",
      color: colorScheme[theme].primaryFont,
    },
    bg: { backgroundColor: colorScheme[theme].primary, flex: 1 },
  });
}
