import { useEffect, useRef, useState } from "react";

function InteractionHandler(message) {
  alert(message);
}

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
      <section className="wrapper mt-8">
        <ProfilePrompts />
      </section>
    </div>
  );
}

function ProfilePrompts() {
  const [showCloseButton, setshowCloseButton] = useState(false);
  return (
    <div className="profile-prompts mx-auto max-w-md">
      <div className="grid h-[448px] grid-cols-3 place-content-stretch gap-2">
        <div
          onClick={() => InteractionHandler("clicked")}
          className="relative col-span-2 row-span-2 h-full w-full cursor-pointer overflow-clip rounded-2xl border p-2 transition-all hover:border-gray-300"
        >
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-50">
            <PlusIcon />
          </div>
          {showCloseButton ? <CrossIconBox /> : null}
        </div>
        <div
          onClick={() => InteractionHandler("clicked")}
          className="relative w-full cursor-pointer rounded-2xl border p-2 transition-all hover:border-gray-300"
        >
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-50">
            <PlusIcon />
          </div>
          {showCloseButton ? <CrossIconBox /> : null}
        </div>
        <div
          onClick={() => InteractionHandler("clicked")}
          className="relative w-full cursor-pointer rounded-2xl border p-2 transition-all hover:border-gray-300"
        >
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-50">
            <PlusIcon />
          </div>
          {showCloseButton ? <CrossIconBox /> : null}
        </div>
        <div
          onClick={() => InteractionHandler("clicked")}
          className="relative w-full cursor-pointer rounded-2xl border p-2 transition-all hover:border-gray-300"
        >
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-50">
            <PlusIcon />
          </div>
          {showCloseButton ? <CrossIconBox /> : null}
        </div>
        <div
          onClick={() => InteractionHandler("clicked")}
          className="relative w-full cursor-pointer rounded-2xl border p-2 transition-all hover:border-gray-300"
        >
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-50">
            <PlusIcon />
          </div>
          {showCloseButton ? <CrossIconBox /> : null}
        </div>
        <div
          onClick={() => InteractionHandler("clicked")}
          className="relative w-full cursor-pointer rounded-2xl border p-2 transition-all hover:border-gray-300"
        >
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-50">
            <PlusIcon />
          </div>
          {showCloseButton ? <CrossIconBox /> : null}
        </div>
      </div>
      <div
        onClick={() => setshowCloseButton((bool) => !bool)}
        className="mt-5 cursor-pointer text-right text-xs tracking-wider text-gray-400"
      >
        {showCloseButton ? "Hide " : "Show "}cross buttons
      </div>
    </div>
  );
}

function CrossIconBox() {
  return (
    <div className="cross absolute inset-0 left-auto h-fit w-fit rounded-lg bg-white p-1.5">
      <CrossIcon />
    </div>
  );
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="h-7 w-7 text-gray-300"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="h-5 text-gray-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default EditProfile;
