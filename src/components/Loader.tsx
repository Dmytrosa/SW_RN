import { View, ActivityIndicator } from "react-native";

export const Loader = () => {
  return (
    <View className="absolute top-0 left-0 right-0 bottom-0 justify-center items-center">
      <ActivityIndicator size="large" color="black" />
    </View>
  );
};
