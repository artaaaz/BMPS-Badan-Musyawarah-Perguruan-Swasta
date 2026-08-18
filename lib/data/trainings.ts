import type { Training } from "@/lib/types";

export const trainings: Training[] = [
  {
    slug: "pelatihan-asesmen-diagnostik",
    title: "Pelatihan Asesmen Diagnostik bagi Guru",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    date: "2026-08-20",
    location: "Aula BMPS Bogor",
    quota: 80,
    status: "active",
    description:
      "Pelatihan penyusunan dan pelaksanaan asesmen diagnostik untuk memetakan kebutuhan belajar siswa.",
    content:
      "Peserta akan dibekali teknik menyusun instrumen asesmen diagnostik kognitif dan non-kognitif, serta cara menindaklanjuti hasilnya dalam perencanaan pembelajaran.",
  },
  {
    slug: "pelatihan-manajemen-keuangan-sekolah",
    title: "Pelatihan Manajemen Keuangan Sekolah Swasta",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    date: "2026-09-10",
    location: "Gedung Serbaguna Bogor",
    quota: 60,
    status: "upcoming",
    description:
      "Pembekalan tata kelola keuangan sekolah yang transparan dan akuntabel bagi bendahara dan kepala sekolah.",
    content:
      "Materi pelatihan mencakup penyusunan RAPBS, pelaporan keuangan berbasis digital, dan audit internal sederhana untuk sekolah swasta.",
  },
  {
    slug: "pelatihan-kepemimpinan-kepsek",
    title: "Pelatihan Kepemimpinan Kepala Sekolah",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    date: "2026-02-15",
    location: "Hotel Salak Heritage, Bogor",
    quota: 50,
    status: "closed",
    description:
      "Program penguatan kompetensi kepemimpinan bagi kepala sekolah anggota BMPS Bogor.",
    content:
      "Pelatihan ini telah menghasilkan sejumlah kepala sekolah yang siap menerapkan gaya kepemimpinan transformasional di satuan pendidikan masing-masing.",
  },
];

export function getTrainingBySlug(slug: string) {
  return trainings.find((training) => training.slug === slug);
}
