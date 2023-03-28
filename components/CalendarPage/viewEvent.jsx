import { useSelector, useDispatch } from "react-redux";
import deepCopy from "../../assets/functions/deepCopy";
import DateTimePicker from "@react-native-community/datetimepicker";
import SearchModal from "./searchModal";
import colorScheme from "../../assets/functions/colors";
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
  setNewEventDate,
  setNewEventTime,
  setDatesWithEvents,
  setEventList,
  setNewEventDesc,
  setViewEventTrigger,
} from "../../redux/actions";

function ViewEventModal() {
  const {
    viewEventTrigger,
    indexOfViewedAppliance,
    datePickerTrigger,
    timePickerTrigger,
    dateSelected,
    datesWithEvents,
    eventList,
    colorTheme,
  } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleCancel() {
    dispatch(setViewEventTrigger(false));
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

  function handleDelete() {
    dispatch(setViewEventTrigger(false));
    var newEventList = deepCopy(eventList);
    newEventList[dateSelected].splice(indexOfViewedAppliance, 1);
    dispatch(setEventList(newEventList));
    var newDatesWithEvents = deepCopy(datesWithEvents);
    newDatesWithEvents[dateSelected].dots.splice(0, 1);
    dispatch(setDatesWithEvents(newDatesWithEvents));
  }
  return viewEventTrigger == true ? (
    <>
      <Modal transparent={true} visible={true} animationType="fade">
        <View style={styles[colorTheme].card}>
          <View style={styles[colorTheme].card2}>
            <Pressable style={styles[colorTheme].btn3}>
              <Image
                style={styles[colorTheme].img}
                source={
                  eventList[dateSelected][indexOfViewedAppliance]["Item"][
                    "Icon"
                  ]
                }
              />
              <Text style={styles[colorTheme].btn2}>
                {eventList[dateSelected][indexOfViewedAppliance]["Title"]}
              </Text>
            </Pressable>
            <View>
              <Text style={styles[colorTheme].fil}>Date:</Text>
              <TouchableWithoutFeedback>
                <View>
                  <Text style={styles[colorTheme].btn}>{dateSelected}</Text>
                </View>
              </TouchableWithoutFeedback>
              {datePickerTrigger && (
                <DateTimePicker
                  value={dateSelected}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
              )}
            </View>
            <View>
              <Text style={styles[colorTheme].fil}>Time:</Text>

              <TouchableWithoutFeedback>
                <View>
                  <Text style={styles[colorTheme].btn}>
                    {eventList[dateSelected][indexOfViewedAppliance]["Time"]}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              {timePickerTrigger && (
                <DateTimePicker
                  value={new Date()}
                  //   add selected event time
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
              placeholder={
                eventList[dateSelected][indexOfViewedAppliance]["Desc"]
              }
              multiline={true}
              numberOfLines={4}
            >
              {eventList[dateSelected][indexOfViewedAppliance]["Desc"]}
            </TextInput>

            <Pressable onPress={handleCancel}>
              <Text style={[styles[colorTheme].btn, styles[colorTheme].bb2]}>
                CANCEL
              </Text>
            </Pressable>
            <Pressable onPress={handleDelete}>
              <Text style={[styles[colorTheme].btn, styles[colorTheme].bb3]}>
                DELETE
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

export default ViewEventModal;

const styles = {};
styles["dark"] = StyleSheet.create({
  img: {
    height: "100%",
    opacity: 1,
    resizeMode: "contain",
    flex: 1,
  },
  fil: { color: colorScheme["dark"].primaryFont },
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  card2: {
    backgroundColor: colorScheme["dark"].secondary,
    width: "70%",
    height: 400,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colorScheme["dark"].primaryFont,
    borderWidth: 2,
  },
  btn: {
    backgroundColor: colorScheme["dark"].primary,
    color: colorScheme["dark"].primaryFont,
    padding: 5,
    borderRadius: 5,
    margin: 1,
    width: 200,
    textAlign: "center",
  },
  btn2: {
    flex: 4,
    color: colorScheme["dark"].primaryFont,
    textAlign: "center",
    justifyContent: "center",
  },
  btn3: {
    backgroundColor: colorScheme["dark"].primaryAccent,
    flexDirection: "row",
    borderRadius: 5,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    margin: 5,
  },
  bb: {
    borderBottomColor: colorScheme["dark"].primaryFont,
    borderBottomWidth: 2,
    color: colorScheme["dark"].primaryFont,
  },
  ti: {
    backgroundColor: colorScheme["dark"].tertiaryAccent,
    height: 100,
    width: 200,
    borderRadius: 5,
    padding: 10,
    textAlignVertical: "top",
    margin: 5,
    color: colorScheme["dark"].primaryFont,
  },
  bb2: {
    textAlign: "center",
    backgroundColor: colorScheme["dark"].primaryAccent,
  },
  bb3: {
    textAlign: "center",
    backgroundColor: colorScheme["dark"].alert,
  },
});
styles["light"] = StyleSheet.create({
  img: {
    height: "100%",
    opacity: 1,
    resizeMode: "contain",
    flex: 1,
  },
  fil: { color: colorScheme["light"].primaryFont },
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  card2: {
    backgroundColor: colorScheme["light"].secondary,
    width: "70%",
    height: 400,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colorScheme["light"].primaryFont,
    borderWidth: 2,
  },
  btn: {
    backgroundColor: colorScheme["light"].primary,
    color: colorScheme["light"].primaryFont,
    padding: 5,
    borderRadius: 5,
    margin: 1,
    width: 200,
    textAlign: "center",
  },
  btn2: {
    flex: 4,
    color: colorScheme["light"].primaryFont,
    textAlign: "center",
    justifyContent: "center",
  },
  btn3: {
    backgroundColor: colorScheme["light"].primaryAccent,
    flexDirection: "row",
    borderRadius: 5,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    margin: 5,
  },
  bb: {
    borderBottomColor: colorScheme["light"].primaryFont,
    borderBottomWidth: 2,
    color: colorScheme["light"].primaryFont,
  },
  ti: {
    backgroundColor: colorScheme["light"].tertiaryAccent,
    height: 100,
    width: 200,
    borderRadius: 5,
    padding: 10,
    textAlignVertical: "top",
    margin: 5,
    color: colorScheme["light"].primaryFont,
  },
  bb2: {
    textAlign: "center",
    backgroundColor: colorScheme["light"].primaryAccent,
  },
  bb3: {
    textAlign: "center",
    backgroundColor: colorScheme["light"].alert,
  },
});
styles["blue"] = StyleSheet.create({
  img: {
    height: "100%",
    opacity: 1,
    resizeMode: "contain",
    flex: 1,
  },
  fil: { color: colorScheme["blue"].primaryFont },
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  card2: {
    backgroundColor: colorScheme["blue"].secondary,
    width: "70%",
    height: 400,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colorScheme["blue"].primaryFont,
    borderWidth: 2,
  },
  btn: {
    backgroundColor: colorScheme["blue"].primary,
    color: colorScheme["blue"].primaryFont,
    padding: 5,
    borderRadius: 5,
    margin: 1,
    width: 200,
    textAlign: "center",
  },
  btn2: {
    flex: 4,
    color: colorScheme["blue"].primaryFont,
    textAlign: "center",
    justifyContent: "center",
  },
  btn3: {
    backgroundColor: colorScheme["blue"].primaryAccent,
    flexDirection: "row",
    borderRadius: 5,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    margin: 5,
  },
  bb: {
    borderBottomColor: colorScheme["blue"].primaryFont,
    borderBottomWidth: 2,
    color: colorScheme["blue"].primaryFont,
  },
  ti: {
    backgroundColor: colorScheme["blue"].tertiaryAccent,
    height: 100,
    width: 200,
    borderRadius: 5,
    padding: 10,
    textAlignVertical: "top",
    margin: 5,
    color: colorScheme["blue"].primaryFont,
  },
  bb2: {
    textAlign: "center",
    backgroundColor: colorScheme["blue"].primaryAccent,
  },
  bb3: {
    textAlign: "center",
    backgroundColor: colorScheme["blue"].alert,
  },
});
styles["purple"] = StyleSheet.create({
  img: {
    height: "100%",
    opacity: 1,
    resizeMode: "contain",
    flex: 1,
  },
  fil: { color: colorScheme["purple"].primaryFont },
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  card2: {
    backgroundColor: colorScheme["purple"].secondary,
    width: "70%",
    height: 400,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colorScheme["purple"].primaryFont,
    borderWidth: 2,
  },
  btn: {
    backgroundColor: colorScheme["purple"].primary,
    color: colorScheme["purple"].primaryFont,
    padding: 5,
    borderRadius: 5,
    margin: 1,
    width: 200,
    textAlign: "center",
  },
  btn2: {
    flex: 4,
    color: colorScheme["purple"].primaryFont,
    textAlign: "center",
    justifyContent: "center",
  },
  btn3: {
    backgroundColor: colorScheme["purple"].primaryAccent,
    flexDirection: "row",
    borderRadius: 5,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    margin: 5,
  },
  bb: {
    borderBottomColor: colorScheme["purple"].primaryFont,
    borderBottomWidth: 2,
    color: colorScheme["purple"].primaryFont,
  },
  ti: {
    backgroundColor: colorScheme["purple"].tertiaryAccent,
    height: 100,
    width: 200,
    borderRadius: 5,
    padding: 10,
    textAlignVertical: "top",
    margin: 5,
    color: colorScheme["purple"].primaryFont,
  },
  bb2: {
    textAlign: "center",
    backgroundColor: colorScheme["purple"].primaryAccent,
  },
  bb3: {
    textAlign: "center",
    backgroundColor: colorScheme["purple"].alert,
  },
});
