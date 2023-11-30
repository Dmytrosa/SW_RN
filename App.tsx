import { StatusBar } from "expo-status-bar";
import { FavouritesProvider } from "./src/context.ts/favouritesContext";
import { MainScreen } from "./src/screens/MainScreen";
import { PersonScreen } from "./src/screens/PersonScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Person } from "./src/types/Person";
import { Film } from "./src/types/Film";
import { HeaderHomeButton } from "./src/components/HeaderButtons/HeaderHomeButton";
import { FilmScreen } from "./src/screens/FilmScreen";
import { Planet } from "./src/types/Planet";
import { FavoritesScreen } from "./src/screens/FavoritesScreen";
import { HeaderHearthButton } from "./src/components/HeaderButtons/HeaderHeartButton";
import { View } from "react-native";

export type StackParams = {
  Main: undefined;
  Favourites: undefined;
  Person: {
    object: Person;
  };
  Film: {
    object: Film;
  };
  Planet: {
    object: Planet;
  };
};

const Stack = createNativeStackNavigator<StackParams>();

export default function App() {
  return (
    <FavouritesProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            animation: "slide_from_bottom",
          }}
        >
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{
              headerTitle: "Star Wars guide",
              headerRight: () => <HeaderHearthButton />,
            }}
          />

          <Stack.Screen
            name="Favourites"
            component={FavoritesScreen}
            options={{
              headerTitle: "My Favourites",
              headerRight: () => (
                <View className="flex flex-row">
                  <HeaderHomeButton />
                </View>
              ),
            }}
          />

          <Stack.Screen
            name="Person"
            component={PersonScreen}
            options={{
              headerTitle: "Character",
              headerRight: () => <HeaderHomeButton />,
            }}
          />

          <Stack.Screen
            name="Film"
            component={FilmScreen}
            options={{
              headerTitle: "Movie",
              headerRight: () => <HeaderHomeButton />,
            }}
          />

        </Stack.Navigator>

        <StatusBar style="auto" />
      </NavigationContainer>
    </FavouritesProvider>
  );
}
