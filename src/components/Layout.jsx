// src/Layout.jsx
import React from "react";
import style from "./layout.module.css"

const Layout = ({ children }) => {

  return (
    <div className={`${"flex h-screen "} ${style.page_container}`}>
      <aside className={` ${"hidden bg-gray-800 text-white sm:block"} ${style.sidebar}`}>
        <div className="p-4">
          <h1 className= {`${"text-2xl font-bold"}`} >Sidebar</h1>
          <nav>
            <ul>
              <li className="mt-2">Item 1</li>
              <li className="mt-2">Item 2</li>
              <li className="mt-2">Item 3</li>
            </ul>
          </nav>
        </div>
      </aside>
      <main className= {`${"flex-1 bg-white"} ${style.main}`} >
        <header className= {`${"bg-white shadow p-4"} ${style.header}`} >
          <h1 className="text-xl font-bold">Header</h1>
        </header>
        <div  className={`${style.children}`}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
             