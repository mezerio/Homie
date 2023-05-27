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
        <Text style={styles[colorTheme].textTitle}>Icon:</Text>
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
              <View key={index} style={styles[colorTheme].textContainer}>
                <Text style={styles[colorTheme].textTitle}>{field.title}</Text>
                <TextInput
                  style={styles[colorTheme].input}
                  placeholder=" e.g. text"
                  onChangeText={(text) => handleTextInputUpdate(text, index)}
                ></TextInput>
              </View>
            ))
          : fieldHeadersPerson.map((field, index) => (
              <View key={index} style={styles[colorTheme].textContainer}>
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
            + ADD FIELD
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

// Define the color themes and their corresponding primary font colors
const colorThemes = {
  dark: "white",
  light: "black",
  green: "white",
  purple: "white",
};
for (const [theme] of Object.entries(colorThemes)) {
  styles[theme] = StyleSheet.create({
    pickIcon: {
      flexDirection: "row",
    },

    form: {
      height: "100%",
      width: "80%",
      marginHorizontal: "10%",
    },
    otherAddImg: {
      height: 50,
      aspectRatio: 1,
      backgroundColor: colorScheme[theme].secondary,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      marginBottom: 10,
      margin: 5,
      padding: 5,
    },
    currentAddImg: {
      height: 50,
      aspectRatio: 1,
      backgroundColor: colorScheme[theme].accent,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      marginBottom: 10,
      margin: 5,
      padding: 5,
    },
    addImgIcon: {
      width: 30,
      height: 30,
      resizeMode: "contain",
    },
    textContainer: {
      backgroundColor: colorScheme[theme].secondary,
      padding: 10,
      margin: 5,
      borderRadius: 10,
    },
    textTitle: {
      color: colorScheme[theme].primaryFont,
      fontSize: 12,
    },
    input: {
      borderRadius: 10,
      color: colorScheme[theme].primaryFont,
    },
    btn: {
      color: colorScheme[theme].accent,
      fontWeight: "bold",
      padding: 3,
      borderRadius: 5,
      width: "100%",
      textAlign: "center",
      fontSize: 14,
      marginVertical: 15,
    },
    btn2: {
      color: colorScheme[theme].primaryFont,
      fontWeight: "bold",
      backgroundColor: colorScheme[theme].accent,
      padding: 3,
      borderRadius: 5,
      width: "100%",
      textAlign: "center",
      fontSize: 20,
      marginBottom: 50,
    },
  });
}
