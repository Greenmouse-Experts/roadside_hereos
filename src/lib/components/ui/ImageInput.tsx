import React, { useState, useCallback, FC, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { AiFillPicture } from "react-icons/ai";

interface Props {
  label: string;
  setImage: React.Dispatch<React.SetStateAction<Array<File> | undefined>>;
  containerClass?: string;
  prevValue?: string | string[];
  disabled: boolean;
}
const ImageInput: FC<Props> = ({
  label,
  setImage,
  containerClass,
  prevValue,
  disabled,
}) => {
  const [preview, setPreview] = useState<any>(prevValue);
  useEffect(() => {
    setPreview(prevValue);
  }, [prevValue]);
  //   handle drag and drop
  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    setImage(acceptedFiles);
    const file = new FileReader();
    file.onload = function () {
      setPreview(file.result);
    };
    file.readAsDataURL(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  return (
    <>
      <div className={`${containerClass}`}>
        <p className="text-[#767676] fw-500 mb-2">{label}</p>
        {disabled && (
          <div className="w-full border bg-white border-gray-400 rounded-lg min-h-[120px] p-4 flex justify-between items-center">
            {preview &&
              (Array.isArray(prevValue) ? (
                <div className="flex gap-x-1">
                  {prevValue.map((item) => (
                    <img
                      src={item}
                      alt="Upload preview"
                      className="w-24 mx-auto"
                      width={200}
                      height={200}
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={preview as string}
                  alt="Upload preview"
                  className="w-24 mx-auto"
                  width={200}
                  height={200}
                />
              ))}
          </div>
        )}
        {!disabled && (
          <div
            {...getRootProps()}
            className="w-full border bg-white border-gray-400 rounded-lg min-h-[120px] p-4 flex justify-between items-center"
          >
            <input {...getInputProps()} disabled={disabled} />
            {preview ? (
              ""
            ) : isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <div className="flex items-center gap-x-4">
                <div className="w-12 h-12 rounded-[5px] bg-[#FFE2D0] grid place-content-center">
                  <AiFillPicture className="text-[#B3561B] text-xl" />
                </div>
                <p className="text-[#767676] fs-400">
                  Drop files here or browse pictures to upload. Max 1MB
                </p>
              </div>
            )}
            {preview &&
              (Array.isArray(prevValue) ? (
                <div className="flex gap-x-1">
                  {prevValue.map((item) => (
                    <img
                      src={item}
                      alt="Upload preview"
                      className="w-24 mx-auto"
                      width={200}
                      height={200}
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={preview as string}
                  alt="Upload preview"
                  className="w-24 mx-auto"
                  width={200}
                  height={200}
                />
              ))}
            <div>
              <div className="border border-[#D2D2D2] rounded-[4px] px-7 py-2 lg:px-12 cursor-pointer">
                <p>Browse</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageInput;
