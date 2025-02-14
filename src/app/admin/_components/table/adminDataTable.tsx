"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SearchInput } from "@/components/ui/search-input";

interface AdminDataTableProps<T extends { created_at: string }> {
  data: T[];
  columns: ColumnDef<T>[];
  searchPlaceholder?: string;
  created_atVissible?: boolean;
}

const AdminDataTable = <T extends { created_at: string }>({
  data,
  columns,
  searchPlaceholder = "Search...",
}: // created_atVissible = false,
AdminDataTableProps<T>) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
      created_atVissible: false, // Kolom created_at tersembunyi secara default
    });
  const [rowSelection, setRowSelection] = React.useState({});
  const [filterCategory, setFilterCategory] = React.useState<string>("All");
  const [statusFilter, setStatusFilter] = React.useState("bottom");

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const searchColumn = columns[1]?.id;

  React.useEffect(() => {
    const newFilters: ColumnFiltersState = [];

    if (filterCategory === "Newest") {
      newFilters.push({
        id: "created_at",
        value: "newest",
      });
    } else if (filterCategory === "Latest") {
      newFilters.push({
        id: "created_at",
        value: "latest",
      });
    }

    // newFilters.push({
    //   id: "status",
    //   value: statusFilter,
    // });

    setColumnFilters(newFilters);
  }, [filterCategory, statusFilter]);

  const allCount = React.useMemo(() => data.length, [data]);

  const newestCount = React.useMemo(() => {
    // const currentDate = new Date().getTime();
    // return data.filter((item) => {
    //   const created_at = new Date(item.created_at).getTime();
    //   return created_at > currentDate - 10 * 24 * 60 * 60 * 1000; // 10 hari terakhir
    // }).length;
    return 0;
  }, []);

  const latestCount = React.useMemo(() => {
    // const currentDate = new Date().getTime();
    // return data.filter((item) => {
    //   const created_at = new Date(item.created_at).getTime();
    //   return created_at <= currentDate;
    // }).length;
    return 0;
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-end justify-between mb-6">
        <div className="flex items-center gap-4">
          <SearchInput
            type="text"
            placeholder={searchPlaceholder}
            value={
              (searchColumn &&
                (table.getColumn(searchColumn)?.getFilterValue() as string)) ??
              ""
            }
            onChange={(event) => {
              if (searchColumn) {
                table
                  .getColumn(searchColumn)!
                  .setFilterValue(event.target.value);
              }
            }}
            className="placeholder border-none shadow-none outline-none"
          />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex gap-2 items-center px-6 py-3 h-[46px] text-sm"
              >
                Filter Status
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Filter Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={statusFilter}
                onValueChange={setStatusFilter}
              >
                <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="active">
                  Active
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="inactive">
                  Inactive
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-7">
          <p
            className={`text-sm cursor-pointer ${
              filterCategory === "All" ? "font-semibold text-blue-600" : ""
            }`}
            onClick={() => setFilterCategory("All")}
          >
            All ({allCount})
          </p>
          <p
            className={`text-sm cursor-pointer ${
              filterCategory === "Newest" ? "font-semibold text-blue-600" : ""
            }`}
            onClick={() => setFilterCategory("Newest")}
          >
            Newest ({newestCount})
          </p>
          <p
            className={`text-sm cursor-pointer ${
              filterCategory === "Latest" ? "font-semibold text-blue-600" : ""
            }`}
            onClick={() => setFilterCategory("Latest")}
          >
            Latest ({latestCount})
          </p>
        </div>
      </div>

      <div className="border-b bg-white">
        <Table>
          <TableHeader className="bg-[#F5F6F6]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminDataTable;
