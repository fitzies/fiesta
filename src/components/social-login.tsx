import { FaInstagram, FaSnapchatGhost } from "react-icons/fa";
import { Button } from "./ui/button";

// Define an object to map social media types to icons
const socialMediaIcons = {
  Instagram: FaInstagram,
  Snapchat: FaSnapchatGhost,
  // Add more social media types and their icons here
};

type SocialLoginProps = keyof typeof socialMediaIcons;

const SocialLoginButton = ({ type }: { type: SocialLoginProps }) => {
  const Icon = socialMediaIcons[type]; // Get the icon component dynamically

  return (
    <Button
      className={`text-lg px-3 gap-2 flex items-center ${
        type === "Snapchat"
          ? "bg-yellow-300 text-white hover:bg-yellow-400"
          : "bg-white text-black"
      }`}
    >
      {Icon && <Icon className="text-2xl" />} {/* Render the icon */}
      <p className="font-semibold">{type}</p>
    </Button>
  );
};

export default SocialLoginButton;
