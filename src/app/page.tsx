import CountUpAnimation from "@/components/countup";
import SocialLoginButton from "@/components/social-login";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="w-screen h-[85vh] flex justify-center">
      <div className="w-full lg:px-44 py-12 flex flex-col items-center gap-4 my-auto">
        <h2 className="font-bold lg:text-7xl text-4xl lg:w-2/3 text-center tracking-[-.05em]">
          Join Us on a Quest. <br />
          Reinvent social media.
        </h2>
        <p className="lg:text-lg text-sm text-zinc-200 lg:w-2/3 w-4/5 text-center tracking-[-.03em]">
          Fiesta is not just an app; it is a cultural revolution—a movement
          reshaping how we connect and celebrate together.
        </p>
        <h1 className="font-bold tracking-[-.05em] lg:text-8xl text-6xl italic py-8">
          <CountUpAnimation duration={1000}>1401</CountUpAnimation>{" "}
          <span className="text-2xl tracking-normal font-semibold not-italic">
            joined
          </span>
        </h1>
        <div className="flex gap-4">
          <SocialLoginButton type="Instagram" />
          <SocialLoginButton type="Snapchat" />
        </div>
      </div>
    </div>
  );
};

export default Page;
