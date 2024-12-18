import { Text, FlatList } from "react-native";
import ExpenseItem from "./EItem";

const renderExpenses = (itemData) => {
  return (
    <ExpenseItem description={itemData.item.description} item={itemData.item} />
  );
};

function ExpenseList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenses}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default ExpenseList;
