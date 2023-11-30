import { ReactNode } from "react";
import { View, Text } from "react-native";

type Props = {
  children: ReactNode;
};

export const PeopleTableCell = ({ children }: Props) => {
  return (
    <View className="p-2 flex justify-center">
      <Text>{children}</Text>
    </View>
  );
};
