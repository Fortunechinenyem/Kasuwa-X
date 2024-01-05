import React from "react";

interface PasswordRulesSVGProps {
  style?: React.CSSProperties;
}

const PasswordRulesSVG: React.FC<PasswordRulesSVGProps> = ({ style }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='12'
      viewBox='0 0 20 20'
      fill='none'
      style={style}
    >
      <circle cx='10' cy='10' r='9.5' stroke='#8C8C8C' />
    </svg>
  );
};

export default PasswordRulesSVG;
