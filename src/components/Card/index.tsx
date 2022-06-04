import Image from "next/image";
import { Link, Block, Text, Flex, View, Spacer } from "vcc-ui";
import { Car } from "../../../types";

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
          // "@media (min-width: 2560px)": {
          //   height: "500px",
          // },
          // "@media (min-width: 1920px)": {
          //   height: "400px",
          // },
          // "@media (min-width: 1600px)": {
          //   height: "300px",
          // },
          // "@media (min-width: 1080px)": {
          //   height: "230px",
          // },
        }}
      >
        <Image src={imageUrl} alt={modelName} layout="fill" quality={100} />
      </Block>

      <Flex
        extend={{
          flexDirection: "row",
          paddingTop: "2rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          href={"/learn/" + id}
          arrow="right"
        >
          LEARN
        </Link>
        <Spacer />
        <Link
          href={"/shop/" + id}
          arrow="right"
        >
          SHOP
        </Link>
      </Flex>
    </View>
  );
}
