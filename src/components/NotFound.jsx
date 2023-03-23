import React from "react";
import { Link } from "react-router-dom";

function Mobile() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-white">
      <div className="feed-upgrade__content flex max-w-lg flex-col items-center justify-center">
        <h1 className="text-[22px] font-semibold text-gray-900">
          Oops! Something went wrong.
        </h1>
        <p className="mt-3 text-[14px] leading-6 text-gray-900">
          We’re sorry, but we can’t find the page you were looking for.
        </p>
        <Link
          to="/"
          className="mt-8 w-fit rounded-full bg-y-primary py-2 px-6 text-[14px] font-bold text-white transition-all hover:bg-yellow-500"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default Mobile;
