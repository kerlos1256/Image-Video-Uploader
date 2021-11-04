import React, { FC } from "react";

const Uploading: FC = () => {
  return (
    <div className="p-4">
      <div className="my-2">Uploading...</div>
      <div className="mt-4">
        <div className="w-96 h-1 overflow-hidden font-semibold bg-gray-200 rounded-xl my-4">
          <div className="bg-blue-400 h-full w-24 rounded-xl loading"></div>
        </div>
      </div>
    </div>
  );
};

export default Uploading;
