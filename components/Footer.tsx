import Link from "next/link";
import { Globe, Camera, Mail, MapPin, Phone, Play } from "lucide-react";

const aboutLinks = [
  { label: "Profile BMPS", href: "/profile" },
  { label: "Visi & Misi", href: "/profile#visi-misi" },
  { label: "Struktur Organisasi", href: "/profile#struktur" },
  { label: "Pengurus", href: "/profile#pengurus" },
];

const infoLinks = [
  { label: "Program", href: "/program" },
  { label: "Berita", href: "/berita" },
  { label: "Pelatihan", href: "/pelatihan" },
  { label: "Agenda", href: "/berita" },
];

const serviceLinks = [
  { label: "Bantuan Pendidikan", href: "/bantuan-pendidikan" },
  { label: "Info Beasiswa", href: "/beasiswa" },
  { label: "Direktori Sekolah", href: "/sekolah" },
  { label: "Daftarkan Sekolah/Yayasan", href: "/sekolah" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-navy-deep">
                B
              </span>
              <span className="text-lg font-bold">BMPS Bogor</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Badan Musyawarah Perguruan Swasta Daerah Bogor adalah wadah
              koordinasi sekolah dan yayasan swasta untuk bersama-sama
              meningkatkan mutu pendidikan di wilayah Bogor.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Website"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Youtube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <Play className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterColumn title="Tentang BMPS" links={aboutLinks} />
          <FooterColumn title="Informasi" links={infoLinks} />
          <FooterColumn title="Layanan" links={serviceLinks} />

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white/90">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                Jl. Pajajaran No. 1, Kota Bogor, Jawa Barat
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                (0251) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                info@bmpsbogor.or.id
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          &copy; {new Date().getFullYear()} BMPS Bogor. Seluruh hak cipta
          dilindungi.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-wide text-white/90">
        {title}
      </h4>
      <ul className="mt-4 space-y-3 text-sm text-white/70">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}