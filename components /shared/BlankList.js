import { View, Text, StyleSheet } from "react-native";
import { Global } from "../../constants/GlobalConstants";

function BlankList() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> No entry is found!!!</Text>
    </View>
  );
}

export default BlankList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
  },
  text: {
    fontSize: 16,
    color: Global.colors.white,
  },
});
