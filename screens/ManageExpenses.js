import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "../components /shared/IconButton";
import { Global } from "../constants/GlobalConstants";
import { useContext } from "react";
import { ExpenseContext } from "../store/expense-context";
import ManageForm from "../components /ManageExpenseComponents/ManageForm";

function ManageExpenses({ navigation, route }) {
  const responseId = route.params?.responseId;
  const isEditing = !!responseId;

  const expenseCtx = useContext(ExpenseContext);
  const selectedExp = expenseCtx.expenses.find(
    (expense) => expense.id == responseId
  );

  const onCancel = () => {
    console.log("Cancel Handler Called!!!");
    navigation.goBack();
  };

  const onSubmit = (currentInputObject) => {
    console.log(currentInputObject);
    if (isEditing) {
      expenseCtx.updateExpense(responseId, currentInputObject);
    } else {
      expenseCtx.addExpense(currentInputObject);
    }
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Response" : "Add Response",
    });
  }, [navigation, isEditing]);

  const deleteHandler = () => {
    expenseCtx.removeExpense(responseId);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ManageForm
        isEditing={isEditing}
        onCancel={onCancel}
        onSubmit={onSubmit}
        selectedExpense={selectedExp}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            size={36}
            color={Global.colors.error500}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Global.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopColor: Global.colors.accent500,
    borderTopWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 8,
    minWidth: 120,
  },
});
