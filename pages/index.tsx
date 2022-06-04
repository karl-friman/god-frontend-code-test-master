import React from "react";
import {
  useTheme,
  View,
  Flex,
  IconButton,
  Spacer,
  TextInput,
  Block,
} from "vcc-ui";
import cars from "../public/api/cars.json";
import { Car } from "../types";
import Card from "../src/components/Card";
import { useState } from "react";

export default function HomePage() {
  const theme = useTheme();
  const loadPrev = (): void => {
    alert("not implemented yet!");
  };
  const loadNext = (): void => {
    alert("not implemented yet!");
  };
  const [filter, setFilter] = useState("");
  return (
    <View
      extend={{
        background: theme.color.background.primary,
        paddingTop: "3rem",
        paddingLeft: "3rem",
        marginRight: "3rem",
        margin: "0",
      }}
    >
      <Block
        extend={{
          paddingLeft: "1rem",
        }}
      >
        <TextInput
          value={filter}
          label="Filter by model"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          style={{
            width: "12rem",
          }}
        />
      </Block>
      <Flex
        extend={{
          overflow: "hidden",
        }}
      >
        <Flex
          extend={{
            flexDirection: "row",
          }}
        >
          {cars
            .filter((f) => f.modelName.toLowerCase().includes(filter.toLowerCase()) || filter === "")
            .map((car: Car, index: number) => {
              return <Card key={index} {...car}></Card>;
            })}
        </Flex>

        <Flex
          extend={{
            flexDirection: "row",
            padding: "1rem",
            justifyContent: "end",
            flex: "5",
          }}
        >
          <IconButton
            onClick={loadPrev}
            aria-label="prev"
            iconName="navigation-chevronback"
            variant="outline"
          />
          <Spacer />
          <IconButton
            onClick={loadNext}
            aria-label="next"
            iconName="navigation-chevronforward"
            variant="outline"
          />
        </Flex>
      </Flex>
    </View>
  );
}
