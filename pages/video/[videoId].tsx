import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import React from "react";
import constants from "../../constants";

const Video: NextPage = () => {
  const router = useRouter();
  const videoId = router.query.videoId;
  const videoSrc = `${constants.SERVER_URI}/video/${videoId}`;
  const videoLink = `${constants.CLIENT_URI}/video/${videoId}`;
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white shadow-xl flex flex-col items-center rounded-2xl">
        <div className="flex flex-col items-center px-8">
          <div className="w-96 h-auto my-6 rounded-2xl overflow-hidden">
            {videoId ? (
              <video width="100%" controls muted={true} autoPlay>
                <source src={videoSrc} type="video/mp4" />
              </video>
            ) : (
              <div>video not Found</div>
            )}
          </div>
          <div className="w-full h-auto bg-gray-200 rounded-lg border border-gray-300 p-px flex justify-between items-center mb-8">
            <div className="ml-2 w-64 h-4 overflow-hidden text-xs">
              {videoLink}
            </div>
            <div
              onClick={() => navigator.clipboard.writeText(videoLink)}
              className="py-2 px-6 bg-blue-600 text-white rounded-lg cursor-pointer"
            >
              Copy Link
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
