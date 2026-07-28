import type { ReactNode } from 'react'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

export type BentoCardProps = {
  dark?: boolean
  className?: string
  eyebrow: ReactNode
  title: ReactNode
  description: ReactNode
  graphic?: ReactNode
  fade?: ('top' | 'bottom')[]
}

export function BentoCard({
  dark = false,
  className = '',
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: BentoCardProps) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'group relative flex flex-col overflow-hidden rounded-2xl',
        'bg-[#1a1a1a] shadow-sm ring-1 ring-black/10',
        'transform-gpu transition-shadow duration-300 hover:shadow-xl',
      )}
    >
      <div className="relative h-[16rem] sm:h-[20rem] lg:h-[22rem] shrink-0">
        {graphic}
        {fade.includes('top') && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-50% opacity-40" />
        )}
        {fade.includes('bottom') && (
          <div className="absolute inset-0 bg-gradient-to-t from-black to-50% opacity-50" />
        )}
      </div>
      <div className="relative z-20 isolate mt-[-100px] min-h-[12rem] p-6 sm:p-8 backdrop-blur-xl text-white bg-gradient-to-t from-black/90 via-black/70 to-transparent">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d4c4a8]">
          {eyebrow}
        </p>
        <p className="mt-2 text-xl sm:text-2xl font-medium tracking-tight text-white">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm leading-relaxed text-white/75">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

function Cover({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="absolute inset-0">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/15" />
    </div>
  )
}

/** BASE DESIGN LAB services bento — under hero */
export default function LoovenBentoGrid() {
  return (
    <section
      id="services"
      className="w-full border-t border-[var(--color-border)] bg-[var(--color-background)]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[10px] md:text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-accent)] mb-3">
            What we do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--color-foreground)]">
            Services
          </h2>
          <p className="mt-3 text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-xl">
            From concept to completion — design, build, and architecture crafted with intention.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            eyebrow="Renovation"
            title="One Stop Renovation"
            description="A complete design-to-renovation solution focused on creating luxurious, timeless interiors."
            graphic={
              <Cover
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="One stop renovation"
              />
            }
            fade={['bottom']}
            className="max-lg:rounded-t-2xl lg:col-span-3 lg:rounded-tl-2xl"
          />
          <BentoCard
            eyebrow="Design"
            title="Interior Design"
            description="An opulent interior makeover, where every element is curated for a refined lifestyle."
            graphic={
              <Cover
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                alt="Interior design"
              />
            }
            fade={['bottom']}
            className="lg:col-span-3 lg:rounded-tr-2xl"
          />
          <BentoCard
            eyebrow="Craft"
            title="Bespoke Furniture"
            description="A fully customized, high-end service designed to reflect your unique vision and taste."
            graphic={
              <Cover
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
                alt="Bespoke furniture"
              />
            }
            fade={['bottom']}
            className="lg:col-span-2 lg:rounded-bl-2xl"
          />
          <BentoCard
            eyebrow="Spaces"
            title="Residential & Office"
            description="Personalized homes and inspiring workspaces — planned for comfort, flow, and productivity."
            graphic={
              <Cover
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Residential and office design"
              />
            }
            fade={['bottom']}
            className="lg:col-span-2"
          />
          <BentoCard
            eyebrow="Commercial"
            title="Retail, Cafe & Exterior"
            description="Retail environments, cafe atmospheres, and exterior detailing that elevate brand and curb appeal."
            graphic={
              <Cover
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
                alt="Retail cafe and exterior"
              />
            }
            fade={['bottom']}
            className="max-lg:rounded-b-2xl lg:col-span-2 lg:rounded-br-2xl"
          />
        </div>

        {/* Explicit service tags for discoverability */}
        <div className="mt-10 flex flex-wrap gap-2 justify-center sm:justify-start">
          {[
            'One Stop Renovation',
            'Interior Design',
            'Bespoke Furniture',
            'Residential Design',
            'Office Design',
            'Retail Design',
            'Cafe Design',
            'Exterior Design',
          ].map((label) => (
            <span
              key={label}
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-muted)] bg-white/50"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
