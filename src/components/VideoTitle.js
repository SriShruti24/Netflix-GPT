import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[30%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className=" py-6 text-sm w-1/4">{overview}</p>
      <div className=" flex justify">
        <button
          className="bg-white  text-black
         flex items-center gap-2 rounded-md p-5 px-6 py-1 m-2 border border-black hover:bg-opacity-70 "
        >
          <Play size={20} fill="black" stroke="black" />

          Play
        </button>

        <button className="flex items-center bg-opacity-50 gap-2 text-white bg-gray-400 p-5 py-2 px-6 m-2 rounded-md">
          <Info size={20} />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
