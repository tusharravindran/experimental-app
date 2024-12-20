import React from 'react';
import { config } from '@/config/config';

type Post = {
  id: string;
  title: string;
  slug: string;
  html: string;
  feature_image_caption?: string;
  feature_image: string;
  url: string;
  created_at: string;
} | null;

async function getPostById(id: string): Promise<Post> {
  try {
    const res = await fetch(`${config.apiUrl}/content/posts/${id}/?key=${config.apiKey}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch post: ${res.statusText}`);
    }
    const data = await res.json();

    return data.posts[0]; 
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

const PostPage: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const post = await getPostById(params.id);
  
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      {post.feature_image && (
        <div className="">
          <img
            src={post.feature_image} 
            className="rounded-md"
          />
        </div>
      )}
      <div className="headingImage" dangerouslySetInnerHTML={{ __html: post?.feature_image_caption || '' }} />
      <div className="text-sm text-gray-500 mb-4">
        Published on {new Date(post.created_at).toLocaleDateString()}
      </div>
      <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export default PostPage;
