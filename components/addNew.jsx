import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { useSelector } from "react-redux";

function AddNew(props) {
  const { newAddPageTrigger } = useSelector((state) => state.myReducer);

  return newAddPageTrigger === true ? (
    <>
      <ScrollView>
        <View>
          <Image source={require("../assets/img/addPhotoImg.png")} />
          <Text>Product Name/Title:</Text>
          <TextInput placeholder="enter name" />
        </View>
      </ScrollView>
    </>
  ) : (
    ""
  );
}

export default AddNew;

const styles = StyleSheet.create({});
