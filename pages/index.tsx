import React from "react";
import { useTheme, View, Flex, IconButton, Spacer } from "vcc-ui";
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
  const newcars = cars.filter((x) => x.id.includes("xc"));
  const [filter, setFilter] = useState("");
  return (
    <View
      extend={{
        background: theme.color.background.primary,
        // transition: '3s opacity ease-in',
        paddingTop: "3rem",
        paddingLeft: "3rem",
        marginRight: "3rem",
        margin: "0",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <p>
        Type to filter the list:
        <input
          id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </p>
      <Flex
        extend={{
          flexDirection: "row",
        }}
      >
        {cars
          .filter((f) => f.includes(filter) || filter === "")
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
    </View>
  );
}
