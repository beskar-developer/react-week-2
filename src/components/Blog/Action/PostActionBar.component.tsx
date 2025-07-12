import type { IPostActionBar } from "./PostActionBar.type";

import PostActionButton from "./PostActionButton.component";
import PostSearchField from "./PostSearchField.component";

const PostActionBar = ({ searchedValue, onSearchedValueChange, itemCount, onRefresh }: IPostActionBar) => {
  return (
    <Card className="fixed bottom-0 left-[50%] z-10 flex w-full translate-x-[-50%] cursor-auto flex-col gap-2 rounded-none border-0 px-8 py-4 opacity-95 hover:border-0 md:bottom-4 md:w-124 md:rounded-xl">
      <div className="flex items-center justify-between">
        <ThemeToggleButton />

        <PostActionButton onRefresh={onRefresh} />
      </div>

      <PostSearchField
        searchedValue={searchedValue}
        onSearchedValueChange={onSearchedValueChange}
        itemCount={itemCount}
      />
    </Card>
  );
};

export default PostActionBar;
