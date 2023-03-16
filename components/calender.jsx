import { ScrollView, StyleSheet, Text, Image, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Calendar } from "react-native-calendars";
import { setDatesWithEvents } from "../redux/actions";

function Calender(props) {
  const { calenderTrigger } = useSelector((state) => state.myReducer);
  const { datesWithEvents } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  function handleDayPress(date) {
    console.log(date);

    var newDatesWithEvents = { ...datesWithEvents };

    // (newDatesWithEvents[date["dateString"]] = {
    //   marked: true,
    //   selected: true,
    //   dotColor: "white",
    //   selectedColor: "lightblue",
    //   selectedTextColor: "black",
    // }),
    newDatesWithEvents[date["dateString"]]["marked"] = false;
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
});
