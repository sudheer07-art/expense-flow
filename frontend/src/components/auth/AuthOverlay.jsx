// import { AnimatePresence, motion } from "framer-motion";

// export default function AuthOverlay({
//   children,
//   onClose,
// }) {
//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{
//           opacity: 0,
//           backdropFilter: "blur(0px)",
//         }}
//         animate={{
//           opacity: 1,
//           backdropFilter: "blur(18px)",
//         }}
//         exit={{
//           opacity: 0,
//           backdropFilter: "blur(0px)",
//         }}
//         transition={{
//           duration: 0.25,
//         }}
//         onClick={onClose}
//         className="
//           absolute
//           inset-0
//           z-[100]
//           overflow-hidden
//           rounded-[32px]
//           bg-black/65
//           flex
//           items-end
//           justify-center
//         "
//       >
//         {/* Background Glow */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             scale: 0.8,
//           }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//           }}
//           exit={{
//             opacity: 0,
//             scale: 0.8,
//           }}
//           transition={{
//             duration: 0.35,
//           }}
//           className="
//             absolute
//             -top-32
//             left-1/2
//             h-80
//             w-80
//             -translate-x-1/2
//             rounded-full
//             bg-indigo-600/20
//             blur-3xl
//           "
//         />

//         {/* Bottom Sheet */}
//         <motion.div
//           initial={{
//             y: 600,
//             opacity: 0,
//           }}
//           animate={{
//             y: 0,
//             opacity: 1,
//           }}
//           exit={{
//             y: 600,
//             opacity: 0,
//           }}
//           transition={{
//             type: "spring",
//             stiffness: 380,
//             damping: 32,
//           }}
//           onClick={(e) => e.stopPropagation()}
//           className="
//             relative
//             w-full
//             px-3
//             pb-4
//           "
//         >
//           {children}
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }
import { motion } from "framer-motion";


export default function AuthOverlay({
  children,
  onClose,
}) {


return (

<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}

// transition={{
// duration:.25
// }}

onClick={onClose}

className="
fixed
inset-0
z-[100]
flex
items-center
justify-center
bg-black/70
backdrop-blur-xl
"


>


<motion.div

initial={{
scale:.85,
opacity:0,
y:30
}}

animate={{
scale:1,
opacity:1,
y:0
}}

exit={{
scale:.9,
opacity:0,
y:30
}}

transition={{
type:"spring",
stiffness:250,
damping:25
}}


onClick={(e)=>e.stopPropagation()}


>

{children}


</motion.div>



</motion.div>


)

}