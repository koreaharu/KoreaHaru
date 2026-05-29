import { NextResponse } from 'next/server';
import { getPublishedPosts } from '@/lib/blog-data';

export async function GET() {
  try {
    const posts = getPublishedPosts();
    
    // Fallback base URL for the live website
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://korea-haru.vercel.app';
    
    // Map relative image paths to absolute URLs so Instagram/Facebook APIs can fetch them successfully
    const formattedPosts = posts.map(post => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      publishedAt: post.publishedAt,
      author: post.author,
      readingTime: post.readingTime,
      coverImageUrl: post.coverImage.startsWith('http') 
        ? post.coverImage 
        : `${baseUrl}${post.coverImage}`,
      postUrl: `${baseUrl}/blog/${post.slug}`
    }));

    return NextResponse.json(formattedPosts, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=59',
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Failed to generate latest posts API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch latest posts' }, 
      { status: 500 }
    );
  }
}
