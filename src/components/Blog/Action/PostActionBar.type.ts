export interface IPostActionBar {
  searchedValue: string;
  onSearchedValueChange: (value: string) => void;
  itemCount: number;
  onRefresh: () => void;
}
