import { View, StyleSheet } from "react-native";
import ExpenseSummary from "./shared/ESummary";
import ExpenseList from "./shared/EList";
import { DUMMY_EXPENSES } from "../data/dummy-data";
import { Global } from "../constants/GlobalConstants";

function ExpenseOutput({ expenses, periodName }) {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} periodName={periodName} />
      <ExpenseList expenses={expenses} />
    </View>
  );
}

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 0,
    backgroundColor: Global.colors.primary700,
  },
});
