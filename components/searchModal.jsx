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
import { useSelector, useDispatch } from "react-redux";
import {
  setViewApplianceVisible,
  setSearchInput,
  setUpdatedInputs,
  setSearchToggle,
  setNewEventItem,
} from "../redux/actions";
import addPhotoImg from "../assets/img/addPhotoImg.png";
import FieldModal from "./fieldModal";
import searchImg from "/Users/maazvali/Documents/coding/Github Projects/Homie/assets/img2/searchImg.png";
import ApplianceCard from "./applianceCard";
import PeopleCard from "./peopleCard";

function ViewAppliance() {
  const {
    peopleList,
    currentPage,
    applianceList,
    fieldModalTrigger,
    fieldHeaders,
    updatedInputs,
    indexOfViewedAppliance,
    fieldHeadersPerson,
    searchToggle,
    searchInput,
  } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleTextInputUpdate(text, index) {
    var newUpdatedInputs = [...updatedInputs];
    newUpdatedInputs[index] = text;
    dispatch(setUpdatedInputs(newUpdatedInputs));
  }

  function handleCancel() {
    dispatch(setSearchToggle(false));
  }

  function handleSearchImgPressed() {
    console.log("searching...");
    console.log(applianceList[0]["Vender:"]);
    console.log(applianceList[0]["Vender:"].toLowerCase(), 6);
    console.log(
      applianceList.filter((appliance) =>
        appliance["Vender:"].toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }

  function handleSetNewEventItem(item) {
    console.log(item, 5);
    // dispatch(setNewEventItem())
  }
  return searchToggle == true ? (
    <>
      <Modal animationType="fade">
        <Pressable onPress={handleCancel}>
          <Text style={styles.back}>{"<"}</Text>
        </Pressable>
        <View style={styles.searchbar}>
          <TextInput
            style={styles.input}
            placeholder="search..."
            onChangeText={(text) => dispatch(setSearchInput(text))}
          />
          <Pressable onPress={handleSearchImgPressed}>
            <Image style={styles.searchImg} source={searchImg} />
          </Pressable>
        </View>
        <ScrollView contentContainerStyle={styles.scroll}>
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
              person["Name:"].toLowerCase().includes(searchInput.toLowerCase())
            )
            .map((person, index) => (
              <View key={index}>
                <PeopleCard person={person} index={index} />
              </View>
            ))}
        </ScrollView>
      </Modal>
    </>
  ) : (
    ""
  );
}

export default ViewAppliance;

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "lightgrey",
    alignItems: "center",
    flex: 1,
  },
  searchbar: {
    height: 40,
    flexDirection: "row",
    width: "90%",
    backgroundColor: "lightgrey",
    margin: "5%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  back: {
    fontSize: 30,
    color: "orange",
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
});
