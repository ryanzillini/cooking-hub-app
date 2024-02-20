import { unstable_noStore as noStore } from "next/cache";
import { CreatePost } from "@/app/_components/create-post";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import Image from "next/image";
import picture from "public/cooking-pic.jpeg";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <div className="flex h-full w-full flex-col">
      <div className="relative mt-5 h-[500px] w-full">
        <Image
          src={picture}
          alt="sabrina-witch"
          className="absolute h-full w-full object-cover mix-blend-overlay"
        />
        <div className="mt-20">
          <h1 className="text-center font-serif text-4xl font-extrabold text-white">
            Welcome to the Cooking-Hub
          </h1>
          <h2 className="mt-5 text-center font-serif text-2xl font-semibold text-white">
            The hub for chefs and recipes around the world, right at the click
            of a button
          </h2>
        </div>
      </div>
      <div>
        <h2 className="font-serif text-3xl">
          Discover New Dishes cusines around the world
        </h2>
      </div>
      <div>
        <h2 className="font-serif text-3xl">
          Create your own recipes and content
        </h2>
      </div>
    </div>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
