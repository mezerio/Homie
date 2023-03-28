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
styles["dark"] = StyleSheet.create({
  scroll: {
    backgroundColor: colorScheme["dark"].primary,
    alignItems: "center",
  },
  searchbar: {
    height: 40,
    flexDirection: "row",
    width: "90%",
    backgroundColor: colorScheme["dark"].primaryAccent,
    margin: "5%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  back: {
    fontSize: 30,
    color: colorScheme["dark"].primaryAccent,
    paddingHorizontal: 30,
  },
  searchImg: {
    aspectRatio: 1,
    width: "10%",
  },
  input: {
    width: "90%",
    color: "white",
  },
  bg: { backgroundColor: colorScheme["dark"].primary, flex: 1 },
});
styles["light"] = StyleSheet.create({
  scroll: {
    backgroundColor: colorScheme["light"].primary,
    alignItems: "center",
  },
  searchbar: {
    height: 40,
    flexDirection: "row",
    width: "90%",
    backgroundColor: colorScheme["light"].primaryAccent,
    margin: "5%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  back: {
    fontSize: 30,
    color: colorScheme["light"].primaryAccent,
    paddingHorizontal: 30,
  },
  searchImg: {
    aspectRatio: 1,
    width: "10%",
  },
  input: {
    width: "90%",
    color: "white",
  },
  bg: { backgroundColor: colorScheme["light"].primary, flex: 1 },
});
styles["blue"] = StyleSheet.create({
  scroll: {
    backgroundColor: colorScheme["blue"].primary,
    alignItems: "center",
  },
  searchbar: {
    height: 40,
    flexDirection: "row",
    width: "90%",
    backgroundColor: colorScheme["blue"].primaryAccent,
    margin: "5%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  back: {
    fontSize: 30,
    color: colorScheme["blue"].primaryAccent,
    paddingHorizontal: 30,
  },
  searchImg: {
    aspectRatio: 1,
    width: "10%",
  },
  input: {
    width: "90%",
    color: "white",
  },
  bg: { backgroundColor: colorScheme["blue"].primary, flex: 1 },
});
styles["purple"] = StyleSheet.create({
  scroll: {
    backgroundColor: colorScheme["purple"].primary,
    alignItems: "center",
  },
  searchbar: {
    height: 40,
    flexDirection: "row",
    width: "90%",
    backgroundColor: colorScheme["purple"].primaryAccent,
    margin: "5%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  back: {
    fontSize: 30,
    color: colorScheme["purple"].primaryAccent,
    paddingHorizontal: 30,
  },
  searchImg: {
    aspectRatio: 1,
    width: "10%",
  },
  input: {
    width: "90%",
    color: "white",
  },
  bg: { backgroundColor: colorScheme["purple"].primary, flex: 1 },
});
