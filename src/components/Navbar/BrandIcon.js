import React from "react";

export default props => (
  <svg viewBox="0 0 612 612" {...props}>
    <path
      fill="#563D7C"
      d="M612 510c0 56.1-45.9 102-102 102H102C45.9 612 0 566.1 0 510V102C0 45.9 45.9 0 102 0h408c56.1 0 102 45.9 102 102v408z"
    />
    <text fill="#fff" x="200" y="400" style={{ font: "bold 300px sans-serif" }}>
      {(process.env.APP_NAME || "A").charAt(0)}
    </text>
  </svg>
);
