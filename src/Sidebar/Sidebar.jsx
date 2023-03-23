import UserPhoto from "../assets/user-profile-photo.jpg";
import NoMatches from "../assets/icon-nomatches.jpg";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Link to="/edit-profile">
        <header className="flex h-[4.5rem] w-full cursor-pointer items-center gap-3 px-4 transition-all hover:bg-gray-50/50">
          <div className="user-photo">
            <img src={UserPhoto} alt="User" className="h-11 rounded-full" />
          </div>
          <div className="user-name">
            <span className="text-lg font-semibold text-gray-900">Ayush</span>
          </div>
        </header>
      </Link>
      <div className="matches flex flex-1 flex-col items-center justify-center space-y-2 px-4">
        <div className="match-icon mb-2">
          <img src={NoMatches} alt="No Matches Found" />
        </div>
        <span className="text-lg font-medium">Get your matches here</span>
        <span className="text-[13px] text-gray-500">
          Start discovering people to get matches.
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
