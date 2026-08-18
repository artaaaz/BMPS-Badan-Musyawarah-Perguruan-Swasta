"use client";

import { useMemo, useState } from "react";
import SearchBar from "@/components/SearchBar";
import SectionHeading from "@/components/SectionHeading";
import TrainingCard from "@/components/TrainingCard";
import { trainings } from "@/lib/data/trainings";
import Pagination from "@/components/Pagination";

const itemsPerPage = 4;

export default function PelatihanPage() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTrainings = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return trainings.filter((training) => {
      if (!normalized) return true;
      return (
        training.title.toLowerCase().includes(normalized) ||
        training.location.toLowerCase().includes(normalized) ||
        training.description.toLowerCase().includes(normalized)
      );
    });
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filteredTrainings.length / itemsPerPage));
  const currentItems = filteredTrainings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="section-shell py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="Pelatihan"
        title="Pelatihan dan agenda pengembangan pendidikan"
        description="Daftar kegiatan yang dirancang untuk mendukung kemampuan lembaga, guru, dan tenaga pendidikan di lingkungan sekolah swasta."
      />

      <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <SearchBar
          value={query}
          onChange={(value) => {
            setQuery(value);
            setCurrentPage(1);
          }}
          placeholder="Cari pelatihan atau lokasi..."
        />
      </div>

      <div className="mt-8 space-y-6">
        {currentItems.length > 0 ? (
          <>
            {currentItems.map((training) => (
              <TrainingCard key={training.slug} training={training} />
            ))}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        ) : (
          <div className="soft-panel p-8 text-center text-slate-600">
            Tidak ada pelatihan yang cocok dengan pencarian saat ini.
          </div>
        )}
      </div>
    </div>
  );
}
