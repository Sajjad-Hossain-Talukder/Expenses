import { StyleSheet, View, Pressable, Text } from "react-native";
import { Global } from "../../constants/GlobalConstants";
import { getFormattedDate } from "../../utils/date";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ description, item }) {
  const navigation = useNavigation();
  function onPressHandler() {
    navigation.navigate(Global.screens.manage, { responseId: item.id });
  }
  return (
    <Pressable
      onPress={onPressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {item.description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(item.date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{item.amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: 6,
    marginVertical: 8,
    backgroundColor: Global.colors.primary500,
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: Global.colors.gray500,
    shadowRadius: 3,
    shadowOpacity: 0.4,
  },
  textBase: {
    color: Global.colors.primary50,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  amountContainer: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: Global.colors.primary50,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 100,
  },
  amount: {
    color: Global.colors.primary500,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
