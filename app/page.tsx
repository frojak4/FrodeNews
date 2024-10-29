
import LoadMorePosts from "@/components/LoadMorePosts";
import PostSection from "@/components/PostSection";
import { Suspense } from "react";
import { ThreeDot } from "react-loading-indicators";

export default async function Home() {




  return (
    <div className="bg-slate-50 dark:bg-zinc-950 text-zinc-950 dark:text-gray-200">

      <Suspense fallback={<div className="flex justify-center"><ThreeDot color="#7A1CAC" size="medium" text="" textColor="" /></div>}>
        <PostSection />
      </Suspense>
      <LoadMorePosts />
    </div>
  );
}
