import type { Props as ButtonProps } from "@shared-vendor/components/Button/BaseButton.type";
import type { Field, FormValues, IPostActionModal } from "./PostActionModal.type";

import service from "@/services/Blog";

const fields: Field[] = [
  {
    label: "تیتر",
    name: "title",
    rules: {
      validate: {
        required: validateRequired,
        minLength: (value: string) => validateMinLength(value, 4),
      },
    },
  },
  {
    label: "محتوا",
    name: "content",
    textarea: true,
    rules: {
      validate: {
        required: validateRequired,
        minLength: (value: string) => validateMinLength(value, 20),
      },
    },
  },
];

const DEFAULT_FORM_VALUES: Partial<FormValues> = {
  title: "",
  content: "",
};

const usePostActionModal = ({ onClose, onAdd, onEdit, ...defaultValues }: IPostActionModal) => {
  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      ...DEFAULT_FORM_VALUES,
      ...defaultValues,
    },
  });

  const isEditMode = Object.keys(defaultValues).length;

  const executeByActionMode = async ({ id, title, content }: FormValues) => {
    const post = isEditMode
      ? await service.edit({ id, title, content })
      : await service.add({ title, content });

    if (isEditMode) onEdit?.(post);
    else onAdd?.(post);

    return post;
  };

  const { execute } = usePromise(
    async (formValues: FormValues) => {
      const post = await executeByActionMode(formValues);

      onClose();

      return post;
    },
    {
      key: "ADD_POST",
      ttl: 0,
    },
  );
  const onSubmit = handleSubmit(execute);

  const actions: ButtonProps[] = [
    {
      name: "ADD",
      children: isEditMode ? "ویرایش" : "افزودن",
      type: "submit",
      loading: isSubmitting,
    },
    {
      name: "CANCEL",
      variant: "outlined",
      children: "انصراف",
      type: "button",
      onClick: onClose,
    },
  ];

  return {
    actions,
    fields,
    isSubmitting,
    errors,
    register,
    onSubmit,
  };
};

export default usePostActionModal;
