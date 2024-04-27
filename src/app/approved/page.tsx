import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Page = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: any;
}) => {
  const cookieStore = cookies();
  const code = searchParams.code;

  if (code) {
    cookieStore.set("instagram", code);
    redirect("/");
  } else {
    return <>Error</>;
  }
};

export default Page;
