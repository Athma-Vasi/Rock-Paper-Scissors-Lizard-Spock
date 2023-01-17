import { type NextPage } from "next";
import Board from "./components/board";
import Rules from "./components/rules";
import ScoreBoard from "./components/scoreBoard";
import { MainWrapper } from "./styledTwComponents/mainWrapper";

const Home: NextPage = () => {
  const initialState = {
    appState: {
      score: 0,
      round: 0,
      playerChoice: null,
      computerChoice: null,
      winner: null,
      isGameStarted: false,
      isGameFinished: false,
      wasRulesClicked: false,
    },
    designState: {
      window: { width: 0, height: 0 },
    },
  };

  return (
    <MainWrapper state={}>
      <div className="rows-span-1 col-span-1">
        <ScoreBoard />
      </div>

      <div className="h-[448.3px] w-[500px] p-6 outline-dashed">
        <Board />
      </div>

      <div className="">
        <Rules />
      </div>
    </MainWrapper>
  );
};
//w:29, h:26

export default Home;
