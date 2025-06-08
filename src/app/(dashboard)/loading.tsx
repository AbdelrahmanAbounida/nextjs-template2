import { Loader } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center ">
      <Loader className="animate-spin w-5 h-5 m-auto" />
    </div>
  );
};

export default Loading;
