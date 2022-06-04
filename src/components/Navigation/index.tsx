import { Flex, Spacer, IconButton } from "vcc-ui";
import { ButtonsDisabled } from "../../../types";

export default function Navigation(props: {
  disabled: ButtonsDisabled;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  const loadPrev = (
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
  ): void => {
    setPage(page - 1);
  };
  const loadNext = (
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
  ): void => {
    setPage(page + 1);
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
        onClick={() => loadPrev(props.page, props.setPage)}
        aria-label="prev"
        iconName="navigation-chevronback"
        variant="outline"
        disabled={props.disabled.previous}
      />
      <Spacer />.
      <IconButton
        onClick={() => loadNext(props.page, props.setPage)}
        aria-label="next"
        iconName="navigation-chevronforward"
        variant="outline"
        disabled={props.disabled.next}
      />
    </Flex>
  );
}
