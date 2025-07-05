import type { Props } from "./DeleteModal.type";

import useDeleteModal from "./UseDeleteModal.hook";

const DeleteModal = ({ id, onClose, onDelete }: Props) => {
  const actions = useDeleteModal({
    id,
    onClose,
    onDelete,
  });

  return (
    <div className="flex flex-col gap-8 px-4">
      <span className="text-gray-500 dark:text-gray-400">آیا از حذف این پست مطمئن هستید؟</span>

      <div className="flex gap-4">
        {actions.map((action) => (
          <BaseButton className="w-32" key={action.name} {...action} />
        ))}
      </div>
    </div>
  );
};

export default DeleteModal;
