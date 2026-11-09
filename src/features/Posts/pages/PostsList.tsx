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
        <section className="posts-page" aria-labelledby="posts-page-heading">
            <header className="posts-hero">
                <div className="posts-hero__copy">
                    <span className="posts-hero__eyebrow">تجربة API</span>
                    <h1 id="posts-page-heading">منشورات المجتمع</h1>
                    <p>نتعلم جلب البيانات وعرضها داخل واجهة شبرابابل.</p>
                </div>
                <span className="posts-hero__source">
                    <span className="posts-hero__source-dot" aria-hidden="true" />
                    JSONPlaceholder API
                </span>
            </header>

            <section className="posts-feed" aria-labelledby="posts-feed-heading">
                <div className="posts-feed__heading">
                    <div>
                        <h2 id="posts-feed-heading">أحدث المنشورات</h2>
                        <p>بيانات تجريبية يتم جلبها مباشرة من API.</p>
                    </div>
                    {!loading && !error && posts.length > 0 && (
                        <span className="posts-count">{posts.length} منشورات</span>
                    )}
                </div>

                {loading && (
                    <div className="posts-skeleton-list" role="status" aria-label="جارٍ تحميل المنشورات">
                        {Array.from({ length: 3 }, (_, index) => (
                            <div className="post-skeleton" key={index} aria-hidden="true">
                                <span className="post-skeleton__number" />
                                <span className="post-skeleton__content">
                                    <span />
                                    <span />
                                    <span />
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {error && (
                    <div className="posts-state posts-state--error" role="alert">
                        <span className="posts-state__icon" aria-hidden="true">!</span>
                        <h3>تعذر تحميل المنشورات</h3>
                        <p>{error}</p>
                    </div>
                )}

                {!loading && !error && posts.length === 0 && (
                    <div className="posts-state">
                        <span className="posts-state__icon" aria-hidden="true">✦</span>
                        <h3>لا توجد منشورات حاليًا</h3>
                        <p>ستظهر المنشورات هنا عند توفرها.</p>
                    </div>
                )}

                {!loading && !error && posts.length > 0 && (
                    <ul className="posts-grid">
                        {posts.map((post, index) => (
                            <li className="post-card" key={post.id}>
                                <span className="post-card__number" aria-hidden="true">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div className="post-card__content">
                                    <span className="post-card__label">منشور مجتمعي</span>
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
                                </div>
                                <span className="post-card__arrow" aria-hidden="true">↙</span>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </section>
    );
}
export default PostsList;
