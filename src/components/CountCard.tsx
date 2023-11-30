import { View, Text, StyleSheet } from "react-native";

type Props = {
  number: number;
  title: string;
}

export const CountCard = ({ number, title }: Props) => {
  return (
    <View style={styles.container} className="p-4 bg-white rounded basis-[32%]">
      <Text className="text-3xl">{number}</Text>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
});
