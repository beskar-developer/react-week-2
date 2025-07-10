import type { Post } from "@/types/Blog";

import { PostActionModal, PostDeleteModal } from "@/components/Blog";

interface IPostModalList {
  selectedPostId: Post["id"];
  selectedPost?: Post;
  onAdd: (post: Post) => void;
  onDelete: () => void;
  onEdit: (post: Post) => void;
}

const PostModalList = ({ selectedPostId, selectedPost, onAdd, onDelete, onEdit }: IPostModalList) => {
  return (
    <>
      <Modal.Window
        name="ADD"
        title="افزودن"
        render={({ close }) => <PostActionModal onClose={close} onAdd={onAdd} />}
      />

      <Modal.Window
        name="DELETE"
        title="حذف"
        render={({ close }) => <PostDeleteModal id={selectedPostId} onClose={close} onDelete={onDelete} />}
      />

      <Modal.Window
        name="EDIT"
        title="ویرایش"
        render={({ close }) => <PostActionModal onClose={close} onEdit={onEdit} {...selectedPost} />}
      />
    </>
  );
};

export default PostModalList;
