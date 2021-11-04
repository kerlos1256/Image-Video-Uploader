import axios from "axios";
import React, { FC, useState } from "react";

interface props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setFile: React.Dispatch<
    React.SetStateAction<
      | {
          fileId: string;
          type: string;
        }
      | undefined
    >
  >;
}

const initial: FC<props> = ({ setLoading, setFile }) => {
  const [fileId, setFileId] = useState<string>();

  const sendFile = (files: FileList) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    axios.post("http://localhost:4000/upload", formData, {}).then((res) => {
      setFileId(res.data);
      setLoading(false);
      setFile(res.data);
    });
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const data = e.currentTarget.files;
    if (!data || fileId) return;
    sendFile(data);
    setLoading(true);
  };

  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.files;
    if (!data || fileId) return;
    sendFile(data);
    setLoading(true);
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-semibold p-4 text-2xl">Upload your image</h1>
      <p>file should be jpeg, png</p>
      {/* image input */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={drop}
        className={`${
          fileId ? "h-auto" : "h-60"
        } w-96 overflow-hidden bg-gray-100 border-dashed border-2 border-blue-400 rounded-2xl m-6 flex justify-center items-center`}
      >
        {fileId ? (
          <div className="">
            <img
              className="w-96 h-auto"
              src={`http://localhost:4000/image/${fileId}`}
            />
          </div>
        ) : (
          <p>Drag and drop your image here</p>
        )}
      </div>
      <p>or</p>
      <form>
        <label className="block px-4 py-2 mb-4 mt-2 rounded-xl text-white bg-blue-400 cursor-pointer">
          <input
            multiple={false}
            onInput={handleInput}
            type="file"
            className="hidden"
          />
          choose a file
        </label>
      </form>
    </div>
  );
};

export default initial;
