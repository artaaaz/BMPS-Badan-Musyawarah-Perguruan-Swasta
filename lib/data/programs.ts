import type { Program } from "@/lib/types";

export const programs: Program[] = [
  {
    slug: "penguatan-mutu-guru",
    title: "Penguatan Mutu Guru Swasta",
    category: "Pendidikan",
    description:
      "Program peningkatan kompetensi pedagogik dan profesional bagi guru-guru sekolah swasta di wilayah Bogor.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    status: "active",
    startDate: "2026-01-10",
    content:
      "Program ini dirancang untuk membekali guru-guru sekolah swasta dengan metode pembelajaran modern, penguatan literasi digital, serta sertifikasi kompetensi yang diakui secara nasional. Kegiatan dilaksanakan secara berkala melalui workshop, pendampingan kelas, dan evaluasi berkelanjutan.",
  },
  {
    slug: "digitalisasi-sekolah-swasta",
    title: "Digitalisasi Sekolah Swasta",
    category: "Teknologi",
    description:
      "Mendorong transformasi digital manajemen sekolah swasta anggota BMPS Bogor melalui pelatihan dan pendampingan sistem informasi.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    status: "active",
    startDate: "2026-02-01",
    content:
      "Digitalisasi mencakup penerapan sistem informasi akademik, absensi digital, dan pelaporan keuangan sekolah agar lebih transparan dan efisien. BMPS Bogor menyediakan pendampingan teknis bagi sekolah yang baru memulai proses ini.",
  },
  {
    slug: "beasiswa-pendidikan-mandiri",
    title: "Beasiswa Pendidikan Mandiri",
    category: "Beasiswa",
    description:
      "Program bantuan biaya pendidikan bagi siswa berprestasi dari keluarga kurang mampu di lingkungan sekolah swasta Bogor.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    status: "upcoming",
    startDate: "2026-07-01",
    content:
      "Beasiswa ini terbuka bagi siswa jenjang SD hingga SMA/SMK yang terdaftar di sekolah anggota BMPS Bogor. Seleksi dilakukan berdasarkan prestasi akademik, kondisi ekonomi keluarga, serta rekomendasi dari kepala sekolah.",
  },
  {
    slug: "akreditasi-sekolah-terpadu",
    title: "Akreditasi Sekolah Terpadu",
    category: "Manajemen Mutu",
    description:
      "Pendampingan proses akreditasi bagi sekolah swasta agar memenuhi standar nasional pendidikan.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    status: "closed",
    startDate: "2025-09-15",
    content:
      "Program pendampingan akreditasi membantu sekolah menyiapkan dokumen, instrumen, dan simulasi penilaian sebelum proses akreditasi resmi oleh BAN-S/M dilaksanakan.",
  },
];

export function getProgramBySlug(slug: string) {
  return programs.find((program) => program.slug === slug);
}
