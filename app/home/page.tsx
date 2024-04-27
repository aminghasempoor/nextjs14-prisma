import MovieVideo from "@/components/MovieVideo";
import RecentlyAdded from "@/components/RecentlyAdded";

export default function HomePage() {
    return (
        <div className="p-20">
            <MovieVideo />
            <h1 className="text-3xl font-bold ">Recently Added</h1>
            <RecentlyAdded />
        </div>
    );
}