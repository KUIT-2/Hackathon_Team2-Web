import React from "react";
import { Outlet } from "react-router-dom";
export default function Store() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
