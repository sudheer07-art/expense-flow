// import { useState } from "react";
// import {
//   loginUser,
//   getCurrentUser,
// } from "../../services/authServices";
// import { useAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// function LoginModal({ close, switchToSignup }) {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//  const handleLogin = async () => {
//   try {
//     setLoading(true);
//     setError("");

//     const data = await loginUser({email, password});

//     // Save token first
//     localStorage.setItem("token", data.access_token);

//     // Fetch logged-in user
//     const userData = await getCurrentUser();

//     // Update AuthContext
//     login(data.access_token, userData);

// close();

// setTimeout(() => {
//   navigate("/dashboard");
// }, 250);

//   } catch (err) {
//     console.error(err);

//     setError(
//       err.response?.data?.detail || "Invalid email or password"
//     );
//   } finally {
//     setLoading(false);
//   }
// };
//   return (
//     <div className="w-[420px] rounded-3xl bg-[#181A20] border border-[#2A2B32] p-8 shadow-2xl">

//       <h2 className="text-3xl font-bold mb-2">
//         Welcome Back
//       </h2>

//       <p className="text-gray-400 mb-8">
//         Login to your account
//       </p>

//       {error && (
//         <p className="text-red-500 mb-4">
//           {error}
//         </p>
//       )}

//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="w-full p-4 rounded-xl bg-[#23252C] mb-4"
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="w-full p-4 rounded-xl bg-[#23252C]"
//       />

//       <button
//         onClick={handleLogin}
//         disabled={loading}
//         className="w-full mt-6 bg-indigo-600 rounded-xl p-4 font-semibold"
//       >
//         {loading ? "Logging in..." : "Login"}
//       </button>

//       <p className="text-center mt-6 text-gray-400">
//         Don't have an account?

//         <button
//           onClick={switchToSignup}
//           className="text-indigo-500 ml-2"
//         >
//           Sign Up
//         </button>
//       </p>

//       <button
//         onClick={close}
//         className="w-full mt-3 text-gray-500"
//       >
//         Close
//       </button>
//     </div>
//   );
// }

// export default LoginModal;
// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   X,
//   Mail,
//   Lock,
//   Sparkles
// } from "lucide-react";

// import {
//   loginUser,
//   getCurrentUser,
// } from "../../services/authServices";

// import {
//   useAuth
// } from "../../context/AuthContext";

// import {
//   useNavigate
// } from "react-router-dom";


// function LoginModal({
//   close,
//   switchToSignup
// }) {


// const { login } = useAuth();

// const navigate = useNavigate();


// const [email,setEmail] =
// useState("");

// const [password,setPassword] =
// useState("");

// const [error,setError] =
// useState("");

// const [loading,setLoading] =
// useState(false);



// const handleLogin = async()=>{


// try{


// setLoading(true);

// setError("");



// const tokenData =
// await loginUser({
// email,
// password
// });



// localStorage.setItem(
// "token",
// tokenData.access_token
// );



// const user =
// await getCurrentUser();



// login(
// tokenData.access_token,
// user
// );



// close();



// setTimeout(()=>{

// navigate("/dashboard");

// },200);



// }

// catch(err){

// console.error(err);


// setError(
// err.response?.data?.detail ||
// "Invalid credentials"
// );


// }

// finally{

// setLoading(false);

// }


// };




// return (


// <motion.div


// initial={{
// scale:.85,
// opacity:0,
// y:40
// }}


// animate={{
// scale:1,
// opacity:1,
// y:0
// }}


// transition={{
// type:"spring",
// stiffness:220,
// damping:25
// }}



// className="

// relative

// w-[330px]

// rounded-[32px]

// bg-[#181A20]

// border

// border-white/10

// p-8

// shadow-2xl

// overflow-hidden

// "


// >


// {/* Glow */}


// <div

// className="

// absolute

// w-40

// h-40

// bg-indigo-600

// blur-3xl

// opacity-20

// top-0

// right-0

// "

// />




// {/* Close */}


// <motion.button

// whileHover={{
// scale:1.1,
// rotate:90
// }}

// whileTap={{
// scale:.9
// }}


// onClick={close}


// className="
// absolute
// right-5
// top-5

// w-10
// h-10

// rounded-full

// bg-white/10

// flex
// items-center
// justify-center

// text-gray-300

// hover:bg-white/20

// transition

// "


// >


// <X
// size={20}
// />


// </motion.button>




// <div
// className="
// relative
// "
// >


// <div

// className="

// flex

// items-center

// gap-2

// mb-3

// "

// >

// <Sparkles
// className="text-indigo-400"
// />


// <h2

// className="

// text-3xl

// font-bold

// "

// >

// Welcome Back

// </h2>


// </div>




// <p

// className="

// text-gray-400

// mb-8

// "

// >

// Login to continue managing your money

// </p>




// {
// error &&

// <p

// className="

// text-red-400

// mb-4

// text-sm

// "

// >

// {error}

// </p>

// }





// {/* Email */}


// <div

// className="

// flex

// items-center

// gap-3

// bg-[#11151F]

// border

// border-white/10

// rounded-2xl

