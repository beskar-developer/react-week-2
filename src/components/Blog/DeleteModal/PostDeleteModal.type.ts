import type { Post } from "@/types/Blog";

export interface IPostDeleteModal {
  onClose: () => void;
  onDelete: () => void;
  id: Post["id"];
}
