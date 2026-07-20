// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   X,
//   Wallet,
// } from "lucide-react";


// export default function SetBudgetModal({
//   close,
//   onSave,
// }) {


//   const [budget,setBudget] = useState("");



//   const handleSubmit = ()=>{


//     if(!budget) return;



//     onSave({

//       monthlyBudget:Number(budget)

//     });


//     close();


//   };



// return (

// <motion.div

// initial={{
//   y:"100%"
// }}

// animate={{
//   y:0
// }}

// exit={{
//   y:"100%"
// }}

// transition={{
//   type:"spring",
//   stiffness:260,
//   damping:32
// }}


// className="
// w-full
// bg-[#181A20]
// rounded-t-[32px]
// border
// border-white/10
// px-6
// pt-4
// pb-8
// shadow-2xl
// "


// >


// {/* Handle */}

// <div className="
// flex
// justify-center
// mb-6
// ">

// <div className="
// h-1.5
// w-12
// rounded-full
// bg-white/20
// "/>

// </div>





// {/* Header */}

// <div className="
// flex
// items-center
// justify-between
// ">


// <div>

// <h2 className="
// text-2xl
// font-bold
// text-white
// ">

// Set Budget

// </h2>


// <p className="
// text-gray-400
// text-sm
// mt-2
// ">

// Manage your monthly spending limit

// </p>


// </div>



// <button

// onClick={close}

// className="
// w-10
// h-10
// rounded-full
// bg-[#232733]
// flex
// items-center
// justify-center
// "

// >

// <X
// size={20}
// className="text-gray-400"
// />


// </button>


// </div>






// {/* Input */}


// <div className="
// mt-8
// ">


// <label className="
// text-sm
// text-gray-400
// ">

// Monthly Budget

// </label>



// <div className="
// mt-3
// h-16
// rounded-2xl
// bg-[#11151F]
// border
// border-white/10
// flex
// items-center
// px-5
// gap-3
// focus-within:border-indigo-500
// transition
// ">


// <Wallet

// size={22}

// className="
// text-indigo-400
// "

// />


// <span className="
// text-gray-400
// text-xl
// font-semibold
// ">

// ₹

// </span>



// <input

// type="number"

// placeholder="20000"

// value={budget}

// onChange={(e)=>
// setBudget(e.target.value)
// }

// className="
// flex-1
// bg-transparent
// outline-none
// text-white
// text-xl
// font-semibold
// "

// />


// </div>


// </div>







// {/* Buttons */}


// <div className="
// mt-10
// flex
// gap-3
// ">


// <button

// onClick={close}

// className="
// flex-1
// h-16
// rounded-2xl
// border
// border-white/10
// text-white
// font-semibold
// bg-transparent
// "

// >

// Cancel

// </button>






// <motion.button

// whileTap={{
// scale:.96
// }}

// onClick={handleSubmit}

// className="
// flex-1
// h-16
// rounded-2xl
// bg-gradient-to-r
// from-indigo-600
// to-purple-600
// text-white
// font-semibold
// shadow-lg
// shadow-purple-500/30
// "

// >

// Save Budget

// </motion.button>



// </div>




// </motion.div>


// );

// }
import { useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  Wallet,
} from "lucide-react";


export default function SetBudgetModal({
  close,
  onSave,
}) {


  const [budget,setBudget] = useState("");



  const handleSubmit = () => {

    if(!budget) return;


    onSave({
      monthlyBudget:Number(budget)
    });


    close();

  };



return (

<motion.div

initial={{
  opacity:0,
  scale:.95,
}}

animate={{
  opacity:1,
  scale:1,
}}

exit={{
  opacity:0,
  scale:.95,
}}

transition={{
  type:"spring",
  stiffness:260,
  damping:25,
}}


className="
w-[320px]
max-w-[92vw]
rounded-[32px]
bg-[#181A20]
border
border-white/10
p-6
shadow-2xl
"

>


{/* Handle */}

<div className="
flex
justify-center
mb-5
">

<div
className="
h-1.5
w-14
rounded-full
bg-white/20
"
/>

</div>




{/* Header */}

<div className="
flex
justify-between
items-start
">


<div>

<h2
className="
text-2xl
font-bold
text-white
"
>

Set Budget

</h2>


<p
className="
text-sm
text-gray-400
mt-2
"
>

Manage your monthly spending limit

</p>

</div>



<button

onClick={close}

className="
w-10
h-10
rounded-full
bg-white/5
flex
items-center
justify-center
hover:bg-white/10
transition
"

>

<X
size={20}
className="text-gray-400"
/>


</button>


</div>





{/* Input */}


<div className="
mt-7
">


<label
className="
text-sm
text-gray-400
"
>

Monthly Budget

</label>



<div
className="
mt-3
h-14
rounded-2xl
bg-[#11151F]
border
border-white/10
flex
items-center
px-4
gap-3
focus-within:border-indigo-500
transition
"
>


<Wallet

size={20}

className="
text-indigo-400
"

/>


<span
className="
text-gray-400
font-semibold
"
>
₹
</span>


<input

type="number"

placeholder="20000"

value={budget}

onChange={(e)=>
setBudget(e.target.value)
}

className="
flex-1
bg-transparent
outline-none
text-white
font-semibold
text-lg
"

/>


</div>


</div>







{/* Buttons */}


<div
className="
mt-8
flex
gap-3
"
>


<button

onClick={close}

className="
flex-1
h-14
rounded-2xl
border
border-white/10
text-white
font-semibold
hover:bg-white/5
transition
"

>

Cancel

</button>





<motion.button

whileTap={{
scale:.96
}}

onClick={handleSubmit}


className="
flex-1
h-14
rounded-2xl
bg-gradient-to-r
from-indigo-600
to-purple-600
text-white
font-semibold
shadow-lg
"

>

Save Budget

</motion.button>



</div>




</motion.div>


);

}