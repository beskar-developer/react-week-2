"use no memo";

import type { Props } from "./ActionModal.type";

import useActionModal from "./UseActionModal.hook";

const ActionModal = ({ onClose, onEdit, onAdd, ...defaultValues }: Props) => {
  const { actions, fields, isSubmitting, errors, register, onSubmit } = useActionModal({
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

export default ActionModal;
