import { StyleSheet, TextInput, View, Modal } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setFieldModalVisible, setFieldHeaders } from "../redux/actions";

function FieldModal(props) {
  const { fieldHeaders } = useSelector((state) => state.myReducer);

  const dispatch = useDispatch();
  var enteredText = "";
  function handleAddField() {
    console.log(enteredText);
    console.log("shutup mehdi");
    //hide modal
    dispatch(setFieldModalVisible(false));
    //add input as field
    dispatch(setFieldHeaders(enteredText));
    console.log(fieldHeaders);
  }
  return props.trigger == true ? (
    <>
      <Modal transparent={true} visible={true}>
        <View style={styles.view2}>
          <View style={styles.view1}>
            <TextInput
              onChangeText={(text) => (enteredText = text)}
              onSubmitEditing={handleAddField}
              style={styles.input}
              placeholder="shutup mehdi"
            ></TextInput>
          </View>
        </View>
      </Modal>
    </>
  ) : (
    ""
  );
}

export default FieldModal;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "lightblue",
    width: "70%",
    borderRadius: 5,
    paddingLeft: 5,
  },
  view1: {
    backgroundColor: "white",
    width: "70%",
    height: 100,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  view2: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
