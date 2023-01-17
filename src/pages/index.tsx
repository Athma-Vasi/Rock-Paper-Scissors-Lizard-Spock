import { type NextPage } from "next";
import Board from "./components/board";
import Rules from "./components/rules";
import ScoreBoard from "./components/scoreBoard";

const Home: NextPage = () => {
  return (
    <div className="grid h-screen w-full bg-gradient-to-b from-radialGradientFrom to-radialGradientTo p-6 text-white outline-dotted">
      <div className="h-[10vh]">
        <ScoreBoard />
      </div>

      <div className="h-[448.3px] w-[500px] p-6 outline-dashed">
        <Board />
      </div>

      <div className="">
        <Rules />
      </div>
    </div>
  );
};
//w:29, h:26

export default Home;
