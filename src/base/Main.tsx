import type { ReactNode } from "react";

import Navbar from "@/components/navbar";
import SideBar from "@/components/sidebar";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  currentTab: string;
};

const Main = (props: IMainProps) => {
  return (
    <div className="max-h-screen w-full bg-gray-200/80 text-gray-700 antialiased">
      {props.meta}

      <div>
        <header className="fixed top-0 z-50 w-full  bg-equity-yellow-100">
          <Navbar />
        </header>

        <div className="flex">
          <div className="hidden md:flex">
            <SideBar currentTab={props.currentTab} />
          </div>

          <main className="mt-12 w-full px-1 pt-2">
            <div
              className="m-2 rounded-lg bg-white shadow-md"
              style={{ minHeight: "calc(100vh - 7rem)" }}
            >
              {props.children}
            </div>
          </main>
        </div>

        {/* <footer className="py-2 text-center text-sm sm:ml-64">
        © Copyright {new Date().getFullYear()} {AppConfig.title}.
      </footer> */}
      </div>
    </div>
  );
};

export { Main };
