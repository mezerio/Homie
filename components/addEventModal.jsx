import {
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
  Pressable,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import colorScheme from "./colors";
import {
  setViewApplianceTrigger,
  setDatePickerToggle,
  setTimePickerToggle,
  setEventModalTrigger,
  setNewEventDate,
  setNewEventTime,
  setDatesWithEvents,
  setEventList,
  setNewEventDesc,
  setSearchToggle,
} from "../redux/actions";
import addPhotoImg from "../assets/img/addPhotoImg.png";
import FieldModal from "./fieldModal";
import { setUpdatedInputs } from "../redux/actions";
import DateTimePicker from "@react-native-community/datetimepicker";
import SearchModal from "./searchModal";

function AddEventModal({ trigger }) {
  var enteredText = "";

  const {
    peopleList,
    currentPage,
    applianceList,
    fieldModalTrigger,
    fieldHeaders,
    updatedInputs,
    indexOfViewedAppliance,
    fieldHeadersPerson,
    datePickerToggle,
    timePickerToggle,
    newEventDate,
    newEventTime,
    newEventDesc,
    newEventItem,
    datesWithEvents,
    eventList,
  } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleTextInputUpdate(text, index) {
    var newUpdatedInputs = [...updatedInputs];
    newUpdatedInputs[index] = text;
    dispatch(setUpdatedInputs(newUpdatedInputs));
  }

  function handleCancel() {
    dispatch(setEventModalTrigger(false));
  }

  function handleDatePickerToggle() {
    dispatch(setDatePickerToggle(true));
  }

  function handleTimePickerToggle() {
    dispatch(setTimePickerToggle(true));
  }
  function handleDateChange(event, selectedDate) {
    dispatch(setDatePickerToggle(false));
    dispatch(setNewEventDate(formatDate(selectedDate)));
  }

  function handleTimeChange(event, selectedTime) {
    dispatch(setTimePickerToggle(false));
    dispatch(setNewEventTime(formatTime(selectedTime)));
  }

  function formatDate(date) {
    var year = new Date(date).getFullYear();
    var month = new Date(date).getMonth() + 1;
    var date = new Date(date).getDate();
    return String(
      year +
        "-" +
        (month < 10 ? "0" : "") +
        month +
        "-" +
        (date < 10 ? "0" : "") +
        date
    );
  }

  function formatTime(date) {
    var hour = new Date(date).getHours();
    var min = new Date(date).getMinutes();
    return String(
      (hour < 10 ? "0" : "") + hour + (min < 10 ? ":0" : ":") + min
    );
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
  function handleSave() {
    if (newEventItem !== "") {
      console.log(datesWithEvents[newEventDate], "f");

      dispatch(setEventModalTrigger(false));
      var newDatesWithEvents = deepCopy(datesWithEvents);
      if (newDatesWithEvents[newEventDate] !== undefined) {
        console.log("1");
        if (newDatesWithEvents[newEventDate].dots !== undefined) {
          console.log("2");

          newDatesWithEvents = {
            ...newDatesWithEvents,
            [newEventDate]: {
              ...newDatesWithEvents[newEventDate],
              dots: [
                ...newDatesWithEvents[newEventDate].dots,
                { color: colorScheme.primary },
              ],
            },
          };
        } else {
          console.log("4");

          newDatesWithEvents = {
            ...newDatesWithEvents,
            [newEventDate]: {
              ...newDatesWithEvents[newEventDate],
              dots: [{ color: colorScheme.primary }],
            },
          };
        }
      } else {
        console.log("3");

        newDatesWithEvents = {
          ...newDatesWithEvents,
          [newEventDate]: {
            marked: true,
            selected: false,
            dots: [{ color: colorScheme.primary }],
            selectedColor: colorScheme.primary,
            selectedTextColor: "black",
          },
        };
      }
      //
      dispatch(setDatesWithEvents(newDatesWithEvents));
      console.log(datesWithEvents[newEventDate], "after");
      var newEventList = deepCopy(eventList);

      // newEventList = {
      //   ...newEventList,
      //   [newEventDate]: [
      //     ...newEventList[newEventDate],
      //     {
      //       Title: "shutup mehdi",
      //       Time: newEventTime,
      //       Desc: newEventDesc,
      //     },
      //   ],
      // };
      if (newEventDate in newEventList) {
        newEventList = {
          ...newEventList,
          [newEventDate]: [
            ...newEventList[newEventDate],
            {
              Title: newEventItem["Vender:"],
              Time: newEventTime,
              Desc: newEventDesc,
              Item: newEventItem,
            },
          ],
        };
      } else {
        newEventList = {
          ...newEventList,
          [newEventDate]: [
            {
              Title: String(
                newEventItem["Vender:"] +
                  " " +
                  newEventItem["Product Name/Title:"]
              ),
              Time: newEventTime,
              Desc: newEventDesc,
              Item: newEventItem,
            },
          ],
        };
      }

      dispatch(setEventList(newEventList));
    }
  }

  function handleSelectAP() {
    dispatch(setSearchToggle(true));
  }
  return trigger == true ? (
    <>
      <Modal transparent={true} visible={true} animationType="fade">
        <View style={styles.card}>
          <View style={styles.card2}>
            <Pressable style={styles.btn3} onPress={handleSelectAP}>
              {newEventItem !== "" ? (
                <>
                  <Image style={styles.img} source={newEventItem["Icon"]} />
                  <Text style={styles.btn2}>
                    {String(
                      newEventItem["Vender:"] +
                        " " +
                        newEventItem["Product Name/Title:"]
                    )}
                  </Text>
                </>
              ) : (
                <Text style={styles.btn2}>select appliance/person</Text>
              )}
            </Pressable>
            <View>
              <Text style={styles.fil}>Select Date:</Text>
              <TouchableWithoutFeedback onPress={handleDatePickerToggle}>
                <View>
                  <Text style={styles.btn}>
                    {String(
                      newEventDate.split("-")[2] +
                        "-" +
                        newEventDate.split("-")[1] +
                        "-" +
                        newEventDate.split("-")[0]
                    )}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              {datePickerToggle && (
                <DateTimePicker
                  value={new Date(newEventDate)}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
              )}
            </View>
            <View>
              <Text style={styles.fil}>Select Time:</Text>

              <TouchableWithoutFeedback onPress={handleTimePickerToggle}>
                <View>
                  <Text style={styles.btn}>{newEventTime}</Text>
                </View>
              </TouchableWithoutFeedback>
              {timePickerToggle && (
                <DateTimePicker
                  value={new Date()}
                  mode="time"
                  display="default"
                  onChange={handleTimeChange}
                />
              )}
            </View>
            <Text style={styles.bb}>Description</Text>
            <TextInput
              onChangeText={(text) => dispatch(setNewEventDesc(text))}
              style={styles.ti}
              placeholder="enter description..."
              multiline={true}
              numberOfLines={4}
            ></TextInput>
            <Pressable onPress={handleSave}>
              <Text style={[styles.btn, styles.bb2]}>SAVE</Text>
            </Pressable>
            <Pressable onPress={handleCancel}>
              <Text style={[styles.btn, styles.bb5]}>CANCEL</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <SearchModal />
    </>
  ) : (
    ""
  );
}

export default AddEventModal;

const styles = StyleSheet.create({
  img: {
    height: "100%",
    opacity: 1,
    resizeMode: "contain",
    flex: 1,
  },
  fil: { color: colorScheme.primaryFont },
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  card2: {
    backgroundColor: colorScheme.secondary,
    width: "70%",
    height: 400,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colorScheme.primaryFont,
    borderWidth: 2,
  },
  btn: {
    backgroundColor: colorScheme.primary,
    color: colorScheme.primaryFont,
    padding: 5,
    borderRadius: 5,
    margin: 5,
    width: 200,
    textAlign: "center",
  },
  bb5: {
    backgroundColor: colorScheme.primary,
  },
  btn2: {
    flex: 4,
    color: colorScheme.primaryFont,
    textAlign: "center",
    justifyContent: "center",
  },
  btn3: {
    backgroundColor: colorScheme.primaryAccent,
    flexDirection: "row",
    borderRadius: 5,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    margin: 5,
  },
  bb: {
    borderBottomColor: colorScheme.primaryFont,
    borderBottomWidth: 2,
    color: colorScheme.primaryFont,
  },
  ti: {
    backgroundColor: colorScheme.tertiaryAccent,
    height: 100,
    width: 200,
    borderRadius: 5,
    padding: 10,
    textAlignVertical: "top",
    margin: 5,
  },
  bb2: {
    textAlign: "center",
    backgroundColor: colorScheme.primaryAccent,
  },
  bb3: {
    textAlign: "center",
    backgroundColor: colorScheme.alert,
  },
});
