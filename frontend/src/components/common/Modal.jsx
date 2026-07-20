import { AnimatePresence, motion } from "framer-motion";


export default function Modal({
  children,
  close,
}) {


  return (

    <AnimatePresence>

      <motion.div

        initial={{
          opacity:0,
        }}

        animate={{
          opacity:1,
        }}

        exit={{
          opacity:0,
        }}

        onClick={close}

        className="
          fixed
          inset-0
          z-[999]
          flex
          items-end
          justify-center
          bg-black/70
          px-4
          pb-0
          backdrop-blur-xl
        "

      >

<motion.div
  initial={{
    y:500,
    opacity:0,
  }}

  animate={{
    y:0,
    opacity:1,
  }}

  exit={{
    y:500,
    opacity:0,
  }}

  transition={{
    type:"spring",
    stiffness:300,
    damping:30,
  }}

  onClick={(e)=>e.stopPropagation()}

  className="
    relative
    w-full
    flex
    justify-center
    px-4
    pb-4
  "
>
  {children}
</motion.div>


      </motion.div>


    </AnimatePresence>

  );

}
