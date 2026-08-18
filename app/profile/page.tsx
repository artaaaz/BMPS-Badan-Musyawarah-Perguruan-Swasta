import Link from "next/link";
import { ArrowRight, Building2, Users, BriefcaseBusiness } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const profilePillars = [
  {
    title: "Peran",
    text: "BMPS berperan sebagai wadah koordinasi antarlembaga pendidikan swasta untuk memperkuat sinergi, kualitas, dan kepastian arah pengembangan pendidikan di Bogor.",
    icon: Building2,
  },
  {
    title: "Anggota",
    text: "Organisasi ini menaungi sekolah, yayasan, dan komunitas pendidikan swasta yang berkomitmen membangun ekosistem pendidikan yang unggul.",
    icon: Users,
  },
  {
    title: "Tujuan",
    text: "Tujuan utama BMPS adalah menjaga kualitas pendidikan swasta, menguatkan kapasitas institusi, dan mendorong kolaborasi yang bermanfaat bagi peserta didik.",
    icon: BriefcaseBusiness,
  },
];

export default function ProfilePage() {
  return (
    <div className="section-shell py-12 sm:py-16 lg:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-royal">
          Profil BMPS
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy-deep sm:text-5xl">
          Wadah strategis untuk pendidikan swasta Bogor
        </h1>
      </div>

      <div className="mt-10 soft-panel p-8 sm:p-10">
        <p className="text-base leading-8 text-slate-600">
          BMPS Bogor adalah forum musyawarah pendidikan swasta yang berperan
          sebagai penghubung strategis bagi sekolah dan yayasan di wilayah Bogor.
          Organisasi ini menjadi ruang kolaborasi untuk membahas penguatan mutu,
          pengembangan program, serta kebutuhan bersama dalam rangka menjaga dan
          meningkatkan kualitas pendidikan swasta.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {profilePillars.map(({ title, text, icon: Icon }) => (
          <div key={title} className="soft-panel bg-slate-50 p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-light text-blue-royal">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-navy-deep">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
          </div>
        ))}
      </div>

      <div id="visi-misi" className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="soft-panel p-8">
          <SectionHeading
            eyebrow="Visi"
            title="Membangun pendidikan swasta yang unggul, relevan, dan berdaya saing"
          />
          <p className="mt-5 text-base leading-8 text-slate-600">
            Visi ini menjadi arah utama dalam membangun ekosistem pendidikan yang
            kuat, kolaboratif, dan siap menghadapi tantangan masa depan.
          </p>
        </div>

        <div className="soft-panel p-8">
          <SectionHeading
            eyebrow="Misi"
            title="Menguatkan kapasitas lembaga, guru, dan jejaring pendidikan swasta"
          />
          <ul className="mt-5 space-y-3 text-base leading-7 text-slate-600">
            <li>• Menjalin koordinasi dan komunikasi antar lembaga pendidikan swasta.</li>
            <li>• Mendorong pengembangan mutu pembelajaran dan manajemen institusi.</li>
            <li>• Mengembangkan program yang relevan dengan kebutuhan pendidikan saat ini.</li>
            <li>• Menjaga semangat kolaborasi untuk masa depan pendidikan Bogor.</li>
          </ul>
        </div>
      </div>

      <div id="struktur-organisasi" className="mt-16">
        <SectionHeading
          eyebrow="Struktur Organisasi"
          title="Kerangka organisasi yang dapat dikembangkan sesuai kebutuhan resmi"
          description="Struktur organisasi BMPS akan diperbarui sesuai data resmi yang valid dan ditetapkan oleh lembaga terkait."
        />

        <div className="mt-8 soft-panel bg-slate-50 p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Ketua",
              "Wakil Ketua",
              "Sekretaris",
              "Bendahara",
              "Bidang Pendidikan",
              "Bidang Kelembagaan",
              "Bidang Hubungan Masyarakat",
              "Bidang Pengembangan Program",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm font-medium text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="pengurus" className="mt-16">
        <SectionHeading
          eyebrow="Pengurus"
          title="Data pengurus akan ditampilkan setelah validasi resmi tersedia"
          description="Untuk menjaga akurasi dan kredibilitas, informasi nama pengurus belum dipublikasikan dalam tahap prototype ini."
        />
        <div className="mt-8 soft-panel p-8 text-slate-600">
          Placeholder pengurus dapat diisi dengan struktur kepengurusan resmi BMPS
          ketika data final diterima dari pihak berwenang.
        </div>
      </div>

      <div className="mt-14 flex justify-start">
        <Link
          href="/kontak"
          className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-royal"
        >
          Hubungi BMPS
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
