import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug } from '@/lib/blog-data';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { buildMetadata } from '@/lib/seo';
import { ArrowLeft, Clock, Calendar, User, Compass, MessageSquare } from 'lucide-react';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return buildMetadata({
    title: `${post.title} · KoreaHaru Journal`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.coverImage,
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Section className="min-h-screen bg-cream-50/20 py-12 md:py-20 relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Back Link */}
        <div className="mb-10">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-500 hover:text-gold-600 transition-colors group"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Back to Journal
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-3xl mb-12">
          <div className="flex items-center gap-3.5 mb-5">
            <Badge tone="sage">{post.category}</Badge>
            <span className="text-[10px] uppercase tracking-wider text-ink-400 font-bold flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.readingTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-light text-ink-900 leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 border-t border-cream-200/60 pt-6 text-xs text-ink-500">
            <span className="flex items-center gap-1.5 font-medium">
              <User className="h-3.5 w-3.5 text-gold-600" /> By {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-gold-600" /> Published {post.publishedAt}
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[21/9] w-full min-h-[280px] md:min-h-[450px] overflow-hidden border border-cream-200 shadow-lg mb-16 rounded-sm">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        {/* Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Article Body */}
          <article className="lg:col-span-8 bg-white/40 backdrop-blur-sm border border-cream-200/50 p-8 md:p-12 rounded-sm shadow-sm">
            <div 
              className="blog-content w-full"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Sidebar CTA Card */}
          <aside className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-ink-950 text-cream-50 p-8 border border-cream-100/10 rounded-sm shadow-xl relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <Compass className="h-8 w-8 text-gold-400 mb-6" />
              
              <h3 className="font-serif text-xl font-normal text-cream-50 mb-3">
                Experience this Journey
              </h3>
              
              <p className="text-xs text-cream-200/70 leading-relaxed mb-6 font-light">
                Our bespoke concierge service arranges private, quiet excursions to the hidden coastal gems of Yeongdo and traditional culinary landmarks across Busan. 
                Enjoy custom itineraries, English-speaking chauffeurs, and hand-picked local retreats.
              </p>

              <div className="space-y-3.5 pt-4 border-t border-cream-100/10">
                <Button href="/booking" variant="primary" className="w-full text-center py-3">
                  Book Direct Service
                </Button>
                <Button href="/contact" variant="inverse" className="w-full text-center py-3 flex items-center justify-center gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5" /> Contact Concierge
                </Button>
              </div>
            </div>

            {/* General Trust Note */}
            <div className="bg-cream-100/40 border border-cream-200 p-5 rounded-sm text-left text-[11px] text-ink-600 leading-relaxed font-light">
              🔒 <strong>KoreaHaru Direct Booking Guarantee</strong>: 
              We operate exclusively through local, vetted providers. All custom programs feature full flexible cancellations and 24/7 dedicated support.
            </div>
          </aside>

        </div>
      </Container>
    </Section>
  );
}
