"use no memo";

import type { IPostActionModal } from "./PostActionModal.type";

import usePostActionModal from "./UsePostActionModal.hook";

const PostActionModal = ({ onClose, onEdit, onAdd, ...defaultValues }: IPostActionModal) => {
  const { actions, fields, isSubmitting, errors, register, onSubmit } = usePostActionModal({
    onClose,
    onAdd,
    onEdit,
    ...defaultValues,
  });

  return (
    <form className="flex flex-col gap-8 px-4" onSubmit={onSubmit}>
      {fields.map(({ name, rules, ...field }) => (
        <TextField
          errorMessage={errors[name]?.message}
          disabled={isSubmitting}
          key={name}
          {...field}
          {...register(name, rules)}
        />
      ))}

      <div className="flex gap-4">
        {actions.map((action) => (
          <BaseButton className="w-32" key={action.name} {...action} />
        ))}
      </div>
    </form>
  );
};

export default PostActionModal;
