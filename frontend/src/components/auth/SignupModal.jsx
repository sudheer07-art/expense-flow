// import { useState } from "react";
// import { registerUser, loginUser, getCurrentUser } from "../../services/authServices";
// import { useAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// function SignupModal({ close, switchToLogin }) {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//  const handleSignup = async () => {
//   if (form.password !== form.confirmPassword) {
//     setError("Passwords do not match");
//     return;
//   }

//   try {
//     setLoading(true);
//     setError("");

//     await registerUser({
//       name: form.name,
//       email: form.email,
//       password: form.password,
//     });

//     // Login automatically
//     const tokenData = await loginUser({
//   email: form.email,
//   password: form.password,
// });

//     // Save token first
//     localStorage.setItem("token", tokenData.access_token);

//     // Fetch user
//     const userData = await getCurrentUser();

//     // Update AuthContext
//     login(tokenData.access_token, userData);

// close();

// navigate("/dashboard");
//   } catch (err) {
//     console.error(err);

//     setError(
//       err.response?.data?.detail ||
//       "Registration failed"
//     );
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <div className="w-[420px] rounded-3xl bg-[#181A20] border border-[#2A2B32] p-8 shadow-2xl">

//       <h2 className="text-3xl font-bold mb-2">
//         Create Account
//       </h2>

//       <p className="text-gray-400 mb-8">
//         Join ExpenseFlow
//       </p>

//       {error && (
//         <p className="text-red-500 mb-4">
//           {error}
//         </p>
//       )}

//       <input
//         name="name"
//         placeholder="Full Name"
//         value={form.name}
//         onChange={handleChange}
//         className="w-full p-4 rounded-xl bg-[#23252C] mb-4"
//       />

//       <input
//         name="email"
//         placeholder="Email"
//         value={form.email}
//         onChange={handleChange}
//         className="w-full p-4 rounded-xl bg-[#23252C] mb-4"
//       />

//       <input
//         name="password"
//         type="password"
//         placeholder="Password"
//         value={form.password}
//         onChange={handleChange}
//         className="w-full p-4 rounded-xl bg-[#23252C] mb-4"
//       />

//       <input
//         name="confirmPassword"
//         type="password"
//         placeholder="Confirm Password"
//         value={form.confirmPassword}
//         onChange={handleChange}
//         className="w-full p-4 rounded-xl bg-[#23252C]"
//       />

//       <button
//         onClick={handleSignup}
//         disabled={loading}
//         className="w-full mt-6 bg-indigo-600 rounded-xl p-4 font-semibold"
//       >
//         {loading ? "Creating..." : "Create Account"}
//       </button>

//       <p className="text-center mt-6 text-gray-400">
//         Already have an account?

//         <button
//           onClick={switchToLogin}
//           className="text-indigo-500 ml-2"
//         >
//           Login
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

// export default SignupModal;
import {motion} from "framer-motion";
import {
X,
User,
Mail,
Lock,
Sparkles
} from "lucide-react";

import {useState} from "react";

import {
registerUser,
loginUser,
getCurrentUser
} from "../../services/authServices";

import {useAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";


export default function SignupModal({
close,
switchToLogin
}){


const {login}=useAuth();

const navigate=useNavigate();


const [form,setForm]=useState({
name:"",
email:"",
password:"",
confirmPassword:""
});


const [error,setError]=useState("");

const [loading,setLoading]=useState(false);



const change=(e)=>{

setForm({
...form,
[e.target.name]:e.target.value
});

};



const signup=async()=>{


if(form.password!==form.confirmPassword){

setError("Passwords do not match");
return;

}


try{


setLoading(true);


await registerUser({
name:form.name,
email:form.email,
password:form.password
});


const token=
await loginUser({
email:form.email,
password:form.password
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

navigate("/dashboard");


}

catch(err){

setError(
err.response?.data?.detail ||
"Signup failed"
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
"


>


<motion.button

whileHover={{
rotate:90
}}

onClick={close}

className="
absolute
right-5
top-5
w-10
h-10
rounded-full
bg-white/10
flex
items-center
justify-center
"

>

<X/>

</motion.button>



<h1 className="
text-3xl
font-bold
mb-3
">

Create Account

</h1>


<p className="
text-gray-400
mb-7
">

Join ExpenseFlow

</p>




<div className="space-y-3">


{
[
["name","Name",User],
["email","Email",Mail],
["password","Password",Lock],
["confirmPassword","Confirm Password",Lock]
].map(([key,placeholder,Icon])=>(

<div
key={key}
className="
flex
items-center
gap-3
bg-[#11151F]
border
border-white/10
rounded-2xl
px-4
"
>

<Icon size={18}/>

<input

name={key}

type={
key.includes("password")
?
"password"
:
"text"
}

placeholder={placeholder}

value={form[key]}

onChange={change}

className="
w-full
py-4
bg-transparent
outline-none
text-white
"

/>


</div>


))
}


</div>



<button

onClick={signup}

disabled={loading}

className="
mt-6
w-full
rounded-2xl
py-4
bg-gradient-to-r
from-indigo-600
to-purple-600
font-semibold
"

>

{
loading?
"Creating..."
:
"Create Account"
}

</button>


<p className="
text-center
mt-5
text-gray-400
">

Already have account?

<button
onClick={switchToLogin}
className="
ml-2
text-indigo-400
"
>

Login

</button>

</p>


</motion.div>


)

}