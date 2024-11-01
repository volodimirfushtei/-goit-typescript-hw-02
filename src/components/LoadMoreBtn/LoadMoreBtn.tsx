import s from "./LoadMoreBtn.module.css";
import Loader from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import { LoadMoreBtnProps } from "../App/App.types";


const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({
  haveImages,
  isLoadingMore,
  onClick,
}) => {
  const handleLoadMore = () => {
    if (haveImages <= 0) {
      toast.error("No more images");
      return;
    }
    onClick();
  };

  return (
    <div className={s.container_button_loadmore}>
      {isLoadingMore ? (
        <Loader />
      ) : (
        <button
          className={s.button_loadmore}
          type="button"
          onClick={handleLoadMore}
          disabled={isLoadingMore}
          aria-label="Load more images"
        >
          Load more
        </button>
      )}
      <Toaster />
    </div>
  );
};

export default LoadMoreBtn;
