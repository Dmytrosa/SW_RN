import { View, Text } from "react-native";

type Props = {
  title: string;
  value: string;
  last?: boolean;
}

export const InfoTableRow = ({title, value, last}: Props) => {
  return (
    <View className={`flex flex-row justify-between py-2 ${last ? '' : 'border-b border-b-gray-300'}`}>
      <Text className="text-xl">{title}:</Text>
      <Text className="text-xl">{value}</Text>
    </View>
  );
};
