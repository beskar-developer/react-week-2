export interface IHomeActionBar {
  searchedValue: string;
  onSearchedValueChange: (value: string) => void;
  itemCount: number;
  onRefresh: () => void;
}
