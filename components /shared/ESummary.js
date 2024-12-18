import { View, Text, StyleSheet } from "react-native";
import { Global } from "../../constants/GlobalConstants";

function ExpenseSummary({ expenses, periodName }) {
  const totalExpenses = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}> {periodName} </Text>
      <Text style={styles.total}> ${totalExpenses.toFixed(2)}</Text>
    </View>
  );
}

export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Global.colors.primary50,
  },
  period: {
    fontSize: 12,
    color: Global.colors.primary400,
  },
  total: {
    fontSize: 16,
    fontWeight: "bold",
    color: Global.colors.primary500,
  },
});
