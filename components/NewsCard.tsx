import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";
import type { NewsItem } from "@/lib/types";
import { formatDate, formatViews } from "@/lib/utils";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link
      href={`/berita/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-blue-medium">
          <span>{item.category}</span>
          <span className="text-slate-400">{formatDate(item.date)}</span>
        </div>
        <h3 className="line-clamp-2 text-lg font-bold leading-snug text-navy-deep">
          {item.title}
        </h3>
        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600">
          {item.excerpt}
        </p>
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="font-semibold text-blue-royal">Selengkapnya</span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <Eye className="h-4 w-4" />
            {formatViews(item.views)}
          </span>
        </div>
      </div>
    </Link>
  );
}
