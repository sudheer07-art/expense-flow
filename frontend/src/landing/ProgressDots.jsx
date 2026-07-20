function ProgressDots({ current, total }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`rounded-full transition-all duration-300 ${
            current === index
              ? "h-2 w-8 bg-indigo-500"
              : "h-2 w-2 bg-white/20"
          }`}
        />
      ))}
    </div>
  );
}

export default ProgressDots;