import css from "./VoteOptions.module.css";
import type { Votes } from "../../types/votes.ts";
interface VoteOptionsProps {
  onVote: (type: keyof Votes) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onReset,
  onVote,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote("bad")}>
        Bad
      </button>
      {canReset && (
        <button onClick={onReset} className={`${css.button} ${css.reset}`}>
          Reset
        </button>
      )}
    </div>
  );
}
