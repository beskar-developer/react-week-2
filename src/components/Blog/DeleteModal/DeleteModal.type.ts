import type { Post } from "@/types/Blog";

export interface Props {
  onClose: () => void;
  onDelete: () => void;
  id: Post["id"];
}
