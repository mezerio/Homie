import { useSelector, useDispatch } from "react-redux";
import deepCopy from "../../assets/functions/deepCopy";
import addPhotoImg from "../../assets/img/addPhotoImg.png";
import colorScheme from "../../assets/functions/colors";
import fridgeIcon from "../../assets/img/fridgeIcon.png";
import hobIcon from "../../assets/img/hobIcon.png";
import hoodIcon from "../../assets/img/hoodIcon.png";
import laptopIcon from "../../assets/img/laptopIcon.png";
import microwaveIcon from "../../assets/img/microwaveIcon.png";
import ovenIcon from "../../assets/img/ovenIcon.png";
import phoneIcon from "../../assets/img/phoneIcon.png";
import vacuumIcon from "../../assets/img/vacuumIcon.png";
import WMIcon from "../../assets/img/washingMachineIcon.png";
import FieldModal from "../AddPage/fieldModal";
import { setUpdatedInputs } from "../../redux/actions";
import womenIcon from "../../assets/img/womenIcon.png";
import manIcon from "../../assets/img/manIcon.png";
import babyIcon from "../../assets/img/babyIcon.png";
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
import {
  setApplianceList,
  setViewApplianceTrigger,
  setPeopleList,
  setUpdatedIcon,
} from "../../redux/actions";
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
    colorTheme,
  } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleTextInputUpdate(text, index) {
    var newUpdatedInputs = [...updatedInputs];
    newUpdatedInputs[index] = text;
    dispatch(setUpdatedInputs(newUpdatedInputs));
  }

  function handleUpdate() {
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
        <View style={styles[colorTheme].cont}>
          <Pressable onPress={handleCancel}>
            <Text style={styles[colorTheme].back}>{"<"}</Text>
          </Pressable>
          <ScrollView>
            <View style={styles[colorTheme].form}>
              <Text style={styles[colorTheme].textTitle}>Select Icon:</Text>

              <ScrollView style={styles[colorTheme].pickIcon} horizontal={true}>
                {currentPage === "Home"
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
                        <Image
                          style={styles[colorTheme].addImgIcon}
                          source={icon}
                        />
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
                        <Image
                          style={styles[colorTheme].addImgIcon}
                          source={icon}
                        />
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
              {currentPage === "Home"
                ? fieldHeaders.map((field, index) => (
                    <View key={index}>
                      <Text style={styles[colorTheme].text}>{field.title}</Text>
                      <TextInput
                        style={styles[colorTheme].input}
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
                      <Text style={styles[colorTheme].text}>{field.title}</Text>
                      <TextInput
                        style={styles[colorTheme].input}
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
                <Text style={styles[colorTheme].btn4} onPress={handleUpdate}>
                  UPDATE
                </Text>
              </Pressable>
              <Pressable>
                <Text style={styles[colorTheme].btn2} onPress={handleCancel}>
                  CANCEL
                </Text>
              </Pressable>
              <Pressable>
                <Text style={styles[colorTheme].btn3} onPress={handleDelete}>
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
const styles = {};
styles["dark"] = StyleSheet.create({
  textTitle: {
    color: colorScheme["dark"].primaryFont,
  },
  pickIcon: {
    flexDirection: "row",
  },
  cont: {
    backgroundColor: colorScheme["dark"].primary,
    flex: 1,
  },
  text: {
    color: colorScheme["dark"].primaryFont,
  },
  back: {
    fontSize: 30,
    color: colorScheme["dark"].primaryAccent,
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
    backgroundColor: colorScheme["dark"].secondary,
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
    backgroundColor: colorScheme["dark"].alert,
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
    backgroundColor: colorScheme["dark"].primaryAccent,
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
  },
});
styles["light"] = StyleSheet.create({
  textTitle: {
    color: colorScheme["light"].primaryFont,
  },
  pickIcon: {
    flexDirection: "row",
  },
  cont: {
    backgroundColor: colorScheme["light"].primary,
    flex: 1,
  },
  text: {
    color: colorScheme["light"].primaryFont,
  },
  back: {
    fontSize: 30,
    color: colorScheme["light"].primaryAccent,
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
    backgroundColor: colorScheme["light"].secondary,
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
    backgroundColor: colorScheme["light"].alert,
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
    backgroundColor: colorScheme["light"].primaryAccent,
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
  },
});
styles["blue"] = StyleSheet.create({
  textTitle: {
    color: colorScheme["blue"].primaryFont,
  },
  pickIcon: {
    flexDirection: "row",
  },
  cont: {
    backgroundColor: colorScheme["blue"].primary,
    flex: 1,
  },
  text: {
    color: colorScheme["blue"].primaryFont,
  },
  back: {
    fontSize: 30,
    color: colorScheme["blue"].primaryAccent,
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
    backgroundColor: colorScheme["blue"].secondary,
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
    backgroundColor: colorScheme["blue"].alert,
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
    backgroundColor: colorScheme["blue"].primaryAccent,
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
  },
});
styles["purple"] = StyleSheet.create({
  textTitle: {
    color: colorScheme["purple"].primaryFont,
  },
  pickIcon: {
    flexDirection: "row",
  },
  cont: {
    backgroundColor: colorScheme["purple"].primary,
    flex: 1,
  },
  text: {
    color: colorScheme["purple"].primaryFont,
  },
  back: {
    fontSize: 30,
    color: colorScheme["purple"].primaryAccent,
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
    backgroundColor: colorScheme["purple"].secondary,
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
    backgroundColor: colorScheme["purple"].alert,
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
    backgroundColor: colorScheme["purple"].primaryAccent,
    padding: 3,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
  },
});
