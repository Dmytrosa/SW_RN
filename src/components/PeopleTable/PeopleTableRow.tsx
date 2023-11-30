import { HearthButton } from "../HearthButton";
import { Person } from "../../types/Person";
import {
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { useFavouritesContext } from "../../context.ts/favouritesContext";
import { PeopleTableCell } from "./PeopleTableCell";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../../App";

type Props = {
  person: Person;
  index: number;
};

export const PeopleTableRow = ({ person, index }: Props) => {
  const { addFavourite, removeFavourite, isInFavourites } =
    useFavouritesContext();

  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const isFavourite = isInFavourites(person.id);

  const handleHeartButton = ({ id }: Person, isFavourite: boolean) => {
    isFavourite ? removeFavourite(id) : addFavourite({ id });
  };


  return (
    <View
      className={`flex flex-row bg-${index % 2 === 0 ? "transparent" : "gray-100"
        }`}
    >
      <View>
        <PeopleTableCell>
          {person.id ? (
            <HearthButton
              onClick={() => {
                handleHeartButton(person, isFavourite);
              }}
              fill={isFavourite}
              color="#ff0000"
              size={20}
            />
          ) : (
            <HearthButton
              fill={true}
              color="#000000"
              size={20}
              onClick={() => { }}
            />
          )}
        </PeopleTableCell>
      </View>

      <View style={{ width: 324 }} className="flex justify-center">
        <PeopleTableCell>
          <TouchableNativeFeedback
            onPress={() => navigation.push("Person", { object: person })}
          >
            <View className="bg-gray-200 rounded py-1 px-3 border-b-2 border-b-gray-500">
              <Text>{person.name}</Text>
            </View>
          </TouchableNativeFeedback>
        </PeopleTableCell>
      </View>
    </View>
  );
};
