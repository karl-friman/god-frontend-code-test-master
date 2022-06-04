import { Link, Flex, Spacer } from "vcc-ui";

export default function CarLinks(props: { id: string }): JSX.Element {
  return (
    <Flex
      extend={{
        flexDirection: "row",
        paddingTop: "2rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link href={"/learn/" + props.id} arrow="right">
        LEARN
      </Link>
      <Spacer />
      <Link href={"/shop/" + props.id} arrow="right">
        SHOP
      </Link>
    </Flex>
  );
}
