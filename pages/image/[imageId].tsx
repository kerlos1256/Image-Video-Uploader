import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";

const Image: NextPage = () => {
  const router = useRouter();
  const ImageId = router.query.imageId;
  const imageSrc = `http://localhost:4000/image/${ImageId}`;
  const imageLink = `http://localhost:3000/image/${ImageId}`;
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white shadow-xl flex flex-col items-center rounded-2xl">
        <div className="flex flex-col items-center px-8">
          <div className="w-96 h-auto my-6 rounded-2xl overflow-hidden">
            {ImageId ? <img src={imageSrc} /> : <div>Image not Found</div>}
          </div>
          <div className="w-full h-auto bg-gray-200 rounded-lg border border-gray-300 p-px flex justify-between items-center mb-8">
            <div className="ml-2 w-64 h-4 overflow-hidden text-xs">
              {imageLink}
            </div>
            <div
              onClick={() => navigator.clipboard.writeText(imageLink)}
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

export default Image;
