import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

function HomePage() {
  const { homePageTrigger } = useSelector((state) => state.myReducer);

  return homePageTrigger === true ? (
    <>
      <ScrollView contentContainerStyle={styles.outer}>
        <View style={styles.view1}>
          <Text>shutup mehdi</Text>
        </View>
      </ScrollView>
    </>
  ) : (
    ""
  );
}

export default HomePage;

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "red",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "green",
  },
  view2: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "green",
  },
  outer: {
    flex: 1,
  },
});
