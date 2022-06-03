import React from "react";
import { Block, Button, Grid, useTheme, View, Row, Flex, Link } from "vcc-ui";
import cars from "../public/api/cars.json";
import { Car } from "../types";
import Card from "../src/components/Card";

export default function HomePage() {
  const theme = useTheme();

  return (
    <View
      extend={{
        background: theme.color.background.primary,
        transition: "3s opacity ease-in",
        paddingTop: "3rem",
        padding: "2rem",
      }}
    >
      <Flex
        extend={{
          flexDirection: "row",
        }}
      >
        {cars.map((car: Car, index: number) => {
          return (
            <div key={index}>
              <Card {...car}></Card>
            </div>
          );
        })}
      </Flex>

      <View
        spacing={2}
        direction="row"
        justifyContent="end"
        extend={{
          marginTop: "1rem",
        }}
      >
        dots
      </View>
    </View>
  );
}
