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
  const { peopleList, applianceList, searchTrigger, searchInput } = useSelector(
    (state) => state.myReducer
  );
  const dispatch = useDispatch();

  function handleCancel() {
    dispatch(setSearchTrigger(false));
  }

  return searchTrigger == true ? (
    <>
      <Modal animationType="fade">
        <View style={styles.bg}>
          <Pressable onPress={handleCancel}>
            <Text style={styles.back}>{"<"}</Text>
          </Pressable>
          <View style={styles.searchbar}>
            <TextInput
              style={styles.input}
              placeholder="search..."
              onChangeText={(text) => dispatch(setSearchInput(text))}
            />
            <Image style={styles.searchImg} source={searchImg} />
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

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: colorScheme.primary,
    alignItems: "center",
  },
  searchbar: {
    height: 40,
    flexDirection: "row",
    width: "90%",
    backgroundColor: colorScheme.primaryAccent,
    margin: "5%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  back: {
    fontSize: 30,
    color: colorScheme.primaryAccent,
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
  bg: { backgroundColor: colorScheme.primary, flex: 1 },
});
