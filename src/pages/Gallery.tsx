import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MessageCircle } from 'lucide-react'
import { ParallaxScrollSecond } from '@/components/ui/parallax-scroll'
import { galleryImageUrls } from '@/data/gallery-images'

export default function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const endContent = (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-lg mx-auto">
      <Link
        to="/"
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[var(--color-foreground)] text-[var(--color-foreground)] text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back home
      </Link>
      <a
        href="https://wa.me/60164233802"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--color-foreground)] text-[var(--color-background)] text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-[var(--color-accent)] transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        Get quote
      </a>
    </div>
  )

  return (
    <main className="h-full w-full bg-[var(--color-background)]">
      <ParallaxScrollSecond
        images={galleryImageUrls}
        className="bg-[var(--color-background)]"
        endContent={endContent}
      />
    </main>
  )
}
