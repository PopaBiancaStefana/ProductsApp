import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="index"/>
      <Stack.Screen
        name="details"
        options={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack>
  );
}