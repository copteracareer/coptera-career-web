// components/SearchBar.tsx
"use client";
export default function SearchBar({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  return (
    <input
      type="text"
      placeholder="Search jobs..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full border rounded p-2"
    />
  );
}
