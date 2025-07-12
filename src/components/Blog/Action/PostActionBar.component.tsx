import type { IPostActionBar } from "./PostActionBar.type";

import ActionBar from "./ActionBar.component";
import PostActionButton from "./PostActionButton.component";
import PostSearchField from "./PostSearchField.component";

const PostActionBar = ({ searchedValue, onSearchedValueChange, itemCount, onRefresh }: IPostActionBar) => {
  return (
    <ActionBar actionFallback={<PostActionButton onRefresh={onRefresh} />}>
      <PostSearchField
        searchedValue={searchedValue}
        onSearchedValueChange={onSearchedValueChange}
        itemCount={itemCount}
      />
    </ActionBar>
  );
};

export default PostActionBar;
