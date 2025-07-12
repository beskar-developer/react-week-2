import type { IPostActionBar } from "./PostActionBar.type";

import { AiFillInteraction, AiFillPlusCircle } from "react-icons/ai";

type Open = () => void;

const PostActionButton = ({ onRefresh }: Pick<IPostActionBar, "onRefresh">) => {
  const render = ({ open }: { open: Open }) => (
    <BaseButton icon onClick={open}>
      <AiFillPlusCircle />
    </BaseButton>
  );

  return (
    <div className="flex gap-4">
      <BaseButton icon color="emerald" onClick={onRefresh}>
        <AiFillInteraction />
      </BaseButton>

      <Modal.Open name="ADD" render={render} />
    </div>
  );
};

export default PostActionButton;
