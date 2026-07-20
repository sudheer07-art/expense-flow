function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-[#18191F]
        rounded-3xl
        p-5
        shadow-lg
        border border-[#2A2B32]
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;