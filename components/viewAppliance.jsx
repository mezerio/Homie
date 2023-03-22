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
  setApplianceList,
  setViewApplianceTrigger,
  setPeopleList,
} from "../redux/actions";
import addPhotoImg from "../assets/img/addPhotoImg.png";
import colorScheme from "./colors";

import FieldModal from "./fieldModal";
import { setUpdatedInputs, setCurrentPage } from "../redux/actions";

function ViewAppliance({ trigger }) {
  const {
    peopleList,
    currentPage,
    applianceList,
    fieldModalTrigger,
    fieldHeaders,
    updatedInputs,
    indexOfViewedAppliance,
    fieldHeadersPerson,
  } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleTextInputUpdate(text, index) {
    var newUpdatedInputs = [...updatedInputs];
    newUpdatedInputs[index] = text;
    dispatch(setUpdatedInputs(newUpdatedInputs));
  }
  function deepCopy(thingToCopy) {
    if (Array.isArray(thingToCopy)) {
      return thingToCopy.map(deepCopy);
    } else if (typeof thingToCopy === "object" && thingToCopy !== null) {
      return Object.fromEntries(
        Object.entries(thingToCopy).map(([key, value]) => [
          key,
          deepCopy(value),
        ])
      );
    } else {
      return thingToCopy;
    }
  }

  function handleUpdate() {
    console.log("update");
    if (currentPage === "Home") {
      var newApplianceList = deepCopy(applianceList);
      fieldHeaders.map((field, index) => {
        if (updatedInputs[index] !== undefined) {
          newApplianceList[indexOfViewedAppliance][field.title] =
            updatedInputs[index];
        }
      });
      dispatch(setApplianceList(newApplianceList));
      dispatch(setViewApplianceTrigger(false));
    } else if (currentPage === "People") {
      var newPeopleList = deepCopy(peopleList);
      fieldHeadersPerson.map((person, index) => {
        if (updatedInputs[index] !== undefined) {
          newPeopleList[indexOfViewedAppliance][person.title] =
            updatedInputs[index];
        }
      });
      dispatch(setPeopleList(newPeopleList));
      dispatch(setViewApplianceTrigger(false));
    }
  }

  function handleCancel() {
    dispatch(setViewApplianceTrigger(false));
  }
  function handleDelete() {
    console.log("delete");
    if (currentPage === "Home") {
      var newApplianceList = deepCopy(applianceList);
      newApplianceList.splice(indexOfViewedAppliance, 1);
      dispatch(setApplianceList(newApplianceList));
    } else if (currentPage === "People") {
      var newPeopleList = deepCopy(peopleList);
      newPeopleList.splice(indexOfViewedAppliance, 1);
      dispatch(setPeopleList(newPeopleList));
    }
    dispatch(setViewApplianceTrigger(false));
  }
  return trigger == true ? (
    <>
      <Modal animationType="fade" transparent={true}>
        <View style={styles.cont}>
          <Pressable onPress={handleCancel}>
            <Text style={styles.back}>{"<"}</Text>
          </Pressable>
          <ScrollView>
            <View style={styles.form}>
              <Pressable style={styles.addImg}>
                <Image style={styles.addImgIcon} source={addPhotoImg} />
              </Pressable>
              <FieldModal trigger={fieldModalTrigger} />
              {currentPage === "Home"
                ? fieldHeaders.map((field, index) => (
                    <View key={index}>
                      <Text style={styles.text}>{field.title}</Text>
                      <TextInput
                        style={styles.input}
                        placeholder=" e.g. text"
                        onChangeText={(text) =>
                          handleTextInputUpdate(text, index)
                        }
                      >
                        {applianceList[indexOfViewedAppliance][field.title]}
                      </TextInput>
                    </View>
                  ))
                : fieldHeadersPerson.map((field, index) => (
                    <View key={index}>
                      <Text style={styles.text}>{field.title}</Text>
                      <TextInput
                        style={styles.input}
                        placeholder=" e.g. text"
                        onChangeText={(text) =>
                          handleTextInputUpdate(text, index)
                        }
                      >
                        {peopleList[indexOfViewedAppliance][field.title]}
                      </TextInput>
                    </View>
                  ))}
              <Pressable>
                <Text style={styles.btn4} onPress={handleUpdate}>
                  UPDATE
                </Text>
              </Pressable>
              <Pressable>
                <Text style={styles.btn2} onPress={handleCancel}>
                  CANCEL
                </Text>
              </Pressable>
              <Pressable>
                <Text style={styles.btn3} onPress={handleDelete}>
                  DELETE
                </Text>
              </Pressable>
            </View>
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
  cont: {
    backgroundColor: colorScheme.primary,
    flex: 1,
  },
  text: {
    color: colorScheme.primaryFont,
  },
  back: {
    fontSize: 30,
    color: colorScheme.primaryAccent,
    paddingHorizontal: 30,
  },
  form: {
    height: "100%",
    width: "100%",
    padding: "10%",
  },
  addImg: {
    flex: 1,
    aspectRatio: 1,
    width: "75%",
    backgroundColor: colorScheme.tertiary,
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
    backgroundColor: colorScheme.tertiary,
    height: 40,
    marginTop: 7,
    marginBottom: 5,
    padding: 5,
    borderRadius: 10,
    color: colorScheme.primaryFont,
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
    backgroundColor: colorScheme.secondary,
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    marginVertical: 5,
  },
  btn3: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: colorScheme.alert,
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 50,
  },
  btn4: {
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
    backgroundColor: colorScheme.primaryAccent,
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
  },
});
