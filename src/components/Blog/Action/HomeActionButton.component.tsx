import type { IHomeActionBar } from "./HomeActionBar.type";

import useHomeActionButton from "./UseHomeActionButton.hook";

import { AiFillInfoCircle, AiFillInteraction, AiFillPlusCircle } from "react-icons/ai";

type Open = () => void;

const HomeActionButton = ({ onRefresh }: Pick<IHomeActionBar, "onRefresh">) => {
  const { redirectToAboutUs } = useHomeActionButton();

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

export default HomeActionButton;
