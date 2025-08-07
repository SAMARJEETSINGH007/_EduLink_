const EdulinkLogoDark = ({ onClick, className, height,width }) => (
  <div onClick={onClick} className={className}>
    <svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg"
    width={width} height={height}>
      <rect x="10" y="40" width="60" height="70" rx="5" fill="#4A90E2"/>
      <line x1="40" y1="40" x2="40" y2="110" stroke="#fff" strokeWidth="2"/>
      <circle cx="90" cy="65" r="15" stroke="#4A90E2" strokeWidth="5" fill="none"/>
      <circle cx="115" cy="85" r="15" stroke="#4A90E2" strokeWidth="5" fill="none"/>
      <line x1="100" y1="70" x2="105" y2="80" stroke="#4A90E2" strokeWidth="4"/>
      <text x="150" y="100" fontFamily="Arial, sans-serif" fontSize="60" fill="#e0e0e0" fontWeight="bold">
        Edulink
      </text>
    </svg>
  </div>
);

export default EdulinkLogoDark;
