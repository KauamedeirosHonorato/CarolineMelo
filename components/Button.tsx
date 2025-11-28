import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "text";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "transition-all duration-300 font-sans tracking-wider uppercase text-xs md:text-sm py-3 px-8 rounded-sm font-medium";

  // Dentro do Button.tsx, adicione um variant "terracota"
  const variants = {
    primary:
      "bg-luxury-gradient text-graphite hover:bg-rose-gold-hover shadow-md hover:shadow-lg border border-transparent",
    outline:
      "border border-gold-opaque text-gold-opaque hover:bg-rose-gold hover:text-white hover:border-rose-gold",
    text: "text-rose-gold hover:text-gold-opaque underline-offset-4 hover:underline",
    terracota:
      "bg-[#E2725B] text-white hover:bg-[#d1442a] shadow-md hover:shadow-lg border border-transparent",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
