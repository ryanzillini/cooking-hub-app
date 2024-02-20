import { api } from "@/trpc/server";
import Image from "next/image";
// import { useState } from "react";
import cooking from "../../../public/cooking-pic.jpeg";

export default async function Page() {
  // const [signedIn, setSignedIn] = useState(false);
  const user = await api.account.welcome.query();
  return (
    <>
      <div className="flex h-80 w-full items-center justify-center gap-10">
        <Image src={cooking} alt="user-image" width={100} height={100} />
        <h1 className="text-4xl font-semibold">Hello {user?.name}</h1>
      </div>
    </>
  );
}

const savedVids = ["1", "2", "3"];
