import type { IPostActionBar } from "./PostActionBar.type";

const PostSearchField = ({
  searchedValue,
  itemCount,
  onSearchedValueChange,
}: Pick<IPostActionBar, "searchedValue" | "itemCount" | "onSearchedValueChange">) => {
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

export default PostSearchField;
