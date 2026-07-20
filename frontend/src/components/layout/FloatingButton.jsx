import { Plus } from "lucide-react";

function FloatingButton({ onClick }) {
  return (
    <button onClick={onClick}
      className="
        fixed
        bottom-20
        left-1/2
        -translate-x-1/2
        w-16
        h-16
        rounded-full
        bg-indigo-600
        hover:bg-indigo-500
        shadow-2xl
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:scale-110
        z-50
      "
    >
      <Plus size={30} className="text-white" />
    </button>
  );
}

export default FloatingButton;