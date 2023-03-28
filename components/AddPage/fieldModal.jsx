import { StyleSheet, TextInput, View, Modal } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import colorScheme from "../../assets/functions/colors";
import {
  setFieldModalTrigger,
  setFieldHeaders,
  setFieldHeadersPerson,
} from "../../redux/actions";

function FieldModal(props) {
  const { appTabChosen, colorTheme } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();
  function handleAddField() {
    dispatch(setFieldModalTrigger(false));
    if (appTabChosen === true) {
      dispatch(setFieldHeaders({ title: enteredText, input: "" }));
    } else {
      dispatch(setFieldHeadersPerson({ title: enteredText, input: "" }));
    }
  }
  return props.trigger == true ? (
    <Modal transparent={true} visible={true} animationType="slide">
      <View style={styles[colorTheme].view2}>
        <View style={styles[colorTheme].view1}>
          <TextInput
            onChangeText={(text) => (enteredText = text)}
            onSubmitEditing={handleAddField}
            style={styles[colorTheme].input}
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

const styles = {};
styles["dark"] = StyleSheet.create({
  input: {
    backgroundColor: colorScheme["dark"].primaryAccent,
    width: "70%",
    borderRadius: 5,
    paddingLeft: 5,
  },
  view1: {
    backgroundColor: colorScheme["dark"].tertiary,
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
styles["light"] = StyleSheet.create({
  input: {
    backgroundColor: colorScheme["light"].primaryAccent,
    width: "70%",
    borderRadius: 5,
    paddingLeft: 5,
  },
  view1: {
    backgroundColor: colorScheme["light"].tertiary,
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
styles["blue"] = StyleSheet.create({
  input: {
    backgroundColor: colorScheme["blue"].primaryAccent,
    width: "70%",
    borderRadius: 5,
    paddingLeft: 5,
  },
  view1: {
    backgroundColor: colorScheme["blue"].tertiary,
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
styles["purple"] = StyleSheet.create({
  input: {
    backgroundColor: colorScheme["purple"].primaryAccent,
    width: "70%",
    borderRadius: 5,
    paddingLeft: 5,
  },
  view1: {
    backgroundColor: colorScheme["purple"].tertiary,
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
