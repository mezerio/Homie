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
import FieldModal from "./fieldModal";
import { setUpdatedInputs } from "../redux/actions";

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

  function handleCancel() {
    dispatch(setViewApplianceTrigger(false));
  }
  function handleDelete() {
    console.log("delete");
    if (currentPage === "Home") {
      var newApplianceList = JSON.parse(JSON.stringify(applianceList));
      newApplianceList.splice(indexOfViewedAppliance, 1);
      dispatch(setApplianceList(newApplianceList));
    } else if (currentPage === "People") {
      var newPeopleList = JSON.parse(JSON.stringify(peopleList));
      newPeopleList.splice(indexOfViewedAppliance, 1);
      dispatch(setPeopleList(newPeopleList));
    }
    dispatch(setViewApplianceTrigger(false));
  }
  return trigger == true ? (
    <>
      <Modal animationType="fade">
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
                    <Text>{field.title}</Text>
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
                    <Text>{field.title}</Text>
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
            {/* <Pressable>
              <Text style={styles.btn2} onPress={handleUpdate}>
                UPDATE
              </Text>
            </Pressable> */}
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
      </Modal>
    </>
  ) : (
    ""
  );
}

export default ViewAppliance;

const styles = StyleSheet.create({
  back: {
    fontSize: 30,
    color: "orange",
    paddingHorizontal: 30,
  },
  form: {
    height: "100%",
    width: "80%",
    margin: "10%",
  },
  addImg: {
    flex: 1,
    aspectRatio: 1,
    width: "75%",
    backgroundColor: "lightgrey",
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
    backgroundColor: "lightgrey",
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
    backgroundColor: "orange",
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
    backgroundColor: "red",
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 50,
  },
});
