
import {
useState
} from "react";

import {
motion
} from "framer-motion";

import {
Lock,
CheckCircle2,
X
} from "lucide-react";

import {
changePassword
} from "../../services/authServices";



export default function ChangePasswordModal({
close
}){


const [form,setForm]=useState({

current_password:"",
new_password:"",
confirm_password:""

});


const [loading,setLoading]=useState(false);

const [success,setSuccess]=useState(false);

const [error,setError]=useState("");





const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:
e.target.value

});

};





const submit=async()=>{


if(
form.new_password !==
form.confirm_password
){

setError(
"Passwords do not match"
);

return;

}



try{


setLoading(true);

setError("");



await changePassword({

current_password:
form.current_password,


new_password:
form.new_password

});



setSuccess(true);



setTimeout(()=>{

close();

},1200);



}

catch(err){


setError(

err.response?.data?.detail
||
"Password update failed"

);


}

finally{

setLoading(false);

}


};




return(


<motion.div


initial={{
y:"100%",
opacity:0
}}

animate={{
y:0,
opacity:1
}}

exit={{
y:"100%",
opacity:0
}}

transition={{
type:"spring",
stiffness:280,
damping:30
}}


className="
rounded-t-[35px]
bg-[#181A20]
p-6
border
border-white/10
"


>


<div className="
flex
justify-between
items-center
">


<h2 className="
text-2xl
font-bold
text-white
">

Change Password

</h2>



<button
onClick={close}
>

<X/>

</button>


</div>



<p className="
text-gray-400
mt-2
">

Secure your account

</p>




{
error &&

<p className="
text-red-400
mt-4
">

{error}

</p>

}





{
success &&

<motion.div

initial={{
scale:0
}}

animate={{
scale:1
}}

className="
flex
gap-2
items-center
text-green-400
mt-5
"

>

<CheckCircle2/>

Password Updated

</motion.div>

}






<div className="
space-y-4
mt-7
">


<PasswordInput

name="current_password"

placeholder="Current Password"

value={form.current_password}

onChange={handleChange}

/>


<PasswordInput

name="new_password"

placeholder="New Password"

value={form.new_password}

onChange={handleChange}

/>


<PasswordInput

name="confirm_password"

placeholder="Confirm Password"

value={form.confirm_password}

onChange={handleChange}

/>


</div>




<motion.button

whileTap={{
scale:.96
}}

onClick={submit}

className="
mt-7
w-full
py-4
rounded-2xl
bg-gradient-to-r
from-indigo-600
to-purple-600
font-semibold
text-white
"

>

{
loading
?
"Updating..."
:
"Update Password"
}


</motion.button>



</motion.div>


);


}




function PasswordInput({
name,
placeholder,
value,
onChange
}){


return (

<div className="
flex
items-center
bg-[#11151F]
border
border-white/10
rounded-2xl
px-4
focus-within:border-indigo-500
">


<Lock
size={18}
className="
text-purple-400
"
/>


<input

name={name}

type="password"

placeholder={placeholder}

value={value}

onChange={onChange}

className="
w-full
py-4
ml-3
bg-transparent
text-white
outline-none
"

/>


</div>


);

}