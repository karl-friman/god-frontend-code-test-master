import React from "react";
import { useTheme, View, Flex } from "vcc-ui";
import cars from "../public/api/cars.json";
import { Car } from "../types";
import Card from "../src/components/Card";
import { useState } from "react";
import Filter from "../src/components/Filter";
import Navigation from "../src/components/Navigation";
export default function HomePage() {
  const theme = useTheme();

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
      <Filter filter={filter} setFilter={setFilter} />
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
            .filter(
              (f) =>
                f.modelName.toLowerCase().includes(filter.toLowerCase()) ||
                filter === ""
            )
            .map((car: Car, index: number) => {
              return <Card key={index} {...car}></Card>;
            })}
        </Flex>
      </Flex>
      <Navigation />
    </View>
  );
}
