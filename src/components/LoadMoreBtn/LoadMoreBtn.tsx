import s from "./LoadMoreBtn.module.css";
import Loader from "../Loader/Loader";

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
    return null;
  }
  return (
    <div className={s.container_button_loadmore}>
      {isLoadingMore ? (
        <Loader />
      ) : (
        <button className={s.button_loadmore} type="button" onClick={onClick}>
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMoreBtn;
