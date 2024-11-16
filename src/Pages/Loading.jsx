import { GridLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen">
      <GridLoader
        color='#000000'
        loading={true}
        size={30}
      />
    </div>
  );
};

export default Loading;
