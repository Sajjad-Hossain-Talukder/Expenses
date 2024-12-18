import { View, StyleSheet, Text } from "react-native";
import ExpenseOutput from "../components /ExpenseOutput";
import { ExpenseContext } from "../store/expense-context";
import { useContext } from "react";
import { Global } from "../constants/GlobalConstants";

function AllExpenses() {
  const expenseCtx = useContext(ExpenseContext);

  const RegList = (
    <ExpenseOutput expenses={expenseCtx.expenses} periodName="Total" />
  );
  const BlankList = (
    <View style={styles.containerBlank}>
      <Text style={styles.text}> No entry is found!!!</Text>
    </View>
  );
  const listCollection = expenseCtx.expenses.length == 0 ? BlankList : RegList;

  return <View style={styles.container}>{listCollection}</View>;
}

export default AllExpenses;

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
