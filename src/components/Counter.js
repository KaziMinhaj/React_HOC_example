import withCounter from "./HOC/withCounter";

const Counter = ({ count, incrementCount }) => {
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Clicked {count} times
      </button>
    </div>
  );
};
export default withCounter(Counter);
