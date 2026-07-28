import g01 from '@/assets/gallery/gallery_01.jpg'
import g02 from '@/assets/gallery/gallery_02.jpg'
import g03 from '@/assets/gallery/gallery_03.jpg'
import g04 from '@/assets/gallery/gallery_04.jpg'
import g05 from '@/assets/gallery/gallery_05.jpg'
import g06 from '@/assets/gallery/gallery_06.jpg'
import g07 from '@/assets/gallery/gallery_07.jpg'
import g08 from '@/assets/gallery/gallery_08.jpg'
import g09 from '@/assets/gallery/gallery_09.jpg'
import g10 from '@/assets/gallery/gallery_10.jpg'
import g11 from '@/assets/gallery/gallery_11.jpg'
import g12 from '@/assets/gallery/gallery_12.jpg'
import g13 from '@/assets/gallery/gallery_13.jpg'
import g14 from '@/assets/gallery/gallery_14.jpg'
import g15 from '@/assets/gallery/gallery_15.jpg'
import g16 from '@/assets/gallery/gallery_16.jpg'
import g17 from '@/assets/gallery/gallery_17.jpg'
import g18 from '@/assets/gallery/gallery_18.jpg'
import g19 from '@/assets/gallery/gallery_19.jpg'
import g20 from '@/assets/gallery/gallery_20.jpg'
import g21 from '@/assets/gallery/gallery_21.jpg'
import g22 from '@/assets/gallery/gallery_22.jpg'
import g23 from '@/assets/gallery/gallery_23.jpg'
import g24 from '@/assets/gallery/gallery_24.jpg'

/** All project gallery photos */
export const galleryImageUrls: string[] = [
  g01, g02, g03, g04, g05, g06, g07, g08, g09, g10, g11,
  g12, g13, g14, g15, g16, g17, g18, g19, g20, g21, g22,
  g23, g24,
]

/** Home portfolio preview cards */
export const portfolioPreviewImages = galleryImageUrls.map((src, i) => ({
  src,
  alt: `BASE DESIGN LAB project ${i + 1}`,
}))
