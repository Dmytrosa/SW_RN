import { View, Text, ScrollView } from "react-native";
import {
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { StackParams } from "../../App";
import {  useEffect, useState } from "react";
import {  showToast } from "../helpers/functions";
import { ErrorMessage } from "../types/ErrorMessage";
import { Container } from "../components/Container";
import { InfoCard } from "../components/InfoCard";
import { Screen } from "../types/Screen";
import { HearthButton } from "../components/HearthButton";
import { useFavouritesContext } from "../context.ts/favouritesContext";
import { InfoTableRow } from "../components/InfoTableRow";
import {  getPerson } from "../api/Graphql";
import { Person } from "../types/Person";

type Props = NativeStackScreenProps<StackParams, "Person">;

const textClass = "text-xl";

export const PersonScreen = ({ route }: Props) => {
  const {
    id,
  } = route.params.object;

  const [people, setPeople] = useState<Person>();
  const [isPersonLoad, setIsPersonLoad] = useState(false);


  const downloadData = async () => {
    setIsPersonLoad(false);

    try {
      const personData = await getPerson(id);
      setPeople(personData);
    } catch (error) {
      showToast(ErrorMessage.REQUEST);
    } finally {
      setIsPersonLoad(true);
    }
  };

  useEffect(() => {
    downloadData();
  }, []);

  const { addFavourite, removeFavourite, isInFavourites } =
    useFavouritesContext();

  const inFavourites = isInFavourites(id);

  const handleFavourite = () => {
    isInFavourites(id) ? removeFavourite(id) : addFavourite({ id });
  };
  return (
    <ScrollView>
     <Container>
        <View className="flex flex-row justify-between">
          <Text className="text-3xl mb-3">{people?.name}</Text>

          <View className="rounded-full">
            <HearthButton
              color="#f00"
              size={20}
              fill={inFavourites}
              onClick={handleFavourite}
            />
          </View>
        </View>

        <View className="flex flex-row flex-wrap items-center justify-between">
          <Text className={`${textClass} mr-2`}>
            Birth: {people?.birthYear}
            <Text className={textClass}>  {people?.homeworld?.name}</Text>
          </Text>
        </View>
    
      <Container>
        <Text className={`${textClass} font-bold mb-2`}>Body parameters:</Text>
        <InfoTableRow title="Height" value={people?.height + "cm"} />
        <InfoTableRow title="Mass" value={people?.mass + "kg"} />
      </Container>
      </Container>


      <InfoCard objects={ people?.filmConnection?.films} isLoading={!isPersonLoad}  to={Screen.FILM} title="Films:" />
    </ScrollView>
  );
};
