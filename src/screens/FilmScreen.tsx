import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  View
} from "react-native";
import { Screen } from "../types/Screen";
import { StackParams } from "../../App";
import { Container } from "../components/Container";
import { InfoCard } from "../components/InfoCard";
import { showToast } from "../helpers/functions";
import { ErrorMessage } from "../types/ErrorMessage";
import { Person } from "../types/Person";
import { Film } from "../types/Film";
import { getFilm } from "../api/Graphql";

type Props = NativeStackScreenProps<StackParams, "Film">;

const textClass = "text-xl";

export const FilmScreen = ({ route }: Props) => {
  const {
    id,
    title,
  } = route.params.object;

  const [films, setFilms] = useState<Film>();
  const [isLoading, setIsLoading] = useState(true);



  const downloadData = async () => {
    setIsLoading(true);

    try {
      const filmData = await getFilm(id);
      setFilms(filmData);
    } catch (error) {
      showToast(ErrorMessage.REQUEST);
    } finally {
      setTimeout(()=>{setIsLoading(false)}, 0)
    }
  };

  useEffect(() => {
    downloadData();
  }, []);

 
  return (
    <ScrollView>
      <Container>
        <View className="p-2  bg-gray-100 flex flex-column justify-between flex-wrap mb-3">
          <Text className="text-3xl">{title}</Text>
          <Text className={textClass}>Release: {films?.releaseDate}</Text>
          <View className="w-full flex justify-center items-center bg-black">
            <Text
              className="p-3 m-1 text-center text-yellow-300 animated-text"
            >
              {films?.openingCrawl}
            </Text>
            
          </View>
        </View>
        <Text className={textClass} style ={{paddingLeft: 15, paddingBottom: 10}}>species: {films?.speciesConnection.totalCount}</Text> 
        <Text className={textClass} style ={{paddingLeft: 15, paddingBottom: 10}}>vehicles: {films?.vehicleConnection.totalCount}</Text>
         {/* <Text className={textClass} style ={{paddingLeft: 15, paddingBottom: 5}}>planets: {films?.planetConnection.totalCount}</Text> */}
      </Container>
      
      
      {isLoading ? <></>:<InfoCard  objects={ films?.characterConnection.characters } to={Screen.PERSON} title="Characters:" isLoading={isLoading}  />}
    </ScrollView>
  );
};
