import prisma from "@/lib/db";

export default async function Home() {

  const data = await prisma.post.findMany();




  return (
    <div>
      {data.map((data, i) => {
        return <h1 key={i}>{data.title}</h1>
      })}
    </div>
  );
}
