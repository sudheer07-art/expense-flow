// import BottomNavigation from "./BottomNavigation";

// function MobileLayout({ children }) {
//   return (
//    <div className="min-h-screen bg-[#0B0E15] flex justify-center ">
//       {/* Phone */}

//       <div
//         className="
//           relative
//           w-full
//           max-w-[390px]
//          h-[844px]
//           overflow-hidden
//           rounded-[34px]
//           border
//           border-white/10
//           bg-[#0F1117]
//           shadow-[0_25px_80px_rgba(0,0,0,.55)]
//         "
//       >
//         {/* Glow */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             -top-40
//             left-1/2
//             h-80
//             w-80
//             -translate-x-1/2
//             rounded-full
//             bg-indigo-600/20
//             blur-[110px]
//           "
//         />

//         {/* Content */}

//         <main
//           className="
//             relative
//             h-full
//             overflow-y-auto
//             px-5
//             pt-6
//             pb-28
//             scrollbar-hide
//           "
//         >
//           {children}
//         </main>

//         {/* Bottom Navigation */}

//         <div
//           className="
//             absolute
//             left-0
//             right-0
//             bottom-0
//             z-40
//             px-5
//             pb-5
//             pointer-events-none
//           "
//         >
//           <div className="pointer-events-auto">
//             <BottomNavigation />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MobileLayout;
import BottomNavigation from "./BottomNavigation";

function MobileLayout({ children }) {
  return (
   <div className="min-h-screen bg-[#0B0E15] flex justify-center">
  <div className="relative w-full max-w-[390px] min-h-screen bg-[#0F1117] flex flex-col">

    {/* Page */}
    <main className="flex-1 overflow-hidden">
      {children}
    </main>

    {/* Bottom Navigation */}
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-[390px] px-5 z-50">
      <BottomNavigation />
    </div>

  </div>
</div>
  );
}

export default MobileLayout;