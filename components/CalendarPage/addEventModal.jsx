import { useSelector, useDispatch } from "react-redux";
import colorScheme from "../../assets/functions/colors";
import deepCopy from "../../assets/functions/deepCopy";
import DateTimePicker from "@react-native-community/datetimepicker";
import SearchModal from "./searchModal";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import {
  setDatePickerTrigger,
  setTimePickerTrigger,
  setEventModalTrigger,
  setNewEventDate,
  setNewEventTime,
  setDatesWithEvents,
  setEventList,
  setNewEventDesc,
  setSearchTrigger,
} from "../../redux/actions";

function AddEventModal({ trigger }) {
  const {
    datePickerTrigger,
    timePickerTrigger,
    newEventDate,
    newEventTime,
    newEventDesc,
    newEventItem,
    datesWithEvents,
    eventList,
    colorTheme,
  } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleCancel() {
    dispatch(setEventModalTrigger(false));
  }

  function handleDatePickerTrigger() {
    dispatch(setDatePickerTrigger(true));
  }

  function handleTimePickerTrigger() {
    dispatch(setTimePickerTrigger(true));
  }

  function handleDateChange(event, selectedDate) {
    dispatch(setDatePickerTrigger(false));
    dispatch(setNewEventDate(formatDate(selectedDate)));
  }

  function handleTimeChange(event, selectedTime) {
    dispatch(setTimePickerTrigger(false));
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

  function handleSave() {
    if (newEventItem !== "") {
      var newTitle = "";
      if (newEventItem["Vender:"] !== undefined) {
        newTitle = String(
          newEventItem["Vender:"] + " " + newEventItem["Product Name/Title:"]
        );
      } else {
        newTitle = newEventItem["Name:"];
      }
      dispatch(setEventModalTrigger(false));
      var newDatesWithEvents = deepCopy(datesWithEvents);
      if (newDatesWithEvents[newEventDate] !== undefined) {
        if (newDatesWithEvents[newEventDate].dots !== undefined) {
          newDatesWithEvents = {
            ...newDatesWithEvents,
            [newEventDate]: {
              ...newDatesWithEvents[newEventDate],
              dots: [
                ...newDatesWithEvents[newEventDate].dots,
                { color: colorScheme[colorTheme].primary },
              ],
            },
          };
        } else {
          newDatesWithEvents = {
            ...newDatesWithEvents,
            [newEventDate]: {
              ...newDatesWithEvents[newEventDate],
              dots: [{ color: colorScheme[colorTheme].primary }],
            },
          };
        }
      } else {
        newDatesWithEvents = {
          ...newDatesWithEvents,
          [newEventDate]: {
            marked: true,
            selected: false,
            dots: [{ color: colorScheme[colorTheme].primary }],
            selectedColor: colorScheme[colorTheme].primary,
            selectedTextColor: "black",
          },
        };
      }
      dispatch(setDatesWithEvents(newDatesWithEvents));
      var newEventList = deepCopy(eventList);
      if (newEventDate in newEventList) {
        newEventList = {
          ...newEventList,
          [newEventDate]: [
            ...newEventList[newEventDate],
            {
              Title: newTitle,
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
              Title: newTitle,
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
    dispatch(setSearchTrigger(true));
  }
  return trigger == true ? (
    <>
      <Modal transparent={true} visible={true} animationType="fade">
        <View style={styles[colorTheme].card}>
          <View style={styles[colorTheme].card2}>
            <Pressable style={styles[colorTheme].btn3} onPress={handleSelectAP}>
              {newEventItem !== "" ? (
                <>
                  <Image
                    style={styles[colorTheme].img}
                    source={newEventItem["Icon"]}
                  />
                  <Text style={styles[colorTheme].btn2}>
                    {newEventItem["Vender:"] !== undefined
                      ? String(
                          newEventItem["Vender:"] +
                            " " +
                            newEventItem["Product Name/Title:"]
                        )
                      : newEventItem["Name:"]}
                  </Text>
                </>
              ) : (
                <Text style={styles[colorTheme].btn2}>
                  select appliance/person
                </Text>
              )}
            </Pressable>
            <View>
              <Text style={styles[colorTheme].fil}>Select Date:</Text>
              <TouchableWithoutFeedback onPress={handleDatePickerTrigger}>
                <View>
                  <Text style={styles[colorTheme].btn}>
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
              {datePickerTrigger && (
                <DateTimePicker
                  value={new Date(newEventDate)}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
              )}
            </View>
            <View>
              <Text style={styles[colorTheme].fil}>Select Time:</Text>

              <TouchableWithoutFeedback onPress={handleTimePickerTrigger}>
                <View>
                  <Text style={styles[colorTheme].btn}>{newEventTime}</Text>
                </View>
              </TouchableWithoutFeedback>
              {timePickerTrigger && (
                <DateTimePicker
                  value={new Date()}
                  mode="time"
                  display="default"
                  onChange={handleTimeChange}
                />
              )}
            </View>
            <Text style={styles[colorTheme].bb}>Description</Text>
            <TextInput
              onChangeText={(text) => dispatch(setNewEventDesc(text))}
              style={styles[colorTheme].ti}
              placeholder="enter description..."
              multiline={true}
              numberOfLines={4}
            ></TextInput>
            <Pressable onPress={handleSave}>
              <Text style={[styles[colorTheme].btn, styles[colorTheme].bb2]}>
                SAVE
              </Text>
            </Pressable>
            <Pressable onPress={handleCancel}>
              <Text style={[styles[colorTheme].btn, styles[colorTheme].bb5]}>
                CANCEL
              </Text>
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
    img: {
      height: "100%",
      opacity: 1,
      resizeMode: "contain",
      flex: 1,
    },
    fil: { color: colorScheme[theme].primaryFont },
    card: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    card2: {
      backgroundColor: colorScheme[theme].secondary,
      width: "70%",
      height: 400,
      borderRadius: 10,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderColor: colorScheme[theme].primaryFont,
      borderWidth: 2,
    },
    btn: {
      backgroundColor: colorScheme[theme].primary,
      color: colorScheme[theme].primaryFont,
      padding: 5,
      borderRadius: 5,
      margin: 5,
      width: 200,
      textAlign: "center",
    },
    bb5: {
      backgroundColor: colorScheme[theme].primary,
    },
    btn2: {
      flex: 4,
      color: colorScheme[theme].primaryFont,
      textAlign: "center",
      justifyContent: "center",
    },
    btn3: {
      backgroundColor: colorScheme[theme].accent,
      flexDirection: "row",
      borderRadius: 5,
      width: 200,
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
      margin: 5,
    },
    bb: {
      borderBottomColor: colorScheme[theme].primaryFont,
      borderBottomWidth: 2,
      color: colorScheme[theme].primaryFont,
    },
    ti: {
      backgroundColor: colorScheme[theme].primary,
      height: 100,
      width: 200,
      borderRadius: 5,
      padding: 10,
      textAlignVertical: "top",
      margin: 5,
    },
    bb2: {
      textAlign: "center",
      backgroundColor: colorScheme[theme].accent,
    },
    bb3: {
      textAlign: "center",
      backgroundColor: colorScheme[theme].accent,
    },
  });
}
