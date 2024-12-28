import { Outlet } from "react-router";
import { Menu } from "../components/menu";

export default function Layout() {
  return (
    <div className="flex">
      <Menu />

      <main className="flex-1 max-h-[100vh] overflow-auto mt-8 sm:mt-0">
        <Outlet />
      </main>
    </div>
  );
}
