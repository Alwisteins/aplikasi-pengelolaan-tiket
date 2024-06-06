import SearchModal from '../modal/SearchModal';
import { bell } from "react-icons-kit/feather/bell";
import { Icon } from "react-icons-kit";

export default function Topbar({ page }: { page: string }) {
  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="text-2xl font-semibold text-black/80">{page}</h1>
      <div className="flex items-center space-x-7">
        <div className="flex items-center space-x-5">
          <SearchModal />
          <Icon
            icon={bell}
            className="text-slate-500"
          />
        </div>
        <div className="flex items-center space-x-3">
          <p className="font-semibold">Jones Ferdinand</p>
          <img src="/anime-teenage.jpeg" alt="profile picture" className="w-10 h-10 rounded-full" />
        </div>
      </div>
    </div>
  );
}
