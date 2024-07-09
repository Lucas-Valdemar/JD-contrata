// src/Layout.jsx
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Sidebar</h1>
          <nav>
            <ul>
              <li className="mt-2">Item 1</li>
              <li className="mt-2">Item 2</li>
              <li className="mt-2">Item 3</li>
            </ul>
          </nav>
        </div>
      </aside>
      <main className="flex-1 bg-gray-100">
        <header className="bg-white shadow p-4">
          <h1 className="text-xl font-bold">Header</h1>
        </header>
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
