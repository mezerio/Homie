import { ScrollView, StyleSheet, Text, Image, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Calendar } from "react-native-calendars";

function Calender(props) {
  const { calenderTrigger } = useSelector((state) => state.myReducer);

  return calenderTrigger === true ? (
    <>
      <ScrollView>
        <View style={styles.view}>
          <Calendar />
        </View>
      </ScrollView>
    </>
  ) : (
    ""
  );
}

export default Calender;

const styles = StyleSheet.create({
  img: {
    height: "50%",
    aspectRatio: 1,
  },
  view: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
