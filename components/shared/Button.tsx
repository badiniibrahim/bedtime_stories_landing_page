/* eslint-disable @typescript-eslint/no-explicit-any */
const Button = ({ name, isBeam = false, containerClass }: any) => {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
