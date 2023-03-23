import { useEffect, useRef, useState } from "react";
import BumbleLogo from "../assets/bumble-logo-2.png";
import UserPromptPhoto from "../assets/prompt/prompt_1.jpg";
import UserPromptPhoto2 from "../assets/prompt/prompt_3.jpg";
import { StarIcon, XMarkIcon, CheckIcon } from "@heroicons/react/24/solid";

function Index() {
  const [dailyLimitCrossed, setDailylimitCrossed] = useState(false);

  return (
    <div className="cc-index-px hidden w-full sm:block">
      <header className="relative flex h-[4.5rem] items-center">
        <div className="filters absolute flex cursor-pointer gap-2 text-gray-500 transition-all hover:text-gray-700">
          <div className="filters__icon ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </div>
          <span className=" text-[13px]">Filters</span>
        </div>
        <div
          className="logo mx-auto"
          onClick={() => setDailylimitCrossed((val) => !val)}
        >
          <img className="h-7" src={BumbleLogo} alt="Bumble Logo" />
        </div>
      </header>
      <section className="feed-wrapper">
        {dailyLimitCrossed ? <FeedUpgrade /> : <FeedPrompts />}
      </section>
    </div>
  );
}

function FeedPrompts() {
  const feedFocusRef = useRef(null);

  useEffect(() => {
    feedFocusRef.current.focus();
  }, []);

  return (
    <>
      <div
        tabIndex={0}
        ref={feedFocusRef}
        className="feed cc-feed-height mt-9 snap-y snap-mandatory overflow-auto scroll-smooth rounded-2xl border border-gray-300 outline-0"
      >
        <div className="feed__prompt_main flex h-full snap-start">
          <div className="feed__prompt_main-content h-full w-1/2">
            <img src={UserPromptPhoto} className="h-full w-full object-cover" />
          </div>
          <div className="feed__prompt_main-content flex w-1/2 flex-col justify-center space-y-2 bg-y-primary-light px-8">
            <h2 className=" text-3xl font-bold text-gray-700">Megha, 21</h2>
            <span className="text-[14px] font-semibold tracking-wide text-gray-700">
              NIFT 2024
            </span>
          </div>
        </div>

        <div className="feed__prompt_about flex h-full snap-start">
          <div className="feed__prompt_about-content flex w-full flex-col items-center justify-center space-y-4 bg-y-primary-light p-8">
            <div className="feed__prompt_about-content-title">
              <span className="text-[14px] font-semibold tracking-wide text-gray-700">
                About Megha
              </span>
            </div>

            <div className="feed__prompt_about-content-tags flex gap-2">
              <div className="tag cursor-default rounded-full bg-y-primary-hover/20 px-6 py-[2px]">
                <span className="text-[13px] font-medium text-gray-600">
                  Woman
                </span>
              </div>
              <div className="tag rounded-full bg-y-primary-hover/20 px-6 py-[2px]">
                <span className="text-[13px] font-medium text-gray-600">
                  Sometimes
                </span>
              </div>
              <div className="tag rounded-full bg-y-primary-hover/20 px-6 py-[2px]">
                <span className="text-[13px] font-medium text-gray-600">
                  Socially
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="feed__prompt_location flex h-full snap-start">
          <div className="feed__prompt_location-content-photo h-full w-1/2">
            <img
              src={UserPromptPhoto2}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="feed__prompt_location-content-desc flex w-1/2 flex-col items-center justify-center space-y-3 bg-y-primary-light px-8">
            <div className="feed__prompt_about-content-title">
              <span className="text-[14px] font-semibold tracking-wide text-gray-700">
                Megha's location
              </span>
            </div>
            <span className="text-lg font-semibold tracking-wide text-gray-800">
              Saltlake City, Kolkata, West Bengal
            </span>
          </div>
        </div>
      </div>
      <div className="feed-actions -mt-12 flex items-center justify-center gap-4">
        <div
          onClick={() => alert("You have passed!")}
          className="pass flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border border-gray-200  bg-white transition-all hover:scale-105 hover:shadow-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="h-7 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div
          onClick={() => alert("You have super swiped!")}
          className="super-swipe flex h-24 w-24 cursor-pointer items-center justify-center rounded-full bg-y-primary transition-all hover:scale-105 hover:bg-y-primary-active hover:shadow-xl"
        >
          <StarIcon className="h-10 text-white" />
        </div>
        <div
          onClick={() => alert("You have liked!")}
          className="like flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white transition-all hover:scale-105 hover:shadow-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="h-7 text-y-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

function FeedUpgrade() {
  return (
    <div className="feed-upgrade cc-feed-height mt-9 flex items-center justify-center rounded-2xl border border-gray-300">
      <div className="feed-upgrade__content max-w-lg text-center">
        <h1 className="text-[22px] font-semibold text-gray-900">
          You’ve hit the end of the line — for today!
        </h1>
        <p className="mt-3 text-[14px] leading-6 text-gray-900">
          Want to see more amazing people? Upgrade to Bumble Boost, or wait
          until tomorrow for more potential connections
        </p>
        <button className="mt-8 rounded-full bg-y-primary py-2 px-6 text-[14px] font-bold text-white transition-all hover:bg-yellow-500">
          Upgrade for more People
        </button>
      </div>
    </div>
  );
}

export default Index;
