import React from "react";
import { View } from "react-native";
import Svg from "react-native-svg";

type Props = {
  children: React.ReactNode;
  size: number;
  viewBox?: string;
};

export const Icon = ({ children, size, viewBox = '0 0 24 24' }: Props) => {
  return (
    <View className="flex items-center justify-center">
      <Svg
        width={size}
        height={size}
        viewBox={viewBox}
        className="transition"
      >
        {children}
      </Svg>
    </View>
  );
};
