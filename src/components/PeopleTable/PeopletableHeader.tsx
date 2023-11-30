import { View, Text } from "react-native";
import { PeopleTableCell } from "./PeopleTableCell";


export const PeopleTableHeader = () => {
  const handleSortChange = () => {

  return (
    <View className="flex flex-row bg-gray-100 border-b border-b-gray-300">
      <View style={{ width: 324 }} className="flex justify-center">
        <PeopleTableCell>
          
          <View>
            <Text className=" leading-9 font-bold ">TODO: sort by apearance</Text>
          </View>
        </PeopleTableCell>
      </View>
    </View>
  );
}}
