import React from "react";
import { View, Text } from "react-native";
import { IconArrowLeft } from "../icons/IconArrowLeft";
import { IconArrowRight } from "../icons/IconArrowRight";
import RoundedButton from "./RoundedButton";

type Props = {
  total: number;
  page: number;
  onPageChange: (page: "prev" | "next") => void;
  isLoading: boolean;
};

export const Pagination = ({
  page,
  total,
  onPageChange,
  isLoading,
}: Props) => {

  const startItem = (page - 1) * 10 + 1;
  const endItem = Math.min(page * 10, total);

  const isFirstPage = startItem === 1;
  const isLastPage = endItem === total;

  const disablePrev = isFirstPage || isLoading;
  const disableNext = isLastPage || isLoading;

  return (
    <View className="flex flex-row items-center justify-between">
      <Text className="text-lg">{`${startItem} – ${endItem} of ${total}`}</Text>

      <View className="flex flex-row p-1">
        <RoundedButton disabled={disablePrev} onClick={() => onPageChange("prev")}>
          <View className="p-2">
            <IconArrowLeft size={30} color={disablePrev ? '#a0a0a0' : '#000000'} />
          </View>
        </RoundedButton>

        <RoundedButton disabled={disableNext} onClick={() => onPageChange("next")}>
          <View className="p-2">
            <IconArrowRight size={30} color={disableNext ? '#a0a0a0' : '#000000'}/>
          </View>
        </RoundedButton>
      </View>
    </View>
  );
};
