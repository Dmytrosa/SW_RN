import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "../../types/Screen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../../App";
import { IconHeart } from "../../icons/IconHeart";


export const HeaderHearthButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(Screen.FAVS)}>
      <View className="p-2">
        <IconHeart color="#ff0000" />
      </View>
    </TouchableOpacity>
  );
};
