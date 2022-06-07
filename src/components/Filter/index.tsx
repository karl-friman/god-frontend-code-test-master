import { Block, TextInput, SelectInput } from "vcc-ui";

export default function Filter(props: {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  bodyType: string;
  setBodyType: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element {
  return (
    <Block
    extend={{
      paddingLeft: "1rem",
      width: "12rem"
    }}
  >
    <SelectInput
      label={"Body Type"}
      value={props.bodyType}
      onChange={(e) => props.setBodyType(e.target.value)}
    >
      <option value="">All</option>
      <option value="estate">Estate</option>
      <option value="sedan">Sedan</option>
      <option value="suv">Suv</option>
    </SelectInput>

      <TextInput
        value={props.filter}
        label="Filter by name"
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
