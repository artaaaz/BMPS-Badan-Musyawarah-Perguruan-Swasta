export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export function formatViews(views: number) {
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1).replace(/\.0$/, "")}rb`;
  }
  return `${views}`;
}
