
import LoadMorePosts from "@/components/LoadMorePosts";
import PostSection from "@/components/PostSection";
import { Suspense } from "react";
import { ThreeDot } from "react-loading-indicators";

export default async function Home() {




  return (
    <div className="bg-slate-50 dark:bg-zinc-950 text-zinc-950 dark:text-gray-200">
      <div className="h-12 bg-slate-50 dark:bg-zinc-950"></div>
      <Suspense fallback={<ThreeDot color="#7A1CAC" size="medium" text="" textColor="" />}>
        <PostSection />
      </Suspense>
      <LoadMorePosts />
    </div>
  );
}
