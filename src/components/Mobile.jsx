import React from "react";

function Mobile() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-yellow-400 sm:hidden">
      <h1 className="my-auto">Desktop Only Version</h1>
      <div className="py-8 text-xs tracking-wide">Made by Ayush Saha</div>
    </div>
  );
}

export default Mobile;
