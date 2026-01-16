const CubeLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`animate-float ${className}`}>
      <svg
        width="80"
        height="80"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 3D Cube/Diamond shape */}
        <path
          d="M50 10L85 30V70L50 90L15 70V30L50 10Z"
          stroke="hsl(0 0% 90%)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M50 10L50 50L15 30L50 10Z"
          fill="hsl(0 0% 25%)"
          stroke="hsl(0 0% 90%)"
          strokeWidth="1"
        />
        <path
          d="M50 10L85 30L50 50L50 10Z"
          fill="hsl(0 0% 35%)"
          stroke="hsl(0 0% 90%)"
          strokeWidth="1"
        />
        <path
          d="M50 50L85 30V70L50 90V50Z"
          fill="hsl(0 0% 20%)"
          stroke="hsl(0 0% 90%)"
          strokeWidth="1"
        />
        <path
          d="M50 50L15 30V70L50 90V50Z"
          fill="hsl(0 0% 15%)"
          stroke="hsl(0 0% 90%)"
          strokeWidth="1"
        />
        {/* Inner details */}
        <path
          d="M50 50L50 90"
          stroke="hsl(0 0% 90%)"
          strokeWidth="1"
        />
        <path
          d="M15 70L50 50L85 70"
          stroke="hsl(0 0% 90%)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default CubeLogo;
