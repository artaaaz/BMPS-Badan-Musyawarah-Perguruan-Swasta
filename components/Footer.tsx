import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const aboutLinks = [
  { label: "Profil BMPS", href: "/profile" },
  { label: "Visi & Misi", href: "/profile#visi-misi" },
  { label: "Struktur Organisasi", href: "/profile#struktur-organisasi" },
  { label: "Pengurus", href: "/profile#pengurus" },
];

const infoLinks = [
  { label: "Program", href: "/program" },
  { label: "Berita & Kegiatan", href: "/berita" },
  { label: "Pelatihan", href: "/pelatihan" },
  { label: "Agenda", href: "/berita" },
];

const serviceLinks = [
  { label: "Direktori Sekolah & Yayasan", href: "/sekolah" },
  { label: "Koordinasi Pendidikan", href: "/profile" },
  { label: "Hubungi BMPS", href: "/kontak" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white/90">
      <div className="section-shell py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                B
              </span>
              <span className="text-lg font-bold text-navy-deep">BMPS Bogor</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              Badan Musyawarah Perguruan Swasta Daerah Bogor menjadi wadah
              kolaborasi dan penguatan kualitas pendidikan swasta di wilayah
              Bogor.
            </p>
          </div>

          <FooterColumn title="Tentang BMPS" links={aboutLinks} />
          <FooterColumn title="Informasi" links={infoLinks} />
          <FooterColumn title="Layanan" links={serviceLinks} />

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-navy-deep">
              Kontak
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-royal" />
                Alamat: belum tersedia
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-blue-royal" />
                Telepon: belum tersedia
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-blue-royal" />
                Email: belum tersedia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {currentYear} BMPS Bogor. All rights reserved.
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
      <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-navy-deep">
        {title}
      </h4>
      <ul className="mt-4 space-y-3 text-sm text-slate-600">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="transition hover:text-blue-royal">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}