import { Block, TextInput } from "vcc-ui";

export default function Filter(props: {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element {
  return (
    <Block
      extend={{
        paddingLeft: "1rem",
      }}
    >
      <TextInput
        value={props.filter}
        label="Filter by model"
        onChange={(e) => {
          props.setFilter(e.target.value);
        }}
        style={{
          width: "12rem",
        }}
      />
    </Block>
  );
}
