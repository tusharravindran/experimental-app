import api  from "../lib/api";

export default async function About() {
  console.log('api', api)
  const posts = await api.posts.browse({filter: 'featured:true'});
  console.log('posts', posts)
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <p>rfer gfh</p>
        {}
      </div>
    );
}
  