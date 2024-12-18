import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Global } from "../constants/GlobalConstants";
import RecentExpenses from "../screens/RecentExpenses";
import AllExpenses from "../screens/AllExpenses";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../components /shared/IconButton";
import { useNavigation } from "@react-navigation/native";

export function BottomTabsNavigator() {
  const BottomTabs = createBottomTabNavigator();
  const navigation = useNavigation();

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Global.colors.primary500,
        },
        tabBarStyle: {
          backgroundColor: Global.colors.primary500,
        },
        headerTintColor: Global.colors.white,
        tabBarActiveTintColor: Global.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            name="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate(Global.screens.manage);
            }}
          />
        ),
      }}
    >
      <BottomTabs.Screen
        name={Global.screens.recent}
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name={Global.screens.all}
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
