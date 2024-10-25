"use client";

import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Updated data
const data = [
  {
    id: 1,
    Name: "The Hanover Insurance Group, Inc.",
    "Sub-Sector": "Finance",
    "Market Cap": "$3.77B",
    "PE Ratio": 6699.91,
    About:
      "ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo",
  },
  {
    id: 2,
    Name: "Lake Shore Bancorp, Inc.",
    "Sub-Sector": "Finance",
    "Market Cap": "$97.19M",
    "PE Ratio": 730.43,
    About:
      "molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est",
  },
  {
    id: 3,
    Name: "HCA Healthcare, Inc.",
    "Sub-Sector": "Health Care",
    "Market Cap": "$30.6B",
    "PE Ratio": 521.79,
    About:
      "sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
  },
  {
    id: 4,
    Name: "Cushing Renaissance Fund (The)",
    "Sub-Sector": "n/a",
    "Market Cap": "$103.28M",
    "PE Ratio": 4400.77,
    About:
      "nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique",
  },
  {
    id: 5,
    Name: "Everi Holdings Inc.",
    "Sub-Sector": "Finance",
    "Market Cap": "$467.31M",
    "PE Ratio": 5283.75,
    About:
      "mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac",
  },
  {
    id: 6,
    Name: "Pioneer High Income Trust",
    "Sub-Sector": "n/a",
    "Market Cap": "$289.1M",
    "PE Ratio": 2859.26,
    About:
      "sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros",
  },
  {
    id: 7,
    Name: "Groupon, Inc.",
    "Sub-Sector": "Technology",
    "Market Cap": "$1.81B",
    "PE Ratio": 4054.65,
    About:
      "nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla",
  },
  {
    id: 8,
    Name: "SpartanNash Company",
    "Sub-Sector": "Consumer Non-Durables",
    "Market Cap": "$1.03B",
    "PE Ratio": 9742.75,
    About:
      "consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices",
  },
  {
    id: 9,
    Name: "Oil States International, Inc.",
    "Sub-Sector": "Energy",
    "Market Cap": "$1.49B",
    "PE Ratio": 6033.78,
    About:
      "primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis",
  },
  {
    id: 10,
    Name: "Videocon d2h Limited",
    "Sub-Sector": "Consumer Services",
    "Market Cap": "$1.05B",
    "PE Ratio": 6203.74,
    About:
      "nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non",
  },
  {
    id: 11,
    Name: "SunCoke Energy, Inc.",
    "Sub-Sector": "Basic Industries",
    "Market Cap": "$614.25M",
    "PE Ratio": 8089.17,
    About:
      "proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing",
  },
  {
    id: 12,
    Name: "Heidrick & Struggles International, Inc.",
    "Sub-Sector": "Technology",
    "Market Cap": "$407.51M",
    "PE Ratio": 1441.4,
    About: "quis turpis eget elit sodales scelerisque mauris sit amet eros",
  },
  {
    id: 13,
    Name: "Resource Capital Corp.",
    "Sub-Sector": "n/a",
    "Market Cap": "n/a",
    "PE Ratio": 5839.07,
    About: "nullam varius nulla facilisi cras non velit nec nisi vulputate",
  },
  {
    id: 14,
    Name: "Vina Concha Y Toro",
    "Sub-Sector": "Consumer Non-Durables",
    "Market Cap": "$1.16B",
    "PE Ratio": 5121.81,
    About:
      "congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla",
  },
  {
    id: 15,
    Name: "Kohl's Corporation",
    "Sub-Sector": "Consumer Services",
    "Market Cap": "$6.37B",
    "PE Ratio": 6961.36,
    About: "tincidunt eu felis fusce posuere felis sed lacus morbi sem",
  },
  {
    id: 16,
    Name: "Meridian Bancorp, Inc.",
    "Sub-Sector": "Finance",
    "Market Cap": "$895.77M",
    "PE Ratio": 4521.62,
    About: "non sodales sed tincidunt eu felis fusce posuere felis sed",
  },
  {
    id: 17,
    Name: "Shenandoah Telecommunications Co",
    "Sub-Sector": "Public Utilities",
    "Market Cap": "$1.58B",
    "PE Ratio": 9079.96,
    About:
      "lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit",
  },
  {
    id: 18,
    Name: "Western Asset Investment Grade Defined Opportunity Trust Inc.",
    "Sub-Sector": "n/a",
    "Market Cap": "$225.71M",
    "PE Ratio": 1371.9,
    About:
      "elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus",
  },
  {
    id: 19,
    Name: "Urstadt Biddle Properties Inc.",
    "Sub-Sector": "n/a",
    "Market Cap": "n/a",
    "PE Ratio": 4014.64,
    About:
      "justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
  },
  {
    id: 20,
    Name: "Associated Banc-Corp",
    "Sub-Sector": "n/a",
    "Market Cap": "n/a",
    "PE Ratio": 3545.03,
    About:
      "vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula",
  },
  {
    id: 21,
    Name: "Public Storage",
    "Sub-Sector": "Consumer Services",
    "Market Cap": "n/a",
    "PE Ratio": 873.16,
    About:
      "justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id",
  },
  {
    id: 22,
    Name: "Richardson Electronics, Ltd.",
    "Sub-Sector": "Consumer Non-Durables",
    "Market Cap": "$75.94M",
    "PE Ratio": 3694.08,
    About:
      "turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi",
  },
  {
    id: 23,
    Name: "Endeavour Silver Corporation",
    "Sub-Sector": "Basic Industries",
    "Market Cap": "$370.33M",
    "PE Ratio": 1268.79,
    About:
      "eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis",
  },
  {
    id: 24,
    Name: "Oritani Financial Corp.",
    "Sub-Sector": "Finance",
    "Market Cap": "$791.4M",
    "PE Ratio": 7315.02,
    About:
      "mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa",
  },
  {
    id: 25,
    Name: "lululemon athletica inc.",
    "Sub-Sector": "Consumer Non-Durables",
    "Market Cap": "$7.24B",
    "PE Ratio": 8006.09,
    About:
      "nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper",
  },
  {
    id: 26,
    Name: "Ashland Global Holdings Inc.",
    "Sub-Sector": "Consumer Durables",
    "Market Cap": "$4.13B",
    "PE Ratio": 6052.18,
    About:
      "semper rutrum nulla nunc purus phasellus in felis donec semper sapien a",
  },
  {
    id: 27,
    Name: "RMG Networks Holding Corporation",
    "Sub-Sector": "Miscellaneous",
    "Market Cap": "$28.99M",
    "PE Ratio": 8263.55,
    About:
      "libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan",
  },
  {
    id: 28,
    Name: "Cherry Hill Mortgage Investment Corporation",
    "Sub-Sector": "Consumer Services",
    "Market Cap": "$240.54M",
    "PE Ratio": 7348.25,
    About:
      "mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed",
  },
  {
    id: 29,
    Name: "General Electric Company",
    "Sub-Sector": "Energy",
    "Market Cap": "$251.83B",
    "PE Ratio": 6458.1,
    About:
      "dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede",
  },
  {
    id: 30,
    Name: "Anika Therapeutics Inc.",
    "Sub-Sector": "Health Care",
    "Market Cap": "$664.15M",
    "PE Ratio": 5246.06,
    About:
      "cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam",
  },
  {
    id: 31,
    Name: "Willis Lease Finance Corporation",
    "Sub-Sector": "Consumer Durables",
    "Market Cap": "$170.65M",
    "PE Ratio": 2496.95,
    About:
      "vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi",
  },
  {
    id: 32,
    Name: "Huaneng Power International, Inc.",
    "Sub-Sector": "Public Utilities",
    "Market Cap": "$11.05B",
    "PE Ratio": 9478.27,
    About:
      "et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet",
  },
  {
    id: 33,
    Name: "Oxford Lane Capital Corp.",
    "Sub-Sector": "n/a",
    "Market Cap": "$229.56M",
    "PE Ratio": 975.49,
    About:
      "id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat",
  },
  {
    id: 34,
    Name: "People's United Financial, Inc.",
    "Sub-Sector": "Finance",
    "Market Cap": "n/a",
    "PE Ratio": 4462.56,
    About:
      "turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc",
  },
  {
    id: 35,
    Name: "Anworth Mortgage Asset  Corporation",
    "Sub-Sector": "n/a",
    "Market Cap": "n/a",
    "PE Ratio": 8018.12,
    About:
      "vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede",
  },
  {
    id: 36,
    Name: "Inovio Pharmaceuticals, Inc.",
    "Sub-Sector": "Health Care",
    "Market Cap": "$585.08M",
    "PE Ratio": 7619.49,
    About:
      "dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros",
  },
  {
    id: 37,
    Name: "PowerShares Global Water Portfolio",
    "Sub-Sector": "n/a",
    "Market Cap": "$191.36M",
    "PE Ratio": 6242.87,
    About:
      "integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet",
  },
  {
    id: 38,
    Name: "Western Asset/Claymore U.S Treasury Inflation Prot Secs Fd 2",
    "Sub-Sector": "n/a",
    "Market Cap": "$675.47M",
    "PE Ratio": 2077.8,
    About:
      "magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis",
  },
  {
    id: 39,
    Name: "Regions Financial Corporation",
    "Sub-Sector": "n/a",
    "Market Cap": "n/a",
    "PE Ratio": 1103.99,
    About:
      "felis ut at dolor quis odio consequat varius integer ac leo pellentesque",
  },
  {
    id: 40,
    Name: "Marinus Pharmaceuticals, Inc.",
    "Sub-Sector": "Health Care",
    "Market Cap": "$29.15M",
    "PE Ratio": 8695.87,
    About:
      "nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit",
  },
  {
    id: 41,
    Name: "Zayo Group Holdings, Inc.",
    "Sub-Sector": "Public Utilities",
    "Market Cap": "$7.93B",
    "PE Ratio": 5840.18,
    About:
      "vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est",
  },
  {
    id: 42,
    Name: "Pzena Investment Management Inc",
    "Sub-Sector": "Finance",
    "Market Cap": "$637.26M",
    "PE Ratio": 1101.92,
    About:
      "nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros",
  },
  {
    id: 43,
    Name: "Brown & Brown, Inc.",
    "Sub-Sector": "Finance",
    "Market Cap": "$6.22B",
    "PE Ratio": 7285.09,
    About: "vulputate ut ultrices vel augue vestibulum ante ipsum primis in",
  },
  {
    id: 44,
    Name: "Acorda Therapeutics, Inc.",
    "Sub-Sector": "Health Care",
    "Market Cap": "$804.88M",
    "PE Ratio": 6002.22,
    About:
      "praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede",
  },
  {
    id: 45,
    Name: "On Deck Capital, Inc.",
    "Sub-Sector": "Finance",
    "Market Cap": "$303.71M",
    "PE Ratio": 888.2,
    About:
      "id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed",
  },
  {
    id: 46,
    Name: "Natural Alternatives International, Inc.",
    "Sub-Sector": "Consumer Durables",
    "Market Cap": "$72.51M",
    "PE Ratio": 1452.88,
    About: "eleifend pede libero quis orci nullam molestie nibh in lectus",
  },
  {
    id: 47,
    Name: "Silicom Ltd",
    "Sub-Sector": "Technology",
    "Market Cap": "$347.78M",
    "PE Ratio": 8578.47,
    About:
      "euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem",
  },
  {
    id: 48,
    Name: "International Speedway Corporation",
    "Sub-Sector": "Consumer Services",
    "Market Cap": "$1.62B",
    "PE Ratio": 6886.57,
    About:
      "semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in",
  },
  {
    id: 49,
    Name: "South Jersey Industries, Inc.",
    "Sub-Sector": "Public Utilities",
    "Market Cap": "$2.89B",
    "PE Ratio": 7167.06,
    About:
      "faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis",
  },
  {
    id: 50,
    Name: "MGM Growth Properties LLC",
    "Sub-Sector": "Consumer Services",
    "Market Cap": "$1.68B",
    "PE Ratio": 4550.12,
    About:
      "sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum",
  },
];

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-center"
      >
        <div className="text-center">Company Name</div>
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue("Name")}</div>,
  },
  {
    accessorKey: "Sub-Sector",
    header: <div className="text-center">Sub-Sector</div>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Sub-Sector")}</div>
    ),
  },
  {
    accessorKey: "Market Cap",
    header: () => <div className="text-center">Market Cap</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("Market Cap")}</div>
    ),
  },
  {
    accessorKey: "PE Ratio",
    header: () => <div className="text-center">PE Ratio</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("PE Ratio")}</div>
    ),
  },
  {
    accessorKey: "About",
    header: () => <div className="text-center">About</div>,
    cell: ({ row }) => <div>{row.getValue("About")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const company = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(company.id.toString())
              }
            >
              Copy Company ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

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

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter Company Names..."
          value={table.getColumn("Name")?.getFilterValue() || ""}
          onChange={(event) =>
            table.getColumn("Name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
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
}
