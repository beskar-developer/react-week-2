import type { IHomeActionBar } from "./HomeActionBar.type";

import ActionBar from "./ActionBar.component";
import HomeActionButton from "./HomeActionButton.component";
import HomeSearchField from "./HomeSearchField.component";

const HomeActionBar = ({ searchedValue, onSearchedValueChange, itemCount, onRefresh }: IHomeActionBar) => {
  return (
    <ActionBar actionFallback={<HomeActionButton onRefresh={onRefresh} />}>
      <HomeSearchField
        searchedValue={searchedValue}
        onSearchedValueChange={onSearchedValueChange}
        itemCount={itemCount}
      />
    </ActionBar>
  );
};

export default HomeActionBar;
