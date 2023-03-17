import { ScrollView, StyleSheet, Text, Image, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Calendar } from "react-native-calendars";
import { setDatesWithEvents, setDateSelected } from "../redux/actions";
import EventCard from "./eventCard";

function Calender() {
  const { calenderTrigger, datesWithEvents, eventList, dateSelected } =
    useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleDayPress(date) {
    console.log(date["dateString"]);
    dispatch(setDateSelected(date["dateString"]));
    var newDatesWithEvents = JSON.parse(JSON.stringify(datesWithEvents));
    for (const date in newDatesWithEvents) {
      newDatesWithEvents[date].selected = false;
    }
    if (newDatesWithEvents[date["dateString"]] === undefined) {
      newDatesWithEvents[date["dateString"]] = {
        selectedColor: "lightblue",
      };
    }
    newDatesWithEvents[date["dateString"]]["selected"] = true;
    dispatch(setDatesWithEvents(newDatesWithEvents));
  }
  return calenderTrigger === true ? (
    <>
      <View style={styles.view}>
        <Calendar
          style={styles.cal}
          onDayPress={(date) => handleDayPress(date)}
          markedDates={datesWithEvents}
        />
        <View style={styles.eventView}>
          <Text style={styles.bb}> Friday 3rd Mar 2023</Text>
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
    backgroundColor: "lightblue",
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
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 5,
  },
});
