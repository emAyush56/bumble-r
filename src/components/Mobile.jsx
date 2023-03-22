import React from "react";

function Mobile() {
  return (
    <div className="h-screen bg-yellow-400 sm:hidden flex flex-col justify-center items-center">
      <h1 className="my-auto">Desktop Only Version</h1>
      <div className="text-xs tracking-wide py-8">Made by Ayush Saha</div>
    </div>
  );
}

export default Mobile;
