import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  setIndexOfViewedAppliance,
  setViewApplianceVisible,
} from "../redux/actions";
import home from "/Users/maazvali/Documents/coding/Github Projects/Homie/assets/img/homeImg.png";

function ApplianceCard({ appliance, index }) {
  const { viewApplianceTrigger } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();
  function handleOpenApplianceDetails() {
    dispatch(setViewApplianceVisible(!viewApplianceTrigger));
    dispatch(setIndexOfViewedAppliance(index));
  }
  return (
    <Pressable onPress={handleOpenApplianceDetails}>
      <View style={styles.card}>
        <Image style={styles.img} source={home} />
        <View style={styles.col}>
          <Text>Vender: {appliance["Vender:"]}</Text>
          <Text>Product Name/Title: {appliance["Product Name/Title:"]}</Text>
          <Text>Model Number: {appliance["Model Number:"]}</Text>
          <Text>Serial Number: {appliance["Serial Number:"]}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ApplianceCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    width: 300,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  img: {
    flex: 1,
    aspectRatio: 1,
    margin: 5,
  },
  col: {
    flex: 5,
  },
});
