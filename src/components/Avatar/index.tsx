import { FC } from "react";
import BoringAvatar from "boring-avatars";

const Avatar: FC = () => {
  return (
    <BoringAvatar
      size={50}
      variant="beam"
      colors={["#F04155", "#FF823A", "#F2F26F", "#FFF7BD", "#95CFB7"]}
    />
  );
};

export default Avatar;
