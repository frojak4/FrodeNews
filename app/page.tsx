import PostSection from "@/components/PostSection";
import prisma from "@/lib/db";

export default async function Home() {

  const data = await prisma.post.findMany();




  return (
    <div className="bg-slate-50 dark:bg-zinc-950 text-zinc-950 dark:text-gray-200">
      <PostSection />
      <PostSection />
      <PostSection />
      <PostSection />
    </div>
  );
}
