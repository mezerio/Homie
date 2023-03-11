import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from "react-native";

function AddNew(props) {
  return props.trigger === true ? (
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
