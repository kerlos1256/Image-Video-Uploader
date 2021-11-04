import React, { FC, useRef, useState } from "react";
import Initial from "./initial";
import Uploading from "./Uploading";
import Uploaded from "./Uploaded";

const Home: FC = () => {
  const [uploading, setUploading] = useState<boolean>(false);
  const [file, setFile] = useState<{ fileId: string; type: string }>();

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      {/* card */}
      <div className="bg-white shadow-xl flex flex-col items-center rounded-2xl">
        {uploading ? (
          <Uploading />
        ) : !uploading && file ? (
          <Uploaded file={file} />
        ) : (
          <Initial setLoading={setUploading} setFile={setFile} />
        )}
      </div>
    </div>
  );
};

export default Home;
