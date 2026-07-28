import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

export type GalleryImage = {
  src: string
  alt?: string
}

type ImageGalleryProps = {
  title?: string
  subtitle?: string
  tagline?: string
  images: GalleryImage[]
  className?: string
  variant?: 'hero' | 'section'
}

/**
 * Expand-on-hover image gallery (desktop) / auto-scrolling strip (mobile).
 */
export default function ImageGallery({
  title = 'BASE DESIGN LAB',
  subtitle = 'Moment of best creation',
  tagline = 'Design | Build | Architect',
  images,
  className,
  variant = 'hero',
}: ImageGalleryProps) {
  const isHero = variant === 'hero'
  const scrollerRef = useRef<HTMLDivElement>(null)
  const pauseRef = useRef(false)
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Continuous rAF auto-scroll for mobile/tablet strip
  useEffect(() => {
    let raf = 0
    let last = performance.now()
    const speed = 45 // px per second

    const tick = (now: number) => {
      const el = scrollerRef.current
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now

      if (el && !pauseRef.current) {
        // only auto-scroll when this strip is laid out (mobile/tablet)
        const visible = el.offsetParent !== null && el.clientWidth > 0
        if (visible) {
          const max = el.scrollWidth - el.clientWidth
          if (max > 2) {
            let next = el.scrollLeft + speed * dt
            if (next >= max - 0.5) next = 0
            el.scrollLeft = next
          }
        }
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      if (resumeTimer.current) clearTimeout(resumeTimer.current)
    }
  }, [images.length])

  const pauseAuto = () => {
    pauseRef.current = true
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
  }

  const scheduleResume = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => {
      pauseRef.current = false
    }, 2000)
  }

  // Duplicate once so loop feels continuous on short sets
  const mobileSlides = [...images, ...images]

  return (
    <section
      className={cn(
        'w-full flex flex-col items-center justify-start',
        isHero ? 'pt-6 pb-10 md:pt-10 md:pb-16' : 'py-12 md:py-16',
        className,
      )}
    >
      <div className="max-w-3xl text-center px-4">
        <p className="text-[10px] md:text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-accent)] mb-3">
          Gallery
        </p>
        <h1
          className={cn(
            'font-semibold tracking-tight text-[var(--color-foreground)]',
            isHero
              ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
              : 'text-2xl sm:text-3xl md:text-4xl',
          )}
        >
          {title}
        </h1>
        <p
          className={cn(
            'text-[var(--color-muted)] mt-3 md:mt-4 max-w-xl mx-auto leading-relaxed',
            isHero ? 'text-sm sm:text-base md:text-lg' : 'text-sm',
          )}
        >
          {subtitle}
        </p>
        {tagline ? (
          <p className="mt-4 text-[11px] sm:text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-foreground)]/80">
            {tagline}
          </p>
        ) : null}
      </div>

      {/* Mobile / tablet: auto-scroll + manual, no scrollbar, no snap (snap blocks auto) */}
      <div className="mt-8 md:mt-10 w-full lg:hidden">
        <div
          ref={scrollerRef}
          className="flex gap-3 overflow-x-auto px-4 pb-1 scrollbar-hide touch-pan-x"
          style={{ WebkitOverflowScrolling: 'touch' }}
          onPointerDown={pauseAuto}
          onTouchStart={pauseAuto}
          onWheel={pauseAuto}
          onPointerUp={scheduleResume}
          onTouchEnd={scheduleResume}
          onMouseLeave={scheduleResume}
        >
          {mobileSlides.map((img, idx) => (
            <div
              key={`${img.src}-${idx}`}
              className="relative shrink-0 w-[78vw] sm:w-[55vw] md:w-[42vw] h-[320px] sm:h-[380px] rounded-xl overflow-hidden"
            >
              <img
                className="h-full w-full object-cover object-center pointer-events-none"
                src={img.src}
                alt={img.alt ?? `BASE DESIGN LAB project ${(idx % images.length) + 1}`}
                loading={idx === 0 ? 'eager' : 'lazy'}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: hover-expand gallery */}
      <div className="hidden lg:flex items-center gap-2 h-[420px] xl:h-[480px] w-full max-w-6xl mt-10 px-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative group flex-grow transition-all w-40 xl:w-48 rounded-lg overflow-hidden h-full duration-500 hover:w-full"
          >
            <img
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              src={img.src}
              alt={img.alt ?? `BASE DESIGN LAB project ${idx + 1}`}
              loading={idx < 2 ? 'eager' : 'lazy'}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  )
}
