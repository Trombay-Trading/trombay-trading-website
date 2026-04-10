import { getSortedPostsData } from '@/lib/posts';
import BlogHero from '@/components/BlogHero';
import BlogCTA from '@/components/BlogCTA';
import FeaturedPost from '@/components/FeaturedPost';
import PostCard from '@/components/PostCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | Trombay Trading',
    description: 'Explore our latest analyses, global trade updates, and strategic manufacturing insights from industry experts.',
};

export const revalidate = 60;

export default function BlogPage() {
    const posts = getSortedPostsData();
    const featuredPosts = posts.slice(0, 2);
    const recentPosts = posts.slice(2);

    return (
        <div className="bg-brand-50 min-h-screen pb-16">
            <BlogHero />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">

                {featuredPosts.length > 0 && (
                    <section>
                        <div className="mb-10 text-center sm:text-left">
                            <h2 className="text-3xl font-serif font-bold text-brand-900">Featured Insights</h2>
                            <div className="h-1 w-12 bg-brand-500 mt-4 mx-auto sm:mx-0"></div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {featuredPosts.map(post => (
                                <FeaturedPost key={post.slug} post={post} />
                            ))}
                        </div>
                    </section>
                )}

                {recentPosts.length > 0 && (
                    <section>
                        <div className="mb-10 text-center sm:text-left">
                            <h2 className="text-3xl font-serif font-bold text-brand-900">Latest Articles</h2>
                            <div className="h-1 w-12 bg-brand-500 mt-4 mx-auto sm:mx-0"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {recentPosts.map(post => (
                                <PostCard key={post.slug} post={post} />
                            ))}
                        </div>
                    </section>
                )}

                {posts.length === 0 && (
                    <div className="text-center py-24 text-brand-600">
                        <p className="text-xl font-serif">No posts yet. Check back soon.</p>
                    </div>
                )}
            </div>

            <BlogCTA />
        </div>
    );
}
