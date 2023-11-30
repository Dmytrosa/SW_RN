import {
  View,
  ScrollView,
  Text
} from "react-native";
import { useEffect, useState } from "react";
import { Person } from "../types/Person";
import { PeopleTable } from "../components/PeopleTable/PeopleTable";
import { useFavouritesContext } from "../context.ts/favouritesContext";
import {
  showToast,
} from "../helpers/functions";
import { ErrorMessage } from "../types/ErrorMessage";
import { Container } from "../components/Container";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../App";
import { getPerson } from "../api/Graphql";

export const FavoritesScreen = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setLoading] = useState(false);

  const { isStorageError, favourites } = useFavouritesContext();

  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  if (isStorageError) {
    showToast(ErrorMessage.STORAGE);
  }

  const downloadData = async () => {
    setLoading(true);

    try {
      const peopleUrls :string[] = favourites.map((fav) => fav.id);
      const peopleFull =[]
        for(let i =0; i < peopleUrls.length; i++){
          peopleFull.push(await getPerson(peopleUrls[i]))
        }
      setPeople(peopleFull);
    } catch (error) {
      showToast(ErrorMessage.REQUEST);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    downloadData();
  }, [favourites]);



  return (
    <ScrollView>

      <Container>
        {favourites.length !== 0 ? (
            <View>
              <PeopleTable
                people={people}
                isLoading={isLoading}
              />
            </View>
        ) : (
          <>
            <Text className="text-2xl mb-6">No favourites yet.</Text>
          </>
        )}
      </Container>
    </ScrollView>
  );
};
