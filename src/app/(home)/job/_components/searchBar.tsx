// components/SearchBar.tsx
"use client";
export default function SearchBar({
  value,
  onSearch,
}: {
  value: string;
  onSearch: (query: string) => void;
}) {
  return (
    <input
      type="text"
      placeholder="Search jobs..."
      value={value}
      onChange={(e) => onSearch(e.target.value)}
      className="w-full border rounded p-2"
    />
  );
}
