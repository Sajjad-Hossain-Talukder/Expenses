import { StyleSheet, TextInput, View, Text } from "react-native";
import { Global } from "../../constants/GlobalConstants";

function Input({ label, invalid, style, inputConfig }) {
  let inputStyles = [styles.input];

  if (inputConfig && inputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (!invalid) {
    inputStyles.push(styles.inputError);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, !invalid && styles.labelError]}>{label}</Text>
      <TextInput {...inputConfig} style={inputStyles} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    marginHorizontal: 6,
  },
  label: {
    fontSize: 14,
    color: Global.colors.primary100,
    marginBottom: 5,
  },
  input: {
    fontSize: 18,
    backgroundColor: Global.colors.primary100,
    borderRadius: 8,
    padding: 6,
    color: Global.colors.primary700,
  },
  inputMultiline: {
    minHeight: 150,
    textAlignVertical: "top",
  },
  labelError: {
    color: Global.colors.error500,
  },
  inputError: {
    backgroundColor: Global.colors.error50,
  },
});
