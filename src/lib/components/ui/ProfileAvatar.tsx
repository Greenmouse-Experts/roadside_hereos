import React from "react";

interface Props {
  url?: string | null;
  name?: string;
  size?: number;
  font?: number;
  square?: boolean;
}
const ProfileAvatar: React.FC<Props> = ({ url, name, size, font, square }) => {
  const nameRow = name?.split(" ");
  const firstLetter = nameRow && nameRow[0]?.charAt(0);
  const lastLetter = nameRow && nameRow?.length > 1 && nameRow[1]?.charAt(0);
  if (url?.trim()) {
    return (
      <>
        <img
          src={url}
          alt="profile"
          width={size}
          height={size}
          className={
            square
              ? "aspect-square object-cover"
              : "circle object-cover aspect-square"
          }
        />
      </>
    );
  } else
    return (
      <div
        className={`${square ? "" : "circle"} relative border-2 flex gap-x-[1px] justify-center items-center fw-600 bg-primary text-white`}
        style={{ width: size, height: size }}
      >
        <p style={{ fontSize: font }} className="uppercase">
          {firstLetter}
        </p>
        <p style={{ fontSize: font }} className="uppercase">
          {lastLetter}
        </p>
      </div>
    );
};

export default ProfileAvatar;
