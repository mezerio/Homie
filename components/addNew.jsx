import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { useSelector } from "react-redux";

function AddNew(props) {
  const { newAddPageTrigger } = useSelector((state) => state.myReducer);

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
          <Text>Product Name/Title:</Text>
          <TextInput
            style={styles.input}
            placeholder=" e.g. echo bubble washing machine"
          />
          <Text>Vender:</Text>
          <TextInput style={styles.input} placeholder=" e.g. Samsung" />
          <Text>Product Type</Text>
          <TextInput style={styles.input} placeholder=" e.g. washing machine" />
          <Text>Model Number:</Text>
          <TextInput style={styles.input} placeholder=" e.g. ED73928DGUK" />
          <Text>Serial Number:</Text>
          <TextInput style={styles.input} placeholder=" e.g. 19836792S" />
          <Text>Date Purchased:</Text>
          <TextInput style={styles.input} placeholder=" e.g. 01/01/2001" />
          <Text>Warrenty Length</Text>
          <TextInput style={styles.input} placeholder=" e.g. 2 years" />
          <Text>Bought By:</Text>
          <TextInput style={styles.input} placeholder=" e.g. John" />
          <Text>Add Receipt:</Text>
          <TextInput style={styles.input} placeholder="insert pic here" />
          <Text>Color:</Text>
          <TextInput style={styles.input} placeholder=" e.g. grey" />
          <Pressable>
            <Text style={styles.btn}>+ ADD NEW FIELD</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.btn2}>SAVE</Text>
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
    // display: "grid",
    // backgroundColor: "lightgreen",
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
    border: "none",
    outline: "none",
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
