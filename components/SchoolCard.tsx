import Image from "next/image";
import Link from "next/link";
import { MapPin, Users } from "lucide-react";
import type { School } from "@/lib/types";

export default function SchoolCard({ school }: { school: School }) {
  return (
    <Link
      href={`/sekolah/${school.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={school.image}
          alt={school.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-deep backdrop-blur">
          Akreditasi {school.accreditation}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-blue-medium">
          {school.level} &middot; {school.type === "yayasan" ? "Yayasan" : "Sekolah"}
        </span>
        <h3 className="text-lg font-bold leading-snug text-navy-deep">
          {school.name}
        </h3>
        <p className="flex items-start gap-2 text-sm text-slate-600">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-royal" />
          {school.address}
        </p>
        <p className="flex items-center gap-2 text-sm text-slate-600">
          <Users className="h-4 w-4 shrink-0 text-blue-royal" />
          {school.studentCount} siswa
        </p>
      </div>
    </Link>
  );
}
