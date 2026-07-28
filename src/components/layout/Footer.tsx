import { Link } from 'react-router-dom'
import { Phone, MapPin } from 'lucide-react'
import logoFooter from '@/assets/logo-footer.png'

const PHONE_DISPLAY = '016-445 8910'
const PHONE_TEL = '+60164458910'
const PHONE_WA = '60164458910'

const socialBtnClass =
  'w-10 h-10 rounded-full border border-white/25 text-[#E8D5B5] flex items-center justify-center hover:bg-[#A68A64] hover:text-[#1A1A1A] hover:border-[#A68A64] transition-colors'

const InstagramIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const FacebookIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
  </svg>
)

const WhatsAppIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[var(--color-border)] bg-[var(--color-foreground)] text-[var(--color-background)]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-4">
            <img
              src={logoFooter}
              alt="BASE DESIGN LAB"
              className="h-12 w-auto object-contain brightness-0 invert"
            />
            <p className="text-sm opacity-80 leading-relaxed">
              BASE DESIGN LAB (Malaysia)
            </p>
            <p className="text-xs opacity-55 leading-relaxed">
              Business Registration No. TR0228317X
            </p>
            <p className="text-xs opacity-55 leading-relaxed">
              PPK Registration No. : 00000000
            </p>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs">
              Design | Build | Architect — crafted spaces for everyday living.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className={socialBtnClass}
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className={socialBtnClass}
                aria-label="Facebook"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${PHONE_WA}`}
                target="_blank"
                rel="noreferrer"
                className={socialBtnClass}
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] opacity-50">
              Explore
            </p>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link to="/" className="hover:text-[#E8D5B5] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#services" className="hover:text-[#E8D5B5] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#E8D5B5] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <a href="/#about" className="hover:text-[#E8D5B5] transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] opacity-50">
              Contact
            </p>
            <ul className="space-y-4 text-sm opacity-80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#E8D5B5]" />
                <span>
                  G-19, Pusat Perniagaan Perdana Jaya,
                  <br />
                  Jln. Permatang Rawa,
                  <br />
                  14000 Bukit Mertajam, Pulau Pinang
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-[#E8D5B5]" />
                <a href={`tel:${PHONE_TEL}`} className="hover:text-[#E8D5B5] transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
            <a
              href={`https://wa.me/${PHONE_WA}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] border border-white/25 px-5 py-2.5 hover:bg-[#A68A64] hover:border-[#A68A64] transition-colors"
            >
              Get a quote
            </a>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] opacity-50">
              Visit us
            </p>
            <div className="overflow-hidden rounded-sm border border-white/15 aspect-[4/3] w-full bg-[#111]">
              <iframe
                title="BASE Design Lab location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4711.96390076327!2d100.4378145749838!3d5.367267794611559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac9d178f82e35%3A0x523d20d9db62143!2sBASE%20Design%20Lab!5e1!3m2!1sen!2smy!4v1785258906097!5m2!1sen!2smy"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-[10px] tracking-[0.12em] opacity-50">
          <span>
            © {new Date().getFullYear()} BASE DESIGN LAB (Malaysia) | Business Registration No.
            TR0228317X
          </span>
          <span className="uppercase tracking-[0.2em]">PPK : 00000000</span>
        </div>
      </div>
    </footer>
  )
}
