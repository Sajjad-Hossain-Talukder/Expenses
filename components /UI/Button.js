import { StyleSheet, View, Pressable, Text } from "react-native";
import { Global } from "../../constants/GlobalConstants";

function Button({ children, mode, onPress, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: Global.colors.primary500,
  },
  buttonText: {
    color: Global.colors.white,
    textAlign: "center",
  },
  flat: {
    backgroundColor: "transparent",
  },
  flatText: {
    color: Global.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: Global.colors.primary100,
    borderRadius: 4,
  },
});
