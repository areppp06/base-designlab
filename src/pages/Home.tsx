import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ImageGallery from '@/components/ui/image-gallery'
import LoovenBentoGrid from '@/components/ui/bento'
import { PortfolioGallery } from '@/components/ui/portfolio-gallery'
import { portfolioPreviewImages } from '@/data/gallery-images'

import hero1 from '@/assets/hero/hero_1.png'
import hero2 from '@/assets/hero/hero_2.png'
import hero3 from '@/assets/hero/hero_3.png'
import hero4 from '@/assets/hero/hero_4.png'
import hero5 from '@/assets/hero/hero_5.png'
import hero6 from '@/assets/hero/hero_6.png'

const heroImages = [
  { src: hero1, alt: 'BASE DESIGN LAB project 1' },
  { src: hero2, alt: 'BASE DESIGN LAB project 2' },
  { src: hero3, alt: 'BASE DESIGN LAB project 3' },
  { src: hero4, alt: 'BASE DESIGN LAB project 4' },
  { src: hero5, alt: 'BASE DESIGN LAB project 5' },
  { src: hero6, alt: 'BASE DESIGN LAB project 6' },
]

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
    return () => window.clearTimeout(t)
  }, [location.hash, location.pathname])

  return (
    <>
      <div id="home">
        <ImageGallery
          variant="hero"
          title="BASE DESIGN LAB"
          subtitle="Design | Build | Architect"
          tagline="Crafted spaces for everyday living"
          images={heroImages}
        />
      </div>

      <LoovenBentoGrid />

      <PortfolioGallery
        title="Our Work"
        archiveButton={{ text: 'Explore Gallery', href: '/gallery' }}
        images={portfolioPreviewImages}
      />

      <section
        id="about"
        className="border-t border-[var(--color-border)] py-16 md:py-24 px-4 bg-white/40"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About</h2>
          <p className="mt-3 text-sm text-[var(--color-muted)]">
            About BASE DESIGN LAB content coming soon.
          </p>
        </div>
      </section>
    </>
  )
}
