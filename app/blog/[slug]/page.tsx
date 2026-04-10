import { getSortedPostsData, getPostData } from '@/lib/posts';
import getFormattedDate from '@/lib/getFormattedDate';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import type { Metadata } from 'next';

export function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts
        .filter(post => typeof post.slug === 'string' && post.slug.length > 0)
        .map(post => ({ slug: post.slug }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const posts = getSortedPostsData();
    const post = posts.find(p => p.slug === slug);

    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | Trombay Trading`,
        description: post.excerpt ?? `Read ${post.title} on the Trombay Trading blog.`,
        openGraph: {
            title: post.title,
            description: post.excerpt ?? `Read ${post.title} on the Trombay Trading blog.`,
            type: 'article',
            publishedTime: post.date,
            authors: ['Trombay Trading'],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt ?? `Read ${post.title} on the Trombay Trading blog.`,
        },
    };
}

export default async function BlogPostPage(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const posts = getSortedPostsData();

    if (!posts.find(p => p.slug === slug)) {
        return notFound();
    }

    const postData = await getPostData(slug);
    const pubDate = getFormattedDate(postData.date);

    return (
        <div className="bg-brand-50 min-h-screen">
            <article className="max-w-3xl mx-auto px-6 py-16 lg:py-24">

                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-brand-500 hover:text-brand-400 transition-colors mb-12"
                >
                    <FaArrowLeft className="w-3 h-3" />
                    Back to Blog
                </Link>

                <header className="mb-14">
                    <div className="border-l-4 border-brand-500 pl-6">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-brand-900 mb-4 leading-tight">
                            {postData.title}
                        </h1>

                        {postData.subtitle && (
                            <p className="text-xl text-brand-600 mb-6 leading-relaxed">
                                {postData.subtitle}
                            </p>
                        )}

                        <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-widest text-brand-600">
                            <span className="text-brand-900 font-semibold">Trombay Insights</span>
                            <span className="text-brand-300">|</span>
                            <time dateTime={postData.date}>{pubDate}</time>
                            <span className="text-brand-300">|</span>
                            <span>{postData.readTime}</span>
                        </div>
                    </div>
                </header>

                <div
                    className="prose prose-lg max-w-none
                    prose-headings:font-serif prose-headings:font-bold prose-headings:text-brand-900
                    prose-p:text-brand-800 prose-p:leading-relaxed
                    prose-a:text-brand-500 prose-a:no-underline hover:prose-a:underline
                    prose-img:rounded-xl prose-img:border prose-img:border-brand-200 prose-img:shadow-sm
                    prose-ul:text-brand-800 prose-ol:text-brand-800
                    prose-strong:text-brand-900"
                    dangerouslySetInnerHTML={{ __html: postData.content ?? '' }}
                />

            </article>
        </div>
    );
}
