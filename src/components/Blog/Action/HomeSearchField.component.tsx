import type { IHomeActionBar } from "./HomeActionBar.type";

const HomeSearchField = ({
  searchedValue,
  itemCount,
  onSearchedValueChange,
}: Pick<IHomeActionBar, "searchedValue" | "itemCount" | "onSearchedValueChange">) => {
  return (
    <TextField
      label="جستجو"
      name="search"
      value={searchedValue}
      disabled={!itemCount}
      onChange={(event) => onSearchedValueChange(event.target.value)}
    />
  );
};

export default HomeSearchField;
