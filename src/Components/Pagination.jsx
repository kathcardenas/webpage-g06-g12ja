import React from "react";
import {Pagination} from "@nextui-org/react";

export default function App({page, onPageChange, totalPagination}) {
  return (
    <Pagination showControls total={totalPagination} page={page} initialPage={1} onChange={(newPage) => onPageChange(newPage)} />
  );
}
