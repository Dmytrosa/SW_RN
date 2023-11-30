import { Path } from "react-native-svg";
import { Icon } from "./Icon";

type Props = {
  size?: number;
  color?: string;
};

export const IconArrowLeft = ({ size = 20, color = "#000" }: Props) => (
  <Icon size={size} >
    <Path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" fill={color} />
  </Icon>
);
