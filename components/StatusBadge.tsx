import { cn } from "@/lib/utils";
import type { StatusType } from "@/lib/types";

const statusConfig: Record<StatusType, { label: string; className: string }> = {
  active: {
    label: "Sedang Berjalan",
    className: "bg-status-active/10 text-status-active",
  },
  upcoming: {
    label: "Akan Datang",
    className: "bg-status-upcoming/10 text-status-upcoming",
  },
  closed: {
    label: "Telah Selesai",
    className: "bg-status-closed/10 text-status-closed",
  },
};

export default function StatusBadge({ status }: { status: StatusType }) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        config.className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {config.label}
    </span>
  );
}
