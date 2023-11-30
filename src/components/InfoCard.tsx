import React from "react";
import {
  Text,
  View,
  TouchableNativeFeedback,
} from "react-native";
import { Container } from "./Container";
import { Film } from "../types/Film";
import { Person } from "../types/Person";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../App";
import { Screen } from "../types/Screen";
import { Planet } from "../types/Planet";
import { Loader } from "./Loader";

const textClass = "text-xl";

export const InfoCard = ({ objects, to, title, isLoading }: any) => {

  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

function isPerson(object: any): object is Person {
  return "name" in object;
}

function isFilm(object: any): object is Film {
  return "title" in object;
}

function isPlanet(object: any): object is Planet {
  return "name" in object;
}

  return (
    <Container>
      <Text className={`${textClass} font-bold mb-2`}>{`${
        title ?? `${to}s:`
      }`}</Text>

      {isLoading  === false ? (
        <View className="flex flex-row flex-wrap">
          {objects.map((object: any) => {
            
            return (
              <TouchableNativeFeedback
                key={object.id}
                onPress={() =>
                  navigation.push(to as any, { object })
                }
              >
                <View className="bg-gray-300 rounded py-1 px-3 m-1 border-b-2 border-b-gray-500">
                  <Text> {isPerson(object)
                  ? object.name
                  : isFilm(object)
                  ? object.title
                  : isPlanet(object)
                  ? object.name
                  : ""}</Text>
                </View>
              </TouchableNativeFeedback>
            ); 
          })}
        </View>
      ) : (
        <View>
          <Text>No {(title ? title.slice(0, -1) : `${to}s`).toLowerCase()}</Text>
        </View>
      )}

      {isLoading && (
        <Loader />
      )}
    </Container>
  );
};
