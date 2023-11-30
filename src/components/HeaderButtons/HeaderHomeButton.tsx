import { View, TouchableOpacity } from "react-native";
import { IconHome } from "../../icons/IconHome";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "../../types/Screen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../../App";


export const HeaderHomeButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(Screen.MAIN)}>
      <View className="p-2">
        <IconHome />
      </View>
    </TouchableOpacity>
  );
};
