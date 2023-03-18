import { StyleSheet, View, Text, Pressable } from "react-native";
function Header(props) {
  function handlePlusBtn() {
    //swich case function
    console.log("new thing");
  }
  return (
    <>
      <View style={styles.col}>
        <Text style={styles.cp}>Home</Text>
        <Pressable onPress={handlePlusBtn}>
          <Text style={styles.plusBtn}>+</Text>
        </Pressable>
      </View>
    </>
  );
}

export default Header;

const styles = StyleSheet.create({
  col: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  cp: {
    fontSize: 20,
    width: "80%",
    color: "orange",
    marginLeft: 30,
  },
  plusBtn: {
    fontSize: 30,
    color: "orange",
  },
});
