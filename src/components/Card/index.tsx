import Image from "next/image";
import { Link, Message, Block, Text, Flex, View } from "vcc-ui";
import { Car } from "../../../types";

export default function Card(props: Car): JSX.Element {
  const { id, modelName, bodyType, modelType, imageUrl } = props;

  return (
    <View
      extend={{
        padding: "1rem",
        width: '25%'
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

        <div
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
        </div>

        <Flex
          extend={{
            flexDirection: "row",
            paddingTop: "4rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            href={"/learn/" + id}
            arrow="right"
            style={{ fontSize: "1.8rem", padding: "2rem" }}
          >
            LEARN
          </Link>
          <Link
            href={"/shop/" + id}
            arrow="right"
            style={{ fontSize: "1.8rem", padding: "2rem" }}
          >
            SHOP
          </Link>
        </Flex>

    </View>
  );
}
