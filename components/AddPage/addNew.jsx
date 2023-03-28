import FieldModal from "./fieldModal";
import AddNewTab from "./addNewTab";
import addPhotoImg from "../../assets/img/addPhotoImg.png";
import * as ImagePicker from "expo-image-picker";
import fridgeIcon from "../../assets/img/fridgeIcon.png";
import hobIcon from "../../assets/img/hobIcon.png";
import hoodIcon from "../../assets/img/hoodIcon.png";
import laptopIcon from "../../assets/img/laptopIcon.png";
import microwaveIcon from "../../assets/img/microwaveIcon.png";
import ovenIcon from "../../assets/img/ovenIcon.png";
import phoneIcon from "../../assets/img/phoneIcon.png";
import vacuumIcon from "../../assets/img/vacuumIcon.png";
import WMIcon from "../../assets/img/washingMachineIcon.png";
import womenIcon from "../../assets/img/womenIcon.png";
import manIcon from "../../assets/img/manIcon.png";
import babyIcon from "../../assets/img/babyIcon.png";
import { useSelector, useDispatch } from "react-redux";
import deepCopy from "../../assets/functions/deepCopy";
import colorScheme from "../../assets/functions/colors";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import {
  setCurrentPage,
  setImgSource,
  setFieldModalTrigger,
  setApplianceList,
  setUpdatedInputs,
  setPeopleList,
  setUpdatedIcon,
} from "../../redux/actions";

