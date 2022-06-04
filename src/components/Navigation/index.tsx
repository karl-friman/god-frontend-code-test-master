import { Flex, Spacer, IconButton } from "vcc-ui";

export default function Navigation(): JSX.Element {
  const loadPrev = (): void => {
    alert("not implemented yet!");
  };
  const loadNext = (): void => {
    alert("not implemented yet!");
  };
  return (
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
  );
}
