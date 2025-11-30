import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top navbar (optional) */}
      <header className="p-4 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-xl font-semibold">My Website</h1>
      </header>

      {/* Page content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="p-4 border-t border-slate-200 dark:border-slate-800 text-center text-sm">
        © {new Date().getFullYear()} My Website
      </footer>
    </div>
  );
}
