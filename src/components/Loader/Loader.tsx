import s from "./Loader.module.css";
import { ThreeDots } from "react-loader-spinner";
import { LoaderProps } from "../App/App.types";

const Loader: React.FC<LoaderProps> = ({
  color = "red",
  height = 80,
  width = 80,
}) => {
  return (
    <div className={s.loader}>
      <ThreeDots
        visible={true}
        height={height}
        width={width}
        color={color}
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
