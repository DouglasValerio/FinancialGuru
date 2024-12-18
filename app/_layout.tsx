import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
  <Stack.Screen name="index" options={{ title: "Guru Financeiro" }}></Stack.Screen>
  <Stack.Screen name="financialAdvice" options={{ title: "Conselhos" }}></Stack.Screen>
</Stack>;
}
