import { motion } from "framer-motion";

const blobs = [
  {
    size: 220,
    color: "from-indigo-500/30 to-violet-500/10",
    top: "-60px",
    left: "-80px",
    duration: 12,
    x: [0, 25, -10, 0],
    y: [0, 20, -15, 0],
  },
  {
    size: 180,
    color: "from-pink-500/25 to-rose-500/10",
    top: "18%",
    right: "-70px",
    duration: 15,
    x: [0, -25, 15, 0],
    y: [0, -20, 15, 0],
  },
  {
    size: 150,
    color: "from-emerald-500/20 to-teal-500/10",
    bottom: "20%",
    left: "-40px",
    duration: 18,
    x: [0, 20, -15, 0],
    y: [0, 15, -15, 0],
  },
  {
    size: 120,
    color: "from-yellow-400/20 to-orange-500/10",
    bottom: "-20px",
    right: "15%",
    duration: 13,
    x: [0, -15, 20, 0],
    y: [0, -15, 20, 0],
  },
];

function BackgroundShapes() {
  return (
    <>
      {/* Main Background */}
      <div className="absolute inset-0 bg-[#0F1117]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Animated Blobs */}
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          animate={{
            x: blob.x,
            y: blob.y,
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full bg-gradient-to-br ${blob.color} blur-3xl`}
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            bottom: blob.bottom,
            left: blob.left,
            right: blob.right,
          }}
        />
      ))}

      {/* Noise Layer */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:18px_18px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-indigo-500/10 to-transparent" />
    </>
  );
}

export default BackgroundShapes;