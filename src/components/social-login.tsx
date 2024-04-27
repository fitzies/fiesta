"use client";

import { useSearchParams } from "next/navigation";
import { FaInstagram, FaSnapchatGhost } from "react-icons/fa";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

// Define an object to map social media types to icons
const socialMediaIcons = {
  Instagram: FaInstagram,
  Snapchat: FaSnapchatGhost,
  // Add more social media types and their icons here
};

type SocialLoginProps = keyof typeof socialMediaIcons;

const SocialLoginButton = ({ type }: { type: SocialLoginProps }) => {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const Icon = socialMediaIcons[type]; // Get the icon component dynamically

  const code = searchParams.get("code");
  localStorage.setItem("code", code ?? "");

  return (
    <Button
      onClick={() => {
        if (type === "Snapchat") {
          toast({
            title: "We have not implemented Snapchat yet",
          });
        }
        if (type === "Instagram" && !code) {
          router.replace(
            "https://api.instagram.com/oauth/authorize?client_id=1702882570243063&redirect_uri=https://fiesta-delta.vercel.app/&scope=user_profile,user_media&response_type=code"
          );
        }
      }}
      className={`text-md px-3 gap-2 flex items-center ${
        type === "Snapchat"
          ? "bg-yellow-300 text-white hover:bg-yellow-400"
          : "bg-white text-black"
      }`}
    >
      {Icon && <Icon className="text-xl" />} {/* Render the icon */}
      <p className="font-semibold">
        {type === "Instagram" && code ? "Connected" : type}
      </p>
    </Button>
  );
};

export default SocialLoginButton;
