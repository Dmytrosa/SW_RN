import { useCallback, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Favourite {
  id: string;
}

export const useFavourites = () => {
  const [favourites, setFavourites] = useState<Favourite[]>([]);
  const [isStorageError, setIsStorageError] = useState(false);

  const saveData = async () => {
    setIsStorageError(false);

    try {
      await AsyncStorage.setItem("favourites", JSON.stringify(favourites));
    } catch {
      setIsStorageError(true);
    } finally {
      getData();
    }
  };

  const removeData = async () => {
    setIsStorageError(false);

    try {
      await AsyncStorage.removeItem("favourites");
    } catch (error) {
      setIsStorageError(true);
    }
  };

  const getData = async () => {
    setIsStorageError(false);

    try {
      const value = await AsyncStorage.getItem("favourites");

      if (value !== null) {
        return value;
      }
    } catch {
      setIsStorageError(true);
    }
  };

  const addFavourite = useCallback(
    (fav: Favourite) => {
      setFavourites((prev) => [...prev, fav]);
    },
    [setFavourites]
  );

  const removeFavourite = useCallback(
    (id: string) => {
      setFavourites((prev) => prev.filter((person) => person.id !== id));
    },
    [setFavourites]
  );


  const isInFavourites = useCallback(
    (id: string) => {
      return favourites.some((person) => person.id === id);
    },
    [favourites]
  );

  const clearAllFavourites = useCallback(() => {
    setFavourites([]);
    removeData();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getData();

      setFavourites(JSON.parse(data || "[]"));
    })();
  }, []);

  useEffect(() => {
    saveData();
  }, [favourites]);

  return {
    addFavourite,
    removeFavourite,
    favourites,
    isInFavourites,
    clearAllFavourites,
    isStorageError,
  };
};
