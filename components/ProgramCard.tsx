import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Program } from "@/lib/types";
import StatusBadge from "@/components/StatusBadge";

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <Link
      href={`/program/${program.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <StatusBadge status={program.status} />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-blue-medium">
          {program.category}
        </span>
        <h3 className="text-lg font-bold leading-snug text-navy-deep">
          {program.title}
        </h3>
        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600">
          {program.description}
        </p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-royal">
          Selengkapnya
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
