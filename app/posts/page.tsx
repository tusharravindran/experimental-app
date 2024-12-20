import React from 'react';
import { config } from '@/config/config';

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  created_at: string;
};

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(`${config.apiUrl}/content/posts/?key=${config.apiKey}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.statusText}`);
    }
    const data = await res.json();
    console.log('xxx', data);
    return data.posts as Post[];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

const About: React.FC = async () => {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-1 gap-4 p-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <a 
              href={`/posts/${post.id}`}  
              className="text-2xl font-semibold text-blue-600 hover:underline"
            >
              {post.title}
            </a>
            <p className="text-gray-700 mt-2">{post.excerpt}</p>
            <p className="text-sm text-gray-500 mt-4">
              Published on: {new Date(post.created_at).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
