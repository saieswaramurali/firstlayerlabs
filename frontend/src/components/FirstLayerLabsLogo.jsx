const FirstLayerLabsLogo = () => {
  return (
    <svg
      width="200"
      height="80"
      viewBox="0 0 200 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fllGrad" x1="0" y1="0" x2="100%" y2="100%">
          <stop stopColor="#111" />
          <stop offset="1" stopColor="#555" />
        </linearGradient>
      </defs>

      {/* Icon: Stylized "F" in a Layered Box */}
      <g>
        <rect x="10" y="10" width="50" height="50" rx="8" fill="url(#fllGrad)" />
        <path d="M20 25 H40 V30 H25 V35 H38 V40 H25 V45" stroke="#fff" strokeWidth="2" fill="none" />
      </g>

      {/* Text: "FirstLayerLabs" stacked */}
      <text x="70" y="35" fontSize="16" fill="#111" fontFamily="Arial, sans-serif" fontWeight="bold">FirstLayer</text>
      <text x="70" y="55" fontSize="14" fill="#444" fontFamily="Arial, sans-serif">Labs</text>
    </svg>
  );
};

export default FirstLayerLabsLogo ; 