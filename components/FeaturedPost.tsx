import Link from 'next/link';
import CoverImage from '@/components/CoverImage';
import getFormattedDate from '@/lib/getFormattedDate';
import { BlogPost } from '@/lib/posts';

export default function FeaturedPost({ post }: { post: BlogPost }) {
    const formattedDate = getFormattedDate(post.date);

    return (
        <article className="group bg-brand-50 rounded-xl border border-brand-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col md:flex-row overflow-hidden relative">
            <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
                <span className="sr-only">View {post.title}</span>
            </Link>

            <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto relative bg-brand-200">
                <CoverImage src={post.coverImage} alt={post.title} sizes="(max-width: 768px) 100vw, 40vw" />
            </div>

            <div className="flex flex-col flex-1 p-8 justify-between">
                <div>
                    <h2 className="text-3xl font-serif font-semibold tracking-tight text-brand-900 group-hover:text-brand-500 transition-colors mb-4 line-clamp-2 mt-4 md:mt-0">
                        {post.title}
                    </h2>
                    <p className="text-brand-700 leading-relaxed mb-8 line-clamp-3">
                        {post.subtitle}
                    </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-medium text-brand-600 uppercase tracking-widest mt-auto">
                    <time dateTime={post.date}>{formattedDate}</time>
                    <span className="text-brand-300">&bull;</span>
                    <span>{post.readTime}</span>
                </div>
            </div>
        </article>
    );
}
