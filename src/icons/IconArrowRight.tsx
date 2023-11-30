import { Path } from "react-native-svg";
import { Icon } from "./Icon";

type Props = {
  size?: number;
  color?: string;
};

export const IconArrowRight = ({ size = 20, color = "#000" }: Props) => (
  <Icon size={size}>
    <Path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" fill={color} />
  </Icon>
);
