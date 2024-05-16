import React from "react";
import {Pagination} from "@nextui-org/react";

export default function App({page, onPageChange}) {
  return (
    <Pagination showControls total={10} initialPage={page} onChange={(newPage) => onPageChange(newPage)} />
  );
}
