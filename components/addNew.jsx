import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setNewAddPage, setHomePage } from "../redux/actions";
import FieldModal from "./fieldModal";
import AddNewTab from "./addNewTab";
import addPhotoImg from "../assets/img/addPhotoImg.png";
import {
  setFieldModalVisible,
  setApplianceList,
  setUpdatedInputs,
  setPeopleList,
  setPeople,
} from "../redux/actions";

function AddNew() {
  const {
    newAddPageTrigger,
    fieldModalTrigger,
    fieldHeaders,
    fieldHeadersPerson,
    updatedInputs,
    appTabChosen,
  } = useSelector((state) => state.myReducer);

  const dispatch = useDispatch();

  function handleAddField() {
    dispatch(setFieldModalVisible(true));
  }

  function handleSaveAppliance() {
    if (appTabChosen == true) {
      var newAppliance = {};
      fieldHeaders.map((field, index) => {
        if (updatedInputs[index] !== undefined) {
          newAppliance[field.title] = updatedInputs[index];
        }
      });
      dispatch(setApplianceList(newAppliance));
      dispatch(setNewAddPage(false));
      dispatch(setHomePage(true));
    } else {
      var newPerson = {};
      fieldHeadersPerson.map((person, index) => {
        if (updatedInputs[index] !== undefined) {
          newPerson[person.title] = updatedInputs[index];
        }
      });
      console.log(updatedInputs, "pp");
      console.log(newPerson, "ppp");
      dispatch(setPeopleList(newPerson));
      dispatch(setNewAddPage(false));
      dispatch(setPeople(true));
    }
  }

  function handleTextInputUpdate(text, index) {
    var newUpdatedInputs = [...updatedInputs];
    newUpdatedInputs[index] = text;
    dispatch(setUpdatedInputs(newUpdatedInputs));
    console.log(updatedInputs, 1);
  }

  return newAddPageTrigger === true ? (
    <ScrollView>
      <View style={styles.form}>
        <AddNewTab style={styles.tab} />
        <Pressable style={styles.addImg}>
          <Image style={styles.addImgIcon} source={addPhotoImg} />
        </Pressable>
        <FieldModal trigger={fieldModalTrigger} />
        {appTabChosen
          ? fieldHeaders.map((field, index) => (
              <View key={index}>
                <Text>{field.title}</Text>
                <TextInput
                  style={styles.input}
                  placeholder=" e.g. text"
                  onChangeText={(text) => handleTextInputUpdate(text, index)}
                ></TextInput>
              </View>
            ))
          : fieldHeadersPerson.map((field, index) => (
              <View key={index}>
                <Text>{field.title}</Text>
                <TextInput
                  style={styles.input}
                  placeholder=" e.g. text"
                  onChangeText={(text) => handleTextInputUpdate(text, index)}
                ></TextInput>
              </View>
            ))}
        <Pressable>
          <Text style={styles.btn} onPress={handleAddField}>
            + ADD NEW FIELD
          </Text>
        </Pressable>
        <Pressable>
          <Text style={styles.btn2} onPress={handleSaveAppliance}>
            SAVE
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  ) : (
    ""
  );
}

export default AddNew;

const styles = StyleSheet.create({
  form: {
    height: "100%",
    width: "80%",
    marginHorizontal: "10%",
  },
  addImg: {
    flex: 1,
    aspectRatio: 1,
    width: "75%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  addImgIcon: {
    height: "80%",
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    height: 40,
    marginTop: 7,
    marginBottom: 5,
    padding: 5,
    borderRadius: 10,
  },
  btn: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "lightgreen",
    padding: 3,
    borderRadius: 5,
    width: "41%",
    margin: 10,
  },
  btn2: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "navy",
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 50,
  },
});
