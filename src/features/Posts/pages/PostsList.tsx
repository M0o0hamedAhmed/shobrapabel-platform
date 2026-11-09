import { useEffect, useState } from "react";
import type { PostProps } from "../../../types/PostProps";

function PostsList() {
    const [posts,setPosts] = useState<PostProps[]>([]);
    const [loading,setLoading] = useState<boolean>(true);
    const [error,setError] = useState<string | null>(null);

    useEffect(() => {
        let ignoreResult = false;

        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: PostProps[] = await response.json();
                if (!ignoreResult) {
                    setPosts(data);
                }
            } catch {
                if (!ignoreResult) {
                    setError('Failed to fetch posts');
                }
            } finally {
                if (!ignoreResult) {
                    setLoading(false);
                }
            }
        };

        void fetchPosts();

        return () => {
            ignoreResult = true;
        };
    }, []);
    return (
        <div className="posts-list">
            <h2>Posts</h2>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && posts.length === 0 && <p>No posts available.</p>}
            {!loading && !error && posts.length > 0 && (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
         
        </div>
    );
}
export default PostsList;