// px-4

// mb-4

// "

// >


// <Mail

// size={20}

// className="text-indigo-400"

// />


// <input

// type="email"

// placeholder="Email"

// value={email}

// onChange={(e)=>
// setEmail(e.target.value)
// }


// className="

// w-full

// bg-transparent

// py-4

// outline-none

// text-white

// "

// />


// </div>





// {/* Password */}



// <div

// className="

// flex

// items-center

// gap-3

// bg-[#11151F]

// border

// border-white/10

// rounded-2xl

// px-4

// "

// >


// <Lock

// size={20}

// className="text-purple-400"

// />


// <input

// type="password"

// placeholder="Password"

// value={password}

// onChange={(e)=>
// setPassword(e.target.value)
// }


// className="

// w-full

// bg-transparent

// py-4

// outline-none

// text-white

// "

// />


// </div>






// <motion.button


// whileTap={{
// scale:.95
// }}


// onClick={handleLogin}


// disabled={loading}


// className="

// w-full

// mt-7

// py-4

// rounded-2xl

// font-semibold

// text-white

// bg-gradient-to-r

// from-indigo-600

// to-purple-600

// shadow-lg

// "


// >


// {
// loading
// ?
// "Logging in..."
// :
// "Login"
// }


// </motion.button>






// <p

// className="

// text-center

// mt-6

// text-gray-400

// "

// >


// Don't have an account?


// <button

// onClick={switchToSignup}

// className="

// ml-2

// text-indigo-400

// font-medium

// "

// >

// Sign Up

// </button>


// </p>




// </div>



// </motion.div>


// );


// }


// export default LoginModal;
import {useState} from "react";
import {motion} from "framer-motion";
import {
X,
Mail,
Lock,
Sparkles
} from "lucide-react";


import {
loginUser,
getCurrentUser
} from "../../services/authServices";


import {
useAuth
} from "../../context/AuthContext";


import {
useNavigate
} from "react-router-dom";



export default function LoginModal({
close,
switchToSignup
}){


const {login}=useAuth();

const navigate=useNavigate();



const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [error,setError]=useState("");

const [loading,setLoading]=useState(false);



const handleLogin=async()=>{


try{


setLoading(true);

setError("");



const token=
await loginUser({
email,
password
});



localStorage.setItem(
"token",
token.access_token
);



const user=
await getCurrentUser();



login(
token.access_token,
user
);



close();


setTimeout(()=>{

navigate("/dashboard");

},200);



}

catch(err){

setError(
err.response?.data?.detail ||
"Invalid credentials"
);


}

finally{

setLoading(false);

}



};



return (

<motion.div

className="
relative
w-[330px]
rounded-[32px]
bg-[#181A20]
border
border-white/10
p-7
shadow-2xl
overflow-hidden
"

>


<div
className="
absolute
w-44
h-44
bg-indigo-600/30
blur-3xl
top-0
right-0
"
/>



<motion.button

type="button"

whileHover={{
scale:1.1,
rotate:90
}}

whileTap={{
scale:0.9
}}

onClick={(e)=>{

e.preventDefault();

e.stopPropagation();

console.log("close clicked");

close();

}}

className="
absolute
right-5
top-5
z-50
w-10
h-10
rounded-full
bg-white/10
flex
items-center
justify-center
text-gray-300
hover:bg-white/20
transition
cursor-pointer
"

>

<X size={20}/>

</motion.button>


<div className="relative">


<div className="
flex
items-center
gap-2
mb-3
">


<Sparkles
className="text-indigo-400"
/>


<h1 className="
text-3xl
font-bold
">

Welcome Back

</h1>


</div>



<p className="
text-gray-400
mb-8
">

Continue managing your expenses

</p>




{
error &&
<p className="
text-red-400
text-sm
mb-4
">

{error}

</p>
}




<div className="
space-y-4
">


<div className="
flex
items-center
gap-3
rounded-2xl
bg-[#11151F]
border
border-white/10
px-4
">


<Mail
size={20}
className="text-indigo-400"
/>


<input

value={email}

onChange={(e)=>setEmail(e.target.value)}

placeholder="Email"

className="
w-full
py-4
bg-transparent
outline-none
text-white
"

/>


</div>





<div className="
flex
items-center
gap-3
rounded-2xl
bg-[#11151F]
border
border-white/10
px-4
">


<Lock
size={20}
className="text-purple-400"
/>


<input

type="password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

placeholder="Password"

className="
w-full
py-4
bg-transparent
outline-none
text-white
"

/>


</div>


</div>






<motion.button

whileTap={{
scale:.96
}}

onClick={handleLogin}

disabled={loading}


className="
mt-7
w-full
rounded-2xl
py-4
font-semibold
bg-gradient-to-r
from-indigo-600
to-purple-600
text-white
"

>


{
loading?
"Logging in..."
:
"Login"
}


</motion.button>



<p className="
text-center
mt-6
text-gray-400
">


Don't have an account?


<button

onClick={switchToSignup}

className="
ml-2
text-indigo-400
"

>

Sign Up

</button>


</p>


</div>


</motion.div>


)

}