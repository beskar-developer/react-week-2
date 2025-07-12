import type { OnActionClick, Post } from "@/types/Blog";

export interface IPostCard extends Post {
  onActionClick?: OnActionClick;
  detailed?: boolean;
}
