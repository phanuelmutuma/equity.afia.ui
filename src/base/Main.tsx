import type { ReactNode } from "react";

import Navbar from "@/components/navbar";
import SideBar from "@/components/sidebar";
import { AppConfig } from "@/utils/AppConfig";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="h-screen w-full bg-gray-200/80 text-gray-700 antialiased">
    {props.meta}

    <div>
      <header className="fixed top-0 z-50 w-full border-b border-equity-red-700 bg-equity-yellow-600">
        <Navbar />
      </header>

      <div>
        <SideBar />
      </div>

      <main className="mt-12 px-1 pt-2 sm:ml-60">
        <div
          className="m-2 rounded-lg bg-white p-4 shadow-md"
          style={{ minHeight: "calc(100vh - 7rem)" }}
        >
          {props.children}
        </div>
      </main>

      <footer className="py-2 text-center text-sm sm:ml-64">
        © Copyright {new Date().getFullYear()} {AppConfig.title}.
      </footer>
    </div>
  </div>
);

export { Main };
