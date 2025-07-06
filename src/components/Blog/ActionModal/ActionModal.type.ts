import type { Post } from "@/types/Blog";

export interface Props extends Partial<Post> {
  onClose: () => void;
  onAdd?: (post: Post) => void;
  onEdit?: (post: Post) => void;
}

export type FieldName = keyof Post;
export type Field = {
  name: FieldName;
  label: string;
  textarea?: boolean;
  rules: object;
};

export type FormValues = Post;