function AddNew() {
  const {
    peopleList,
    currentPage,
    fieldModalTrigger,
    fieldHeaders,
    fieldHeadersPerson,
    updatedInputs,
    appTabChosen,
    imgSource,
    applianceList,
    updatedIcon,
    colorTheme,
  } = useSelector((state) => state.myReducer);

  const dispatch = useDispatch();

  var appIconList = [
    fridgeIcon,
    hobIcon,
    hoodIcon,
    laptopIcon,
    microwaveIcon,
    ovenIcon,
    phoneIcon,
    vacuumIcon,
    WMIcon,
  ];

  var peopleIconList = [womenIcon, manIcon, babyIcon];

  function handleAddField() {
    dispatch(setFieldModalTrigger(true));
  }

  function handleSaveAppliance() {
    if (appTabChosen == true) {
      if (
        updatedInputs[0] !== undefined &&
        updatedInputs[1] !== undefined &&
        updatedInputs[2] !== undefined &&
        updatedInputs[3] !== undefined
      ) {
        var newAppliance = {};
        fieldHeaders.map((field, index) => {
          if (updatedInputs[index] !== undefined) {
            newAppliance[field.title] = updatedInputs[index];
          }
        });
        newAppliance["Icon"] = updatedIcon;
        var newApplianceList = deepCopy(applianceList);
        newApplianceList = [...newApplianceList, newAppliance];
        dispatch(setApplianceList(newApplianceList));
        dispatch(setCurrentPage("Home"));
      }
    } else {
      if (updatedInputs[0] !== undefined && updatedInputs[1] !== undefined) {
        var newPerson = {};
        fieldHeadersPerson.map((person, index) => {
          if (updatedInputs[index] !== undefined) {
            newPerson[person.title] = updatedInputs[index];
          }
        });
        newPerson["Icon"] = updatedIcon;
        var newPeopleList = deepCopy(peopleList);
        newPeopleList = [...newPeopleList, newPerson];
        dispatch(setPeopleList(newPeopleList));
        dispatch(setCurrentPage("People"));
      }
    }
  }

  function handleTextInputUpdate(text, index) {
    var newUpdatedInputs = [...updatedInputs];
    newUpdatedInputs[index] = text;
    dispatch(setUpdatedInputs(newUpdatedInputs));
  }
  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    dispatch(setImgSource(result.uri));
    dispatch(setUpdatedIcon({ uri: result.uri }));

    if (!result.canceled) {
      dispatch(setImgSource(result.assets[0].uri));
    }
  };

  function handleSetIcon(icon) {
    dispatch(setUpdatedIcon(icon));
  }

  return currentPage === "New" ? (
    <ScrollView>
      <View style={styles[colorTheme].form}>
        <AddNewTab style={styles[colorTheme].tab} />
        <Text style={styles[colorTheme].textTitle}>Select Icon:</Text>
        <ScrollView style={styles[colorTheme].pickIcon} horizontal={true}>
          {appTabChosen
            ? appIconList.map((icon, index) => (
                <Pressable
                  key={index}
                  style={[
                    updatedIcon === icon
                      ? styles[colorTheme].currentAddImg
                      : styles[colorTheme].otherAddImg,
                  ]}
                  onPress={() => handleSetIcon(icon)}
                >
                  <Image style={styles[colorTheme].addImgIcon} source={icon} />
                </Pressable>
              ))
            : peopleIconList.map((icon, index) => (
                <Pressable
                  key={index}
                  style={[
                    updatedIcon === icon
                      ? styles[colorTheme].currentAddImg
                      : styles[colorTheme].otherAddImg,
                  ]}
                  onPress={() => handleSetIcon(icon)}
                >
                  <Image style={styles[colorTheme].addImgIcon} source={icon} />
                </Pressable>
              ))}
          <Pressable
            onPress={handlePickImage}
            style={styles[colorTheme].otherAddImg}
          >
            <Image
              style={styles[colorTheme].addImgIcon}
              source={imgSource ? { uri: imgSource } : addPhotoImg}
            />
          </Pressable>
        </ScrollView>
        <FieldModal trigger={fieldModalTrigger} />
        {appTabChosen
          ? fieldHeaders.map((field, index) => (
              <View key={index}>
                <Text style={styles[colorTheme].textTitle}>{field.title}</Text>
                <TextInput
                  style={styles[colorTheme].input}
                  placeholder=" e.g. text"
                  onChangeText={(text) => handleTextInputUpdate(text, index)}
                ></TextInput>
              </View>
            ))
          : fieldHeadersPerson.map((field, index) => (
              <View key={index}>
                <Text style={styles[colorTheme].textTitle}>{field.title}</Text>
                <TextInput
                  style={styles[colorTheme].input}
                  placeholder=" e.g. text"
                  onChangeText={(text) => handleTextInputUpdate(text, index)}
                ></TextInput>
              </View>
            ))}
        <Pressable>
          <Text style={styles[colorTheme].btn} onPress={handleAddField}>
            + ADD NEW FIELD
          </Text>
        </Pressable>
        <Pressable>
          <Text style={styles[colorTheme].btn2} onPress={handleSaveAppliance}>
            SAVE
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  ) : (
    ""
  );
}

export default AddNew;

