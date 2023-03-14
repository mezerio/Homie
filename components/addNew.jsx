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
import FieldModal from "./fieldModal";
import { setFieldModalVisible, setApplianceList } from "../redux/actions";

function AddNew() {
  const { newAddPageTrigger } = useSelector((state) => state.myReducer);
  const { fieldModalTrigger } = useSelector((state) => state.myReducer);
  const { fieldHeaders } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleAddField() {
    dispatch(setFieldModalVisible(true));
  }
  function handleSaveAppliance() {
    var newAppliance = {};
    fieldHeaders.map((field) => {
      newAppliance[field] = "input";
    });
    dispatch(setApplianceList(newAppliance));
  }
  return newAddPageTrigger === true ? (
    <>
      <ScrollView>
        <View style={styles.form}>
          <Pressable style={styles.addImg}>
            <Image
              style={styles.addImgIcon}
              source={require("../assets/img/addPhotoImg.png")}
            />
          </Pressable>
          <FieldModal trigger={fieldModalTrigger}></FieldModal>
          {fieldHeaders.map((field) => (
            <View key={field}>
              <Text>{field}</Text>
              <TextInput style={styles.input} placeholder=" e.g. text" />
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
    </>
  ) : (
    ""
  );
}

export default AddNew;

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
