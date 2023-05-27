import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Calendar } from "react-native-calendars";
import colorScheme from "../../assets/functions/colors";
import EventCard from "./eventCard";
import AddEventModal from "./addEventModal";
import ViewEventModal from "./viewEvent";
import deepCopy from "../../assets/functions/deepCopy";
import {
  setDatesWithEvents,
  setDateSelected,
  setNewEventDate,
} from "../../redux/actions";

function CalendarPage() {
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
    colorTheme,
  } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleDayPress(date) {
    dispatch(setDateSelected(date["dateString"]));
    dispatch(setNewEventDate(date["dateString"]));
    var newDatesWithEvents = deepCopy(datesWithEvents);
    for (const date in newDatesWithEvents) {
      newDatesWithEvents[date].selected = false;
    }
    if (newDatesWithEvents[date["dateString"]] === undefined) {
      newDatesWithEvents[date["dateString"]] = {
        selectedColor: colorScheme[colorTheme].secondary,
      };
    }
    newDatesWithEvents[date["dateString"]]["selected"] = true;
    dispatch(setDatesWithEvents(newDatesWithEvents));
  }
  return currentPage === "Calendar" ? (
    <>
      <View style={styles[colorTheme].view}>
        <Calendar
          markingType="multi-dot"
          style={styles[colorTheme].cal}
          onDayPress={(date) => handleDayPress(date)}
          markedDates={datesWithEvents}
          theme={{
            calendarBackground: colorScheme[colorTheme].secondary,
            textSectionTitleColor: colorScheme[colorTheme].primaryFont,
            todayTextColor: colorScheme[colorTheme].primaryFont,
            dayTextColor: colorScheme[colorTheme].secondaryFont,
            arrowColor: colorScheme[colorTheme].accent,
            textDisabledColor: colorScheme[colorTheme].primary,
            monthTextColor: colorScheme[colorTheme].primaryFont,
          }}
        />
        <View style={styles[colorTheme].eventView}>
          <Text style={styles[colorTheme].bb}>
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
          <Text style={styles[colorTheme].sv}>No Scheduled Events</Text>
        ) : (
          <ScrollView style={styles[colorTheme].sv}>
            {eventList[dateSelected].map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </ScrollView>
        )}
      </View>
      <AddEventModal trigger={eventModalTrigger} />
      <ViewEventModal />
    </>
  ) : (
    ""
  );
}

export default CalendarPage;

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
      width: "90%",
      padding: 10,
    },
    bb: {
      borderBottomColor: colorScheme[theme].primaryFont,
      borderBottomWidth: 1,
      borderStyle: "solid",
      color: colorScheme[theme].primaryFont,
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
      backgroundColor: colorScheme[theme].tertiary,
      width: "90%",
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      marginBottom: 10,
      color: colorScheme[theme].primaryFont,
      padding: 5,
    },
  });
}
