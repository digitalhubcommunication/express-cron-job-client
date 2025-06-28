import React from "react";

interface ButtonProps {
  label: string;
  cb?: () => void;
  className?: string;
  disabled?: boolean;
  labelStyle?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  className = "",
  cb,
  disabled = false,
  labelStyle = "",
}) => {
  
  // handlers
  const handleClick = () => {
    if (typeof cb === "function") {
      cb();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`wt_btn_cta
        ${className}
        ${disabled ? "cursor-not-allowed" : ""}`}
    >
      <span className="wt_btn_cta-ripple"></span>
      <span className="wt_fs-base wt_btn_cta-title">
        <span className={labelStyle} data-text={label}>
          {label}
        </span>
      </span>
    </button>
  );
};
