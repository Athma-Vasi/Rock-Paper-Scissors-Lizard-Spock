import { type NextPage } from "next";
import Board from "./components/board";
import Rules from "./components/rules";
import ScoreBoard from "./components/scoreBoard";

const Home: NextPage = () => {
  return (
    <div className="grid h-screen w-full grid-cols-1 grid-rows-[9] bg-gradient-to-b from-radialGradientFrom to-radialGradientTo p-6 text-white outline-dotted">
      <div className="col-span-1 row-span-1">
        <ScoreBoard />
      </div>

      <div className="row-span-7 col-span-1">
        <Board />
      </div>

      <div className="col-span-1 row-span-1">
        <Rules />
      </div>
    </div>
  );
};

export default Home;
