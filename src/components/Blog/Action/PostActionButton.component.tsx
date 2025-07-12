import type { IPostActionBar } from "./PostActionBar.type";

import usePostActionButton from "./UsePostActionButton.hook";

import { AiFillInfoCircle, AiFillInteraction, AiFillPlusCircle } from "react-icons/ai";

type Open = () => void;

const PostActionButton = ({ onRefresh }: Pick<IPostActionBar, "onRefresh">) => {
  const { redirectToAboutUs } = usePostActionButton();

  const render = ({ open }: { open: Open }) => (
    <BaseButton icon onClick={open}>
      <AiFillPlusCircle />
    </BaseButton>
  );

  return (
    <div className="flex gap-4">
      <BaseButton icon color="sky" onClick={redirectToAboutUs}>
        <AiFillInfoCircle />
      </BaseButton>

      <BaseButton icon color="emerald" onClick={onRefresh}>
        <AiFillInteraction />
      </BaseButton>

      <Modal.Open name="ADD" render={render} />
    </div>
  );
};

export default PostActionButton;
