import type { OnActionClick, Post, PostAction } from "@/types/Blog";
import type { Props as ButtonProps } from "@shared-vendor/components/Button/BaseButton.type";

import { AiFillDelete, AiFillEdit, AiFillFileText, AiOutlineMore } from "react-icons/ai";

interface IPostCard extends Post {
  onActionClick: OnActionClick;
}

interface IAction extends ButtonProps {
  name: PostAction;
}

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

type Open = () => void;

const PostCard = ({ id, title, content, onActionClick }: IPostCard) => {
  const handleActionClick = ({ actionName, open }: { actionName: IAction["name"]; open: Open }) => {
    onActionClick(id, actionName);

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

  return (
    <Card className="flex flex-col gap-6 p-5">
      <div className="font-xl flex items-center gap-4 font-extrabold">
        <AiFillFileText className="size-8 fill-indigo-500" />

        <span>{title}</span>
      </div>

      <p className="w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-gray-500 dark:text-gray-400">
        {content}
      </p>

      <div className="flex gap-4">
        {actions.map((action) => (
          <Modal.Open key={action.name} name={action.name} render={({ open }) => render({ open, action })} />
        ))}
      </div>
    </Card>
  );
};

export default PostCard;
