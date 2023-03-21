import { ScrollView, StyleSheet, Text, Image, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Calendar } from "react-native-calendars";
import {
  setDatesWithEvents,
  setDateSelected,
  setNewEventDate,
} from "../redux/actions";
import EventCard from "./eventCard";
import AddEventModal from "./addEventModal";
import SearchModal from "./searchModal";

function Calender() {
  const monthArray = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const {
    currentPage,
    datesWithEvents,
    eventList,
    dateSelected,
    eventModalTrigger,
  } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleDayPress(date) {
    console.log(date["dateString"]);
    dispatch(setDateSelected(date["dateString"]));
    dispatch(setNewEventDate(date["dateString"]));
    var newDatesWithEvents = JSON.parse(JSON.stringify(datesWithEvents));
    for (const date in newDatesWithEvents) {
      newDatesWithEvents[date].selected = false;
    }
    if (newDatesWithEvents[date["dateString"]] === undefined) {
      newDatesWithEvents[date["dateString"]] = {
        selectedColor: "orange",
      };
    }
    newDatesWithEvents[date["dateString"]]["selected"] = true;
    dispatch(setDatesWithEvents(newDatesWithEvents));
  }
  return currentPage === "Calender" ? (
    <>
      <View style={styles.view}>
        <Calendar
          style={styles.cal}
          onDayPress={(date) => handleDayPress(date)}
          markedDates={datesWithEvents}
        />
        <View style={styles.eventView}>
          <Text style={styles.bb}>
            {String(
              dateSelected.split("-")[2] +
                " " +
                monthArray[Number(dateSelected.split("-")[1])] +
                " " +
                dateSelected.split("-")[0]
            )}
          </Text>
        </View>
        {eventList[dateSelected] == undefined ? (
          <Text style={styles.sv}>No Scheduled Events</Text>
        ) : (
          <ScrollView style={styles.sv}>
            {eventList[dateSelected].map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </ScrollView>
        )}
      </View>
      <AddEventModal trigger={eventModalTrigger} />
    </>
  ) : (
    ""
  );
}

export default Calender;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
  },
  cal: {
    width: 300,
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  eventView: {
    backgroundColor: "orange",
    width: "90%",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bb: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  na: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    margin: 20,
  },
  sv: {
    textAlign: "center",
    backgroundColor: "white",
    width: "90%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 10,
  },
});
