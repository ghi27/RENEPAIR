import { useEffect } from "react";
import { createHashRouter, Outlet, useLocation } from "react-router";
import { Header, Footer } from "./components/shared";
import Home from "./pages/Home";
import BookARepair from "./pages/BookARepair";
import Gallery from "./pages/Gallery";

function Root() {
  const { pathname } = useLocation();
  // Start each page at the top when you switch pages
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex items-center justify-center py-32" style={{ backgroundColor: "#1E1F22" }}>
      <p style={{ color: "#9CA3AF", fontFamily: "'Oswald', sans-serif", fontSize: "24px" }}>Page not found.</p>
    </div>
  );
}

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "book", Component: BookARepair },
      { path: "gallery", Component: Gallery },
      { path: "*", Component: NotFound },
    ],
  },
]);
