import Image from "next/image";
import { Block, Text, Flex, View } from "vcc-ui";
import { Car } from "../../../types";
import CarLinks from "../CarLinks";

export default function Card(props: Car): JSX.Element {
  const { id, modelName, bodyType, modelType, imageUrl } = props;

  return (
    <View
      extend={{
        padding: "1rem",
        "@media (min-width: 2850px)": {
          width: "20%",
        },
        "@media (min-width: 1400px)": {
          width: "25%",
        },
        "@media (min-width: 720px)": {
          width: "50%",
        },
        "@media (min-width: 500px)": {
          width: "100%",
        },
      }}
    >
      <Block>
        <Text
          variant="columbus"
          subStyle="emphasis"
          extend={{ textTransform: "uppercase", color: "#707070" }}
        >
          {bodyType}
        </Text>
        <Flex
          extend={{
            flexDirection: "row",
            paddingBottom: "1.5rem",
            "@media (max-width: 720px)": {
              flexDirection: "column",
            },
          }}
        >
          <Text
            variant="hillary"
            subStyle="emphasis"
            extend={{ color: "#202020" }}
          >
            {modelName}&nbsp;
          </Text>
          <Text variant="hillary" extend={{ color: "#707070" }}>
            {modelType}
          </Text>
        </Flex>
      </Block>

      <Block
        style={{
          position: "relative",
          aspectRatio: "4/3",
        }}
      >
        <Image src={imageUrl} alt={modelName} layout="fill" quality={100} />
      </Block>
      <CarLinks id={id} />
    </View>
  );
}