const styles = {};
styles["dark"] = StyleSheet.create({
  pickIcon: {
    flexDirection: "row",
  },
  textTitle: {
    color: colorScheme["dark"].primaryFont,
  },
  form: {
    height: "100%",
    width: "80%",
    marginHorizontal: "10%",
  },
  otherAddImg: {
    height: 70,
    aspectRatio: 1,
    backgroundColor: colorScheme["dark"].tertiary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
    margin: 5,
    padding: 5,
  },
  currentAddImg: {
    height: 70,
    aspectRatio: 1,
    backgroundColor: colorScheme["dark"].primaryAccent,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
    margin: 5,
    padding: 5,
  },
  addImgIcon: {
    flex: 0.7,
    width: 50,
    resizeMode: "contain",
  },
  input: {
    backgroundColor: colorScheme["dark"].tertiary,
    height: 40,
    marginTop: 7,
    marginBottom: 5,
    padding: 5,
    borderRadius: 10,
    color: colorScheme["dark"].primaryFont,
  },
  btn: {
    color: colorScheme["dark"].primaryAccent,
    fontWeight: "bold",
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 14,
    marginVertical: 15,
  },
  btn2: {
    color: colorScheme["dark"].secondaryFont,
    fontWeight: "bold",
    backgroundColor: colorScheme["dark"].primaryAccent,
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 50,
  },
});
styles["light"] = StyleSheet.create({
  pickIcon: {
    flexDirection: "row",
  },
  textTitle: {
    color: colorScheme["light"].primaryFont,
  },
  form: {
    height: "100%",
    width: "80%",
    marginHorizontal: "10%",
  },
  otherAddImg: {
    height: 70,
    aspectRatio: 1,
    backgroundColor: colorScheme["light"].tertiary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
    margin: 5,
    padding: 5,
  },
  currentAddImg: {
    height: 70,
    aspectRatio: 1,
    backgroundColor: colorScheme["light"].primaryAccent,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
    margin: 5,
    padding: 5,
  },
  addImgIcon: {
    flex: 0.7,
    width: 50,
    resizeMode: "contain",
  },
  input: {
    backgroundColor: colorScheme["light"].tertiary,
    height: 40,
    marginTop: 7,
    marginBottom: 5,
    padding: 5,
    borderRadius: 10,
    color: colorScheme["light"].primaryFont,
  },
  btn: {
    color: colorScheme["light"].primaryAccent,
    fontWeight: "bold",
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 14,
    marginVertical: 15,
  },
  btn2: {
    color: colorScheme["light"].secondaryFont,
    fontWeight: "bold",
    backgroundColor: colorScheme["light"].primaryAccent,
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 50,
  },
});
styles["blue"] = StyleSheet.create({
  pickIcon: {
    flexDirection: "row",
  },
  textTitle: {
    color: colorScheme["blue"].primaryFont,
  },
  form: {
    height: "100%",
    width: "80%",
    marginHorizontal: "10%",
  },
  otherAddImg: {
    height: 70,
    aspectRatio: 1,
    backgroundColor: colorScheme["blue"].tertiary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
    margin: 5,
    padding: 5,
  },
  currentAddImg: {
    height: 70,
    aspectRatio: 1,
    backgroundColor: colorScheme["blue"].primaryAccent,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
    margin: 5,
    padding: 5,
  },
  addImgIcon: {
    flex: 0.7,
    width: 50,
    resizeMode: "contain",
  },
  input: {
    backgroundColor: colorScheme["blue"].tertiary,
    height: 40,
    marginTop: 7,
    marginBottom: 5,
    padding: 5,
    borderRadius: 10,
    color: colorScheme["blue"].primaryFont,
  },
  btn: {
    color: colorScheme["blue"].primaryAccent,
    fontWeight: "bold",
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 14,
    marginVertical: 15,
  },
  btn2: {
    color: colorScheme["blue"].secondaryFont,
    fontWeight: "bold",
    backgroundColor: colorScheme["blue"].primaryAccent,
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 50,
  },
});
styles["purple"] = StyleSheet.create({
  pickIcon: {
    flexDirection: "row",
  },
  textTitle: {
    color: colorScheme["purple"].primaryFont,
  },
  form: {
    height: "100%",
    width: "80%",
    marginHorizontal: "10%",
  },
  otherAddImg: {
    height: 70,
    aspectRatio: 1,
    backgroundColor: colorScheme["purple"].tertiary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
    margin: 5,
    padding: 5,
  },
  currentAddImg: {
    height: 70,
    aspectRatio: 1,
    backgroundColor: colorScheme["purple"].primaryAccent,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
    margin: 5,
    padding: 5,
  },
  addImgIcon: {
    flex: 0.7,
    width: 50,
    resizeMode: "contain",
  },
  input: {
    backgroundColor: colorScheme["purple"].tertiary,
    height: 40,
    marginTop: 7,
    marginBottom: 5,
    padding: 5,
    borderRadius: 10,
    color: colorScheme["purple"].primaryFont,
  },
  btn: {
    color: colorScheme["purple"].primaryAccent,
    fontWeight: "bold",
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 14,
    marginVertical: 15,
  },
  btn2: {
    color: colorScheme["purple"].secondaryFont,
    fontWeight: "bold",
    backgroundColor: colorScheme["purple"].primaryAccent,
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 50,
  },
});
