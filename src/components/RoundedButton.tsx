import React from "react";
import { View, TouchableNativeFeedback } from "react-native";
import { IconArrowRight } from "../icons/IconArrowRight";

type Props = {
  children: React.ReactNode;
  onClick: <T>(arg: T) => void;
  disabled: boolean;
};

const RoundedButton = ({ children, onClick, disabled }: Props) => {
  return (
    <View
      className="rounded-full overflow-hidden flex justify-center items-center"
    >
      <TouchableNativeFeedback onPress={onClick} disabled={disabled}>
        {children}
      </TouchableNativeFeedback>
    </View>
  );
};

export default RoundedButton;
