import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PortfolioGalleryProps {
  title?: string
  archiveButton?: {
    text: string
    href: string
  }
  images?: Array<{
    src: string
    alt: string
    title?: string
  }>
  className?: string
  maxHeight?: number
  spacing?: string
  onImageClick?: (index: number) => void
  pauseOnHover?: boolean
  marqueeRepeat?: number
}

const defaultImages = [
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    alt: 'Living space',
  },
  {
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    alt: 'Interior design',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    alt: 'Modern lounge',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    alt: 'Kitchen',
  },
  {
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    alt: 'Bedroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    alt: 'Minimal interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cd00?auto=format&fit=crop&w=800&q=80',
    alt: 'Dining room',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    alt: 'Office space',
  },
  {
    src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    alt: 'Retail interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    alt: 'Bespoke furniture',
  },
]

export function PortfolioGallery({
  title = 'Gallery',
  archiveButton = {
    text: 'Explore Gallery',
    href: '/gallery',
  },
  images: customImages,
  className = '',
  maxHeight = 120,
  spacing = '-space-x-72 md:-space-x-80',
  onImageClick,
  pauseOnHover = true,
  marqueeRepeat = 4,
}: PortfolioGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const images = customImages || defaultImages

  return (
    <section
      aria-label={title}
      className={cn('relative py-16 md:py-24 px-4 sm:px-6', className)}
      id="gallery"
    >
      <div className="max-w-7xl mx-auto bg-[var(--color-background)]/50 backdrop-blur-sm rounded-2xl border border-[var(--color-border)] overflow-hidden">
        <div className="relative z-10 text-center pt-12 md:pt-16 pb-8 px-6 md:px-8">
          <p className="text-[10px] md:text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-accent)] mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-foreground)] mb-8 tracking-tight">
            {title}
          </h2>

          <Link
            to={archiveButton.href}
            className="inline-flex items-center gap-3 bg-[var(--color-foreground)] text-[var(--color-background)] px-6 py-3 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-[var(--color-accent)] transition-colors group mb-12 md:mb-16"
          >
            <span>{archiveButton.text}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Desktop 3D overlapping layout */}
        <div className="hidden md:block relative overflow-hidden h-[400px] -mb-[200px]">
          <div className={`flex ${spacing} pb-8 pt-40 items-end justify-center`}>
            {images.map((image, index) => {
              const totalImages = images.length
              const middle = Math.floor(totalImages / 2)
              const distanceFromMiddle = Math.abs(index - middle)
              const staggerOffset = maxHeight - distanceFromMiddle * 20
              const zIndex = totalImages - index
              const isHovered = hoveredIndex === index
              const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index
              const yOffset = isHovered ? -120 : isOtherHovered ? 0 : -staggerOffset

              return (
                <motion.div
                  key={index}
                  className="group cursor-pointer flex-shrink-0"
                  style={{ zIndex }}
                  initial={{
                    transform: `perspective(5000px) rotateY(-45deg) translateY(200px)`,
                    opacity: 0,
                  }}
                  animate={{
                    transform: `perspective(5000px) rotateY(-45deg) translateY(${yOffset}px)`,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => onImageClick?.(index)}
                >
                  <div
                    className="relative aspect-video w-64 md:w-80 lg:w-96 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105"
                    style={{
                      boxShadow: `
                        rgba(0, 0, 0, 0.01) 0.796192px 0px 0.796192px 0px,
                        rgba(0, 0, 0, 0.03) 2.41451px 0px 2.41451px 0px,
                        rgba(0, 0, 0, 0.08) 6.38265px 0px 6.38265px 0px,
                        rgba(0, 0, 0, 0.25) 20px 0px 20px 0px
                      `,
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-left-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile marquee */}
        <div className="block md:hidden relative pb-8">
          <div
            className={cn(
              'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
              'flex-row',
            )}
          >
            {Array(marqueeRepeat)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex shrink-0 justify-around [gap:var(--gap)]',
                    'animate-marquee flex-row',
                    {
                      'group-hover:[animation-play-state:paused]': pauseOnHover,
                    },
                  )}
                >
                  {images.map((image, index) => (
                    <div
                      key={`${i}-${index}`}
                      className="group cursor-pointer flex-shrink-0"
                      onClick={() => onImageClick?.(index)}
                    >
                      <div
                        className="relative aspect-video w-64 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105"
                        style={{
                          boxShadow: `
                            rgba(0, 0, 0, 0.01) 0.796192px 0px 0.796192px 0px,
                            rgba(0, 0, 0, 0.03) 2.41451px 0px 2.41451px 0px,
                            rgba(0, 0, 0, 0.08) 6.38265px 0px 6.38265px 0px,
                            rgba(0, 0, 0, 0.25) 20px 0px 20px 0px
                          `,
                        }}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover object-left-top"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
