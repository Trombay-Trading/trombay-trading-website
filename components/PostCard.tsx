import Link from 'next/link';
import CoverImage from '@/components/CoverImage';
import getFormattedDate from '@/lib/getFormattedDate';
import { BlogPost } from '@/lib/posts';

export default function PostCard({ post }: { post: BlogPost }) {
    const formattedDate = getFormattedDate(post.date);

    return (
        <article className="group relative flex flex-col bg-brand-50 rounded-xl border border-brand-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden">
            <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
                <span className="sr-only">View {post.title}</span>
            </Link>

            <div className="w-full aspect-[16/9] relative bg-brand-200">
                <CoverImage src={post.coverImage} alt={post.title} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>

            <div className="flex flex-col flex-1 p-6 gap-3">
                <h3 className="text-xl font-serif font-semibold text-brand-900 group-hover:text-brand-500 transition-colors line-clamp-2 mt-2">
                    {post.title}
                </h3>

                <p className="text-sm text-brand-700 line-clamp-2 mb-2">
                    {post.subtitle}
                </p>

                <div className="flex items-center gap-3 text-xs font-medium text-brand-600 uppercase tracking-widest mt-auto pt-4 border-t border-brand-200/50">
                    <time dateTime={post.date}>{formattedDate}</time>
                    <span className="text-brand-300">&bull;</span>
                    <span>{post.readTime}</span>
                </div>
            </div>
        </article>
    );
}
