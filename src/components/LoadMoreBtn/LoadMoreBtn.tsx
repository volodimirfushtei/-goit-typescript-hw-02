import s from "./LoadMoreBtn.module.css";
import Loader from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";

interface LoadMoreBtnProps {
  haveImages: number;
  isLoadingMore: boolean;
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({
  haveImages,
  isLoadingMore,
  onClick,
}) => {
  if (haveImages <= 0) {
    if (haveImages === 0) {
      toast.error("No more images to load", { duration: 3000 });
    }
    return null;
  }

  return (
    <div className={s.container_button_loadmore}>
      {isLoadingMore ? (
        <Loader />
      ) : (
        <button
          className={s.button_loadmore}
          type="button"
          onClick={onClick}
          disabled={isLoadingMore}
        >
          Load more
        </button>
      )}
      <Toaster />
    </div>
  );
};

export default LoadMoreBtn;
