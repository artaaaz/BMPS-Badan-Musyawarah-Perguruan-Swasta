import type { School } from "@/lib/types";

export const schools: School[] = [
  {
    slug: "yayasan-pelita-bangsa",
    name: "Yayasan Pelita Bangsa",
    type: "yayasan",
    level: "SMA",
    address: "Jl. Pajajaran No. 12, Bogor Tengah, Kota Bogor",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    accreditation: "A",
    studentCount: 640,
    description:
      "Yayasan pendidikan yang menaungi jenjang SD hingga SMA dengan fokus pada pembentukan karakter dan prestasi akademik.",
  },
  {
    slug: "smp-bina-insani",
    name: "SMP Bina Insani",
    type: "sekolah",
    level: "SMP",
    address: "Jl. Raya Tajur No. 45, Bogor Selatan, Kota Bogor",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    accreditation: "A",
    studentCount: 420,
    description:
      "Sekolah menengah pertama swasta dengan kurikulum berbasis karakter dan penguatan sains.",
  },
  {
    slug: "sdit-cendekia-mulia",
    name: "SDIT Cendekia Mulia",
    type: "sekolah",
    level: "SD",
    address: "Jl. KH. Sholeh Iskandar No. 8, Tanah Sareal, Kota Bogor",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    accreditation: "B",
    studentCount: 380,
    description:
      "Sekolah dasar Islam terpadu yang mengintegrasikan kurikulum nasional dengan pembinaan keagamaan.",
  },
  {
    slug: "smk-teknologi-mandiri",
    name: "SMK Teknologi Mandiri",
    type: "sekolah",
    level: "SMK",
    address: "Jl. Dramaga Raya No. 21, Bogor Barat, Kota Bogor",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    accreditation: "A",
    studentCount: 510,
    description:
      "Sekolah kejuruan dengan konsentrasi Teknik Informatika dan Otomotif yang bermitra dengan industri lokal.",
  },
  {
    slug: "tk-ceria-bogor",
    name: "TK Ceria Bogor",
    type: "sekolah",
    level: "TK",
    address: "Jl. Pandu Raya No. 5, Bogor Utara, Kota Bogor",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    accreditation: "B",
    studentCount: 120,
    description:
      "Taman kanak-kanak yang mengedepankan pembelajaran berbasis bermain dan pengembangan motorik anak usia dini.",
  },
  {
    slug: "yayasan-nurul-hikmah",
    name: "Yayasan Nurul Hikmah",
    type: "yayasan",
    level: "SMP",
    address: "Jl. Sholeh Iskandar No. 33, Tanah Sareal, Kota Bogor",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    accreditation: "A",
    studentCount: 355,
    description:
      "Yayasan yang menaungi jenjang SMP dan SMA dengan penguatan nilai-nilai keagamaan dan akademik.",
  },
];

export function getSchoolBySlug(slug: string) {
  return schools.find((school) => school.slug === slug);
}
