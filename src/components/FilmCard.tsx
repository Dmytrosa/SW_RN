import React from "react";
import {
  Text,
  View,
  TouchableNativeFeedback,
} from "react-native";
import { Container } from "./Container";
import { Film } from "../types/Film";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../App";
import { Screen } from "../types/Screen";
import { Loader } from "./Loader";

type Props = {
  objects: Film[] ;
  to: Screen;
  isLoading: boolean;
};


export const FilmCard = ({ objects, to, isLoading }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();


function truncateString(inputString: string): string {
    if (inputString.length <= 50) {
      return inputString;
    }
  
    const indexOfLineBreak = inputString.indexOf("\r\n", 50);
  
    if (indexOfLineBreak !== -1 && indexOfLineBreak <= 50) {
      return inputString.substring(0, indexOfLineBreak);
    }
  
    return inputString.substring(0, 50).concat("...");
  }
  return (
    <Container>
      {!isLoading && objects.length !== 0 ? (
        <View className="flex flex-row flex-wrap">
          {objects.map((object) => {
            
            return (
              <TouchableNativeFeedback
                key={object.id}
                onPress={() =>
                  navigation.push(to as any, { object })
                }>
<View className="bg-gray-300 rounded p-3 m-1 border-b-2 border-b-gray-500 flex justify-center items-center w-full">
    <Text className="text-lg font-bold">{object.title}</Text>
    <Text className="mt-2">Release: {object.releaseDate}</Text>
    <Text className="mt-2">{truncateString(object.openingCrawl)}</Text>
</View>
              </TouchableNativeFeedback>
            ); 
          })}
        </View>
      ) : (
        <></>
      )}

      {isLoading && (
        <Loader />
      )}
    </Container>
  );
};
