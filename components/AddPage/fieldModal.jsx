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
            placeholder="add field"
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

// Define the color themes and their corresponding primary font colors
const colorThemes = {
  dark: "white",
  light: "black",
  green: "white",
  purple: "white",
};
for (const [theme] of Object.entries(colorThemes)) {
  styles[theme] = StyleSheet.create({
    input: {
      backgroundColor: colorScheme[theme].accent,
      width: "70%",
      borderRadius: 5,
      paddingLeft: 5,
    },
    view1: {
      backgroundColor: colorScheme[theme].secondary,
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
}
