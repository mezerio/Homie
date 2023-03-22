import { StyleSheet, TextInput, View, Modal } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import colorScheme from "./colors";
import {
  setFieldModalVisible,
  setFieldHeaders,
  setFieldHeadersPerson,
  setAppTabChosen,
} from "../redux/actions";

function FieldModal(props) {
  const { appTabChosen, fieldHeaders, fieldHeadersPerson } = useSelector(
    (state) => state.myReducer
  );
  const dispatch = useDispatch();
  function handleAddField() {
    dispatch(setFieldModalVisible(false));
    if (appTabChosen === true) {
      dispatch(setFieldHeaders({ title: enteredText, input: "" }));
    } else {
      dispatch(setFieldHeadersPerson({ title: enteredText, input: "" }));
    }
  }
  return props.trigger == true ? (
    <Modal transparent={true} visible={true} animationType="slide">
      <View style={styles.view2}>
        <View style={styles.view1}>
          <TextInput
            onChangeText={(text) => (enteredText = text)}
            onSubmitEditing={handleAddField}
            style={styles.input}
            placeholder="shutup mehdi"
          />
        </View>
      </View>
    </Modal>
  ) : (
    ""
  );
}

export default FieldModal;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colorScheme.primaryAccent,
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
