function Button({
  children,
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        rounded-2xl
        bg-indigo-600
        py-3
        font-semibold
        transition-all
        hover:bg-indigo-500
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;