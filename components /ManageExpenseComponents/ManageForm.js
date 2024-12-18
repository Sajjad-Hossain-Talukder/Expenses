import { Text, StyleSheet, View } from "react-native";
import Input from "./Input";
import { Global } from "../../constants/GlobalConstants";
import Button from "../UI/Button";
import { useState } from "react";

function ManageForm({ isEditing, onCancel, onSubmit, selectedExpense }) {
  const [inputValues, setInputValues] = useState({
    amount: {
      value: selectedExpense ? selectedExpense.amount.toString() : "",
      isvalid: true,
    },
    date: {
      value: selectedExpense
        ? selectedExpense.date.toISOString().slice(0, 10)
        : "",
      isvalid: true,
    },
    description: {
      value: selectedExpense ? selectedExpense.description : "",
      isvalid: true,
    },
  });

  const [formIsInvalid, setFormIsInvalid] = useState(
    !(
      inputValues.amount.isvalid &&
      inputValues.date.isvalid &&
      inputValues.description.isvalid
    )
  );

  const onChangeTextHandler = (inputIdentifier, enteredValues) => {
    console.log(inputIdentifier, enteredValues);
    setInputValues((currentInput) => {
      return {
        ...currentInput,
        [inputIdentifier]: {
          value: enteredValues,
          isvalid: true,
        },
      };
    });

    setFormIsInvalid(
      !(
        inputValues.amount.isvalid &&
        inputValues.date.isvalid &&
        inputValues.description.isvalid
      )
    );
  };

  const submitHandler = () => {
    const currentObject = {
      amount: +inputValues.amount.value,
      date: new Date(inputValues.date.value),
      description: inputValues.description.value,
    };
    const amountIsValid =
      !isNaN(currentObject.amount) && currentObject.amount > 0;
    const dateIsValid = currentObject.date.toString() !== "Invalid Date";
    const descriptionIsValid = currentObject.description.trim().length > 0;

    setFormIsInvalid(!(amountIsValid && dateIsValid && descriptionIsValid));
    //console.log("formIsInvalid :", formIsInvalid);
    if (!(amountIsValid && dateIsValid && descriptionIsValid)) {
      setInputValues((currentInput) => {
        return {
          amount: { value: currentInput.amount.value, isvalid: amountIsValid },
          date: { value: currentInput.date.value, isvalid: dateIsValid },
          description: {
            value: currentInput.description.value,
            isvalid: descriptionIsValid,
          },
        };
      });
      return;
    }
    onSubmit(currentObject);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.upperContainer}>
        <Input
          style={styles.rowStyle}
          label="Amount"
          invalid={inputValues.amount.isvalid}
          inputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: onChangeTextHandler.bind(this, "amount"),
            value: inputValues.amount.value,
          }}
        />
        <Input
          style={styles.rowStyle}
          label="Date"
          invalid={inputValues.date.isvalid}
          inputConfig={{
            placeholder: "YYYY:MM:DD",
            maxLength: 10,
            onChangeText: onChangeTextHandler.bind(this, "date"),
            value: inputValues.date.value,
          }}
        />
      </View>
      <Input
        label="Description"
        invalid={inputValues.description.isvalid}
        inputConfig={{
          multiline: true,
          autoCorrect: false,
          onChangeText: onChangeTextHandler.bind(this, "description"),
          value: inputValues.description.value,
        }}
      />

      {formIsInvalid && (
        <Text style={styles.error}>
          Invalid Input. Please check your entered input!!
        </Text>
      )}
      <View style={styles.buttons}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
}
export default ManageForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Global.colors.white,
    textAlign: "center",
    marginVertical: 24,
  },
  upperContainer: {
    flexDirection: "row",
  },
  rowStyle: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  button: {
    marginHorizontal: 8,
    minWidth: 120,
  },
  error: {
    color: Global.colors.error500,
    textAlign: "center",
    fontSize: 14,
    marginVertical: 10,
  },
});
