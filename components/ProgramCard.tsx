import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Program } from "@/lib/types";
import StatusBadge from "@/components/StatusBadge";

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <Link
      href={`/program/${program.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(15,23,42,0.08)]"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-royal">
          {program.category}
        </span>
        <StatusBadge status={program.status} />
      </div>

      <h3 className="text-lg font-bold leading-snug text-navy-deep">
        {program.title}
      </h3>

      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-slate-600">
        {program.description}
      </p>

      <div className="mt-5 pt-4">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-royal">
          Selengkapnya
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
