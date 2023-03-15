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
  setNewAddPage,
  setHomePage,
  setViewApplianceVisible,
} from "../redux/actions";

import FieldModal from "./fieldModal";
import {
  setFieldModalVisible,
  setApplianceList,
  setUpdatedInputs,
} from "../redux/actions";

function ViewAppliance({ trigger }) {
  const { applianceList } = useSelector((state) => state.myReducer);
  const { fieldModalTrigger } = useSelector((state) => state.myReducer);
  const { fieldHeaders } = useSelector((state) => state.myReducer);
  const { updatedInputs } = useSelector((state) => state.myReducer);
  const { indexOfViewedAppliance } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleAddField() {
    dispatch(setFieldModalVisible(true));
  }

  function handleSaveAppliance() {
    var newAppliance = {};
    fieldHeaders.map((field, index) => {
      if (updatedInputs[index] !== undefined) {
        newAppliance[field.title] = updatedInputs[index];
      }
    });
    dispatch(setApplianceList(newAppliance));
    dispatch(setNewAddPage(false));
    dispatch(setHomePage(true));
  }

  function handleTextInputUpdate(text, index) {
    var newUpdatedInputs = [...updatedInputs];
    newUpdatedInputs[index] = text;
    dispatch(setUpdatedInputs(newUpdatedInputs));
  }

  function handleCancel() {
    dispatch(setViewApplianceVisible(false));
  }
  return trigger == true ? (
    <>
      <Modal animationType="fade">
        <ScrollView>
          <View style={styles.form}>
            <Pressable style={styles.addImg}>
              <Image
                style={styles.addImgIcon}
                source={require("../assets/img/addPhotoImg.png")}
              />
            </Pressable>
            <FieldModal trigger={fieldModalTrigger} />
            {fieldHeaders.map((field, index) => (
              <View key={index}>
                <Text>{field.title}</Text>
                <TextInput
                  style={styles.input}
                  placeholder=" e.g. text"
                  onChangeText={(text) => handleTextInputUpdate(text, index)}
                >
                  {applianceList[indexOfViewedAppliance][field.title]}
                </TextInput>
              </View>
            ))}
            <Pressable>
              {/* <Text style={styles.btn} onPress={handleAddField}>
                + ADD NEW FIELD
              </Text> */}
            </Pressable>
            <Pressable>
              <Text style={styles.btn2} onPress={handleCancel}>
                CANCEL
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
  form: {
    height: "100%",
    width: "80%",
    margin: "10%",
  },
  addImg: {
    flex: 1,
    aspectRatio: 1,
    width: "75%",
    backgroundColor: "lightblue",
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
    backgroundColor: "lightblue",
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
