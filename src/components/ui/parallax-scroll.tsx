import type { ReactNode } from 'react'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

export function ParallaxScrollSecond({
  images,
  className,
  endContent,
}: {
  images: string[]
  className?: string
  /** Rendered after all photos (e.g. Back home / Get quote) */
  endContent?: ReactNode
}) {
  const gridRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ['start start', 'end start'],
  })

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -160])
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -80])
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -12])

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -160])
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 80])
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 12])

  const third = Math.ceil(images.length / 3)
  const firstPart = images.slice(0, third)
  const secondPart = images.slice(third, 2 * third)
  const thirdPart = images.slice(2 * third)

  return (
    <div
      className={cn(
        'h-full w-full overflow-y-auto overflow-x-hidden overscroll-contain',
        // hide scrollbar but keep scroll
        'scrollbar-hide',
        className,
      )}
      ref={gridRef}
    >
      {/* Mobile: simple full-width stack — cleaner than heavy 3D parallax */}
      <div className="md:hidden flex flex-col gap-2 px-2 pt-2 pb-8">
        {images.map((el, idx) => (
          <div key={`m-${idx}`} className="w-full overflow-hidden rounded-xl">
            <img
              src={el}
              className="w-full h-[55vh] min-h-[280px] object-cover object-center"
              alt={`BASE DESIGN LAB gallery ${idx + 1}`}
              loading={idx < 2 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        {endContent ? <div className="px-2 pt-6 pb-10">{endContent}</div> : null}
      </div>

      {/* Tablet / desktop: multi-column parallax */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-start w-full max-w-[1600px] mx-auto gap-3 lg:gap-4 py-4 lg:py-6 px-3 lg:px-4">
          <div className="grid gap-3 lg:gap-4">
            {firstPart.map((el, idx) => (
              <motion.div
                style={{
                  y: translateYFirst,
                  x: translateXFirst,
                  rotateZ: rotateXFirst,
                }}
                key={`grid-1-${idx}`}
              >
                <img
                  src={el}
                  className="h-[42vh] lg:h-[48vh] min-h-[280px] w-full object-cover object-center rounded-xl m-0 p-0"
                  alt={`BASE DESIGN LAB gallery ${idx + 1}`}
                  loading={idx < 2 ? 'eager' : 'lazy'}
                />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-3 lg:gap-4">
            {secondPart.map((el, idx) => (
              <motion.div key={`grid-2-${idx}`}>
                <img
                  src={el}
                  className="h-[42vh] lg:h-[48vh] min-h-[280px] w-full object-cover object-center rounded-xl m-0 p-0"
                  alt={`BASE DESIGN LAB gallery ${third + idx + 1}`}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
          <div className="hidden lg:grid gap-3 lg:gap-4">
            {thirdPart.map((el, idx) => (
              <motion.div
                style={{
                  y: translateYThird,
                  x: translateXThird,
                  rotateZ: rotateXThird,
                }}
                key={`grid-3-${idx}`}
              >
                <img
                  src={el}
                  className="h-[48vh] min-h-[280px] w-full object-cover object-center rounded-xl m-0 p-0"
                  alt={`BASE DESIGN LAB gallery ${2 * third + idx + 1}`}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* On tablet (2-col), third column images were hidden — show them in flow */}
        <div className="grid grid-cols-2 gap-3 px-3 pb-4 lg:hidden">
          {thirdPart.map((el, idx) => (
            <div key={`grid-3-md-${idx}`} className="overflow-hidden rounded-xl">
              <img
                src={el}
                className="h-[42vh] min-h-[280px] w-full object-cover object-center"
                alt={`BASE DESIGN LAB gallery ${2 * third + idx + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {endContent ? (
          <div className="px-4 lg:px-6 pt-8 pb-16 max-w-[1600px] mx-auto">{endContent}</div>
        ) : null}
      </div>
    </div>
  )
}
