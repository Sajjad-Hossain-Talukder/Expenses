import { StatusBar } from "expo-status-bar";
import { AppNavigator } from "./navigation/AppNavigator";
import ExpenseContextProvider from "./store/expense-context";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpenseContextProvider>
        <AppNavigator />
      </ExpenseContextProvider>
    </>
  );
}
