import { useEffect, useRef, useState } from "react";

function EditProfile() {
  return (
    <div className="hidden w-full sm:block">
      <header className="sticky top-0 flex h-[4.5rem] items-center border-b border-gray-300 bg-white">
        <div className="date-profile mx-auto">
          <span className="text-lg font-medium tracking-wide">
            Date profile
          </span>
        </div>
      </header>
      <section className="wrapper cc-index-px mt-20 flex  h-full justify-center tracking-widest text-gray-300">
        In making
      </section>
    </div>
  );
}

export default EditProfile;
