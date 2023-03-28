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
            calendarBackground: colorScheme[colorTheme].primaryAccent,
            textSectionTitleColor: colorScheme[colorTheme].primaryFont,
            todayTextColor: colorScheme[colorTheme].primaryFont,
            dayTextColor: colorScheme[colorTheme].secondaryFont,
            arrowColor: colorScheme[colorTheme].primary,
            textDisabledColor: colorScheme[colorTheme].tertiaryAccent,
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
styles["dark"] = StyleSheet.create({
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
    backgroundColor: colorScheme["dark"].secondary,
    width: "90%",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bb: {
    borderBottomColor: colorScheme["dark"].primaryFont,
    borderBottomWidth: 1,
    borderStyle: "solid",
    color: colorScheme["dark"].primaryFont,
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
    backgroundColor: colorScheme["dark"].tertiary,
    width: "90%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 10,
    color: colorScheme["dark"].primaryFont,
    padding: 5,
  },
});
styles["light"] = StyleSheet.create({
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
    backgroundColor: colorScheme["light"].secondary,
    width: "90%",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bb: {
    borderBottomColor: colorScheme["light"].primaryFont,
    borderBottomWidth: 1,
    borderStyle: "solid",
    color: colorScheme["light"].primaryFont,
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
    backgroundColor: colorScheme["light"].tertiary,
    width: "90%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 10,
    color: colorScheme["light"].primaryFont,
    padding: 5,
  },
});
styles["blue"] = StyleSheet.create({
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
    backgroundColor: colorScheme["blue"].secondary,
    width: "90%",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bb: {
    borderBottomColor: colorScheme["blue"].primaryFont,
    borderBottomWidth: 1,
    borderStyle: "solid",
    color: colorScheme["blue"].primaryFont,
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
    backgroundColor: colorScheme["blue"].tertiary,
    width: "90%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 10,
    color: colorScheme["blue"].primaryFont,
    padding: 5,
  },
});
styles["purple"] = StyleSheet.create({
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
    backgroundColor: colorScheme["purple"].secondary,
    width: "90%",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bb: {
    borderBottomColor: colorScheme["purple"].primaryFont,
    borderBottomWidth: 1,
    borderStyle: "solid",
    color: colorScheme["purple"].primaryFont,
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
    backgroundColor: colorScheme["purple"].tertiary,
    width: "90%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 10,
    color: colorScheme["purple"].primaryFont,
    padding: 5,
  },
});
