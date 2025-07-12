import type { PostAction } from "@/types/Blog";
import type { IPostCard } from "./PostCard.type";
import type { Props as ButtonProps } from "@shared-vendor/components/Button/BaseButton.type";

import { AiFillDelete, AiFillEdit, AiOutlineMore } from "react-icons/ai";

interface IAction extends ButtonProps {
  name: PostAction;
}

type Open = () => void;

const actions: IAction[] = [
  {
    children: <AiOutlineMore className="rotate-90" />,
    name: "DETAILS",
  },
  { children: <AiFillDelete />, color: "red", name: "DELETE" },
  {
    children: <AiFillEdit />,
    color: "emerald",
    name: "EDIT",
  },
];

const PostCardButtonList = ({
  id,
  detailed,
  onActionClick,
}: Pick<IPostCard, "id" | "onActionClick" | "detailed">) => {
  const handleActionClick = ({ actionName, open }: { actionName: IAction["name"]; open: Open }) => {
    onActionClick?.(id, actionName);

    open();
  };

  const render = ({ open, action }: { open: Open; action: IAction }) => (
    <BaseButton
      icon
      variant="filled"
      onClick={() => handleActionClick({ actionName: action.name, open })}
      {...action}
    />
  );

  if (detailed) return <></>;

  return (
    <div className="flex gap-4">
      {actions.map((action) => (
        <Modal.Open key={action.name} name={action.name} render={({ open }) => render({ open, action })} />
      ))}
    </div>
  );
};

export default PostCardButtonList;
