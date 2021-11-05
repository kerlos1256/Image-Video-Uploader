import React, { FC } from "react";
import Image from "next/image";
import checkMark from "../assets/checkMark.jpg";
import constants from "../constants";

const Uploaded: FC<{ file: { fileId: string; type: string } }> = ({ file }) => {
  const { fileId, type } = file;
  const fileSrc = `${constants.SERVER_URI}/${type}/${fileId}`;
  const fileLink = `${constants.CLIENT_URI}/${type}/${fileId}`;
  return (
    <div className="flex flex-col items-center px-8">
      <div className="flex flex-col items-center mt-4">
        <div className="w-12 h-auto">
          <Image layout="responsive" src={checkMark} />
        </div>
        <div className="font-semibold">Uploaded Successfully!</div>
      </div>
      <div className="w-96 h-auto my-6 rounded-2xl overflow-hidden">
        {type === "image" ? (
          <img src={fileSrc} />
        ) : type === "video" ? (
          <video width="100%" controls muted={true} autoPlay>
            <source src={fileSrc} type="video/mp4" />
          </video>
        ) : (
          <div>unknown file</div>
        )}
      </div>
      <div className="w-full h-auto bg-gray-200 rounded-lg border border-gray-300 p-px flex justify-between items-center mb-8">
        <div className="ml-2 w-64 h-4 overflow-hidden text-xs">
          {type === "image" || type === "video" ? fileLink : "unknown file"}
        </div>
        <div
          onClick={() =>
            navigator.clipboard.writeText(
              type === "image" || type === "video" ? fileLink : "unknown file"
            )
          }
          className="py-2 px-6 bg-blue-600 text-white rounded-lg cursor-pointer"
        >
          Copy Link
        </div>
      </div>
    </div>
  );
};

export default Uploaded;
