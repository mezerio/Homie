import {
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  setApplianceList,
  setViewApplianceTrigger,
  setPeopleList,
  setUpdatedIcon,
} from "../redux/actions";
import addPhotoImg from "../assets/img/addPhotoImg.png";
import colorScheme from "./colors";
import fridgeIcon from "../assets/img/fridgeIcon.png";
import hobIcon from "../assets/img/hobIcon.png";
import hoodIcon from "../assets/img/hoodIcon.png";
import laptopIcon from "../assets/img/laptopIcon.png";
import microwaveIcon from "../assets/img/microwaveIcon.png";
import ovenIcon from "../assets/img/ovenIcon.png";
import phoneIcon from "../assets/img/phoneIcon.png";
import vacuumIcon from "../assets/img/vacuumIcon.png";
import WMIcon from "../assets/img/washingMachineIcon.png";
import FieldModal from "./fieldModal";
import { setUpdatedInputs, setCurrentPage } from "../redux/actions";
import womenIcon from "../assets/img/womenIcon.png";
import manIcon from "../assets/img/manIcon.png";
import babyIcon from "../assets/img/babyIcon.png";
function ViewAppliance({ trigger }) {
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

  const {
    peopleList,
    currentPage,
    applianceList,
    fieldModalTrigger,
    fieldHeaders,
    updatedInputs,
    indexOfViewedAppliance,
    fieldHeadersPerson,
    imgSource,
    updatedIcon,
  } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleTextInputUpdate(text, index) {
    var newUpdatedInputs = [...updatedInputs];
    newUpdatedInputs[index] = text;
    dispatch(setUpdatedInputs(newUpdatedInputs));
  }
  function deepCopy(thingToCopy) {
    if (Array.isArray(thingToCopy)) {
      return thingToCopy.map(deepCopy);
    } else if (typeof thingToCopy === "object" && thingToCopy !== null) {
      return Object.fromEntries(
        Object.entries(thingToCopy).map(([key, value]) => [
          key,
          deepCopy(value),
        ])
      );
    } else {
      return thingToCopy;
    }
  }

  function handleUpdate() {
    console.log("update");
    if (currentPage === "Home") {
      var newApplianceList = deepCopy(applianceList);
      fieldHeaders.map((field, index) => {
        if (updatedInputs[index] !== undefined) {
          newApplianceList[indexOfViewedAppliance][field.title] =
            updatedInputs[index];
        }
      });
      newApplianceList[indexOfViewedAppliance]["Icon"] = updatedIcon;
      dispatch(setApplianceList(newApplianceList));
      dispatch(setViewApplianceTrigger(false));
    } else if (currentPage === "People") {
      var newPeopleList = deepCopy(peopleList);
      fieldHeadersPerson.map((person, index) => {
        if (updatedInputs[index] !== undefined) {
          newPeopleList[indexOfViewedAppliance][person.title] =
            updatedInputs[index];
        }
      });
      newPeopleList[indexOfViewedAppliance]["Icon"] = updatedIcon;
      dispatch(setPeopleList(newPeopleList));
      dispatch(setViewApplianceTrigger(false));
    }
  }

  function handleCancel() {
    dispatch(setViewApplianceTrigger(false));
  }
  function handleDelete() {
    console.log("delete");
    if (currentPage === "Home") {
      var newApplianceList = deepCopy(applianceList);
      newApplianceList.splice(indexOfViewedAppliance, 1);
      dispatch(setApplianceList(newApplianceList));
    } else if (currentPage === "People") {
      var newPeopleList = deepCopy(peopleList);
      newPeopleList.splice(indexOfViewedAppliance, 1);
      dispatch(setPeopleList(newPeopleList));
    }
    dispatch(setViewApplianceTrigger(false));
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
  return trigger == true ? (
    <>
      <Modal animationType="fade" transparent={true}>
        <View style={styles.cont}>
          <Pressable onPress={handleCancel}>
            <Text style={styles.back}>{"<"}</Text>
          </Pressable>
          <ScrollView>
            <View style={styles.form}>
              <Text style={styles.textTitle}>Select Icon:</Text>

              <ScrollView style={styles.pickIcon} horizontal={true}>
                {currentPage === "Home"
                  ? appIconList.map((icon, index) => (
                      <Pressable
                        key={index}
                        style={[
                          updatedIcon === icon
                            ? styles.currentAddImg
                            : styles.otherAddImg,
                        ]}
                        onPress={() => handleSetIcon(icon)}
                      >
                        <Image style={styles.addImgIcon} source={icon} />
                      </Pressable>
                    ))
                  : peopleIconList.map((icon, index) => (
                      <Pressable
                        key={index}
                        style={[
                          updatedIcon === icon
                            ? styles.currentAddImg
                            : styles.otherAddImg,
                        ]}
                        onPress={() => handleSetIcon(icon)}
                      >
                        <Image style={styles.addImgIcon} source={icon} />
                      </Pressable>
                    ))}
                <Pressable onPress={handlePickImage} style={styles.otherAddImg}>
                  <Image
                    style={styles.addImgIcon}
                    source={imgSource ? { uri: imgSource } : addPhotoImg}
                  />
                </Pressable>
              </ScrollView>
              <FieldModal trigger={fieldModalTrigger} />
              {currentPage === "Home"
                ? fieldHeaders.map((field, index) => (
                    <View key={index}>
                      <Text style={styles.text}>{field.title}</Text>
                      <TextInput
                        style={styles.input}
                        placeholder=" e.g. text"
                        onChangeText={(text) =>
                          handleTextInputUpdate(text, index)
                        }
                      >
                        {applianceList[indexOfViewedAppliance][field.title]}
                      </TextInput>
                    </View>
                  ))
                : fieldHeadersPerson.map((field, index) => (
                    <View key={index}>
                      <Text style={styles.text}>{field.title}</Text>
                      <TextInput
                        style={styles.input}
                        placeholder=" e.g. text"
                        onChangeText={(text) =>
                          handleTextInputUpdate(text, index)
                        }
                      >
                        {peopleList[indexOfViewedAppliance][field.title]}
                      </TextInput>
                    </View>
                  ))}
              <Pressable>
                <Text style={styles.btn4} onPress={handleUpdate}>
                  UPDATE
                </Text>
              </Pressable>
              <Pressable>
                <Text style={styles.btn2} onPress={handleCancel}>
                  CANCEL
                </Text>
              </Pressable>
              <Pressable>
                <Text style={styles.btn3} onPress={handleDelete}>
                  DELETE
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </>
  ) : (
    ""
  );
}

export default ViewAppliance;

const styles = StyleSheet.create({
  textTitle: {
    color: colorScheme.primaryFont,
  },
  pickIcon: {
    flexDirection: "row",
  },
  cont: {
    backgroundColor: colorScheme.primary,
    flex: 1,
  },
  text: {
    color: colorScheme.primaryFont,
  },
  back: {
    fontSize: 30,
    color: colorScheme.primaryAccent,
    paddingHorizontal: 30,
  },
  form: {
    height: "100%",
    width: "100%",
    padding: "10%",
  },
  otherAddImg: {
    height: 70,
    aspectRatio: 1,
    backgroundColor: colorScheme.tertiary,
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
    backgroundColor: colorScheme.primaryAccent,
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
    backgroundColor: colorScheme.tertiary,
    height: 40,
    marginTop: 7,
    marginBottom: 5,
    padding: 5,
    borderRadius: 10,
    color: colorScheme.primaryFont,
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
    backgroundColor: colorScheme.secondary,
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    marginVertical: 5,
  },
  btn3: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: colorScheme.alert,
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 50,
  },
  btn4: {
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
    backgroundColor: colorScheme.primaryAccent,
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
  },
});
