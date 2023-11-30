import { View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { useFavouritesContext } from "../context.ts/favouritesContext";
import { showToast } from "../helpers/functions";
import { ErrorMessage } from "../types/ErrorMessage";
import { getFilms, getPeople } from "../api/Graphql";
import { FilmCard } from "../components/FilmCard";
import { Screen } from "../types/Screen";
import { Film } from "../types/Film";
import { FavoritesScreen } from "./FavoritesScreen";
export const MainScreen = () => {

  const [films, setFilms] = useState<Film[]>([]);

  const [total, setTotal] = useState(0);
  const [isLoading, setLoading] = useState(false);


  const { isStorageError } = useFavouritesContext();

  if (isStorageError) {
    showToast(ErrorMessage.STORAGE);
  }

  const downloadData = async () => {
    setLoading(true);

    try {
      const fullInfoPeople = await getPeople()
      const fullInfoFilms = await getFilms()

      setFilms(fullInfoFilms.allFilms.films)
      setTotal(fullInfoPeople.allPeople.totalCount);
    } catch (error) {
      showToast(ErrorMessage.REQUEST);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    downloadData();
  }, []);


  return (
    <ScrollView>
<View >
    <FilmCard 
    isLoading={isLoading}
    to={Screen.FILM}
    objects={films}
    />
</View>
        <View>
       <FavoritesScreen/>
        </View>
    </ScrollView>
  );
};
