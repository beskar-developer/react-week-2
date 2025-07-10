import type { Props as ButtonProps } from "@shared-vendor/components/Button/BaseButton.type";
import type { IPostDeleteModal } from "./PostDeleteModal.type";

import service from "@/services/Blog";

const usePostDeleteModal = ({ id, onClose, onDelete }: IPostDeleteModal) => {
  const { execute, loading } = usePromise(
    async () => {
      const response = await service.delete(id);

      onDelete();
      onClose();

      return response;
    },
    {
      key: "DELETE_POST",
      ttl: 0,
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

export default usePostDeleteModal;
