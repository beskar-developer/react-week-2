import type { Props as ButtonProps } from "@shared-vendor/components/Button/BaseButton.type";
import type { Props } from "./DeleteModal.type";
import service from "@/service/Blog";

const useDeleteModal = ({ id, onClose, onDelete }: Props) => {
  const { execute, loading } = usePromise(
    async () => {
      const response = await service.delete(id);

      onDelete();
      onClose();

      return response;
    },
    {
      key: "DELETE_POST",
    },
  );

  const actions: ButtonProps[] = [
    {
      name: "DELETE",
      children: "حذف",
      color: "red",
      loading,
      onClick: execute,
    },
    {
      name: "CANCEL",
      children: "انصراف",
      variant: "outlined",
      onClick: onClose,
    },
  ];

  return actions;
};

export default useDeleteModal;
