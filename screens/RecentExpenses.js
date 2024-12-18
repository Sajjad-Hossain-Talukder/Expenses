import { View, StyleSheet, Text } from "react-native";
import ExpenseOutput from "../components /ExpenseOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/expense-context";
import { getDateMinusSeven } from "../utils/date";
import BlankList from "../components /shared/BlankList";
import { Global } from "../constants/GlobalConstants";

function RecentExpenses() {
  const expenseCtx = useContext(ExpenseContext);
  const expenseOnLastSevenDays = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const daySevenDaysAgo = getDateMinusSeven(today, 7);
    return expense.date >= daySevenDaysAgo && expense.date <= today;
  });
  const RegList = (
    <ExpenseOutput periodName="Last 7 days" expenses={expenseOnLastSevenDays} />
  );
  const BList = (
    <View style={styles.containerBlank}>
      <Text style={styles.text}> No entry is found!!!</Text>
    </View>
  );
  const listCollection = expenseOnLastSevenDays.length == 0 ? BList : RegList;

  return <View style={styles.container}>{listCollection}</View>;
}

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  containerBlank: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Global.colors.primary700,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: Global.colors.white,
  },
});
