"use client";

import { useMemo, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import SearchBar from "@/components/SearchBar";
import FilterButton from "@/components/FilterButton";
import Pagination from "@/components/Pagination";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/lib/data/programs";

const categories = ["Semua", ...new Set(programs.map((program) => program.category))];
const itemsPerPage = 6;

export default function ProgramPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPrograms = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return programs.filter((program) => {
      const matchesCategory =
        activeCategory === "Semua" || program.category === activeCategory;
      const matchesSearch =
        normalized.length === 0 ||
        program.title.toLowerCase().includes(normalized) ||
        program.description.toLowerCase().includes(normalized);
      return matchesCategory && matchesSearch;
    });
  }, [query, activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPrograms.length / itemsPerPage));
  const currentItems = filteredPrograms.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="section-shell py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow=""
        title="Program BMPS Bogor"
        description="Berbagai inisiatif dan kegiatan yang ditujukan untuk memperkuat mutu pendidikan swasta di Bogor."
      />

      <div className="mt-8 flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="w-full xl:max-w-md">
          <SearchBar
            value={query}
            onChange={(value) => {
              setQuery(value);
              setCurrentPage(1);
            }}
            placeholder="Cari program..."
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <FilterButton
              key={category}
              label={category}
              active={activeCategory === category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
            />
          ))}
        </div>
      </div>

      <div className="mt-8">
        {currentItems.length > 0 ? (
          <>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {currentItems.map((program) => (
                <ProgramCard key={program.slug} program={program} />
              ))}
            </div>
            <div className="mt-10">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </>
        ) : (
          <div className="soft-panel p-8 text-center text-slate-600">
            Tidak ada program yang cocok dengan pencarian saat ini.
          </div>
        )}
      </div>
    </div>
  );
}
