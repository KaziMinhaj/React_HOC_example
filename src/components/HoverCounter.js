import withCounter from "./HOC/withCounter";

const HoverCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <h1 type="button" onMouseMove={incrementCount}>
        Clicked {count} times
      </h1>
    </div>
  );
};
export default withCounter(HoverCounter);
