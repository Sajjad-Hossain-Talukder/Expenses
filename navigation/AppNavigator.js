import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabsNavigator } from "./BottomNavigator";
import { Global } from "../constants/GlobalConstants";
import { NavigationContainer } from "@react-navigation/native";
import ManageExpenses from "../screens/ManageExpenses";

export function AppNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Global.colors.primary500,
          },
          headerTintColor: Global.colors.white,
        }}
      >
        <Stack.Screen
          name={Global.screens.bottomTabs}
          component={BottomTabsNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={Global.screens.manage}
          component={ManageExpenses}
          options={{
            presentation: "modal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
