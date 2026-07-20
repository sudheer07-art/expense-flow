// import {
//   User,
//   Mail,
//   Bell,
//   Shield,
//   Moon,
//   LogOut,
//   ChevronRight,
// } from "lucide-react";
// import ChangePassword from "../../components/settings/ChangePassword";
// import Modal from "../../components/common/Modal";
// import { useEffect, useState } from "react";

// import EditProfileModal from "../../components/settings/EditProfileModal";

// import { getCurrentUser } from "../../services/userServices";


// function Profile() {

// const [showPasswordModal, setShowPasswordModal] = useState(false);
//   const [user,setUser] = useState(null);

//   const [showEdit,setShowEdit] = useState(false);



//   const loadUser = async()=>{

//     try{

//       const data = await getCurrentUser();

//       setUser(data);

//     }
//     catch(error){

//       console.error(
//         "Failed loading user",
//         error
//       );

//     }

//   };



//   useEffect(()=>{

//     loadUser();

//   },[]);




//   const items = [
//     {
//       icon: User,
//       title: "Personal Information",
//       action:()=>setShowEdit(true),
//     },

//     {
//       icon: Mail,
//       title:"Email",
//     },

//     {
//       icon: Bell,
//       title:"Notifications",
//     },

//     {
//       icon: Moon,
//       title:"Appearance",
//     },

//     {
//   icon: Shield,
//   title: "Privacy",
//   action:()=>setShowPasswordModal(true),
// },

//     {
//       icon: LogOut,
//       title:"Logout",
//     },
//   ];



//   return (

//     <div className="min-h-full p-5 pb-40">


//       <h1 className="text-3xl font-bold mb-8">
//         Profile
//       </h1>



//       {/* Profile Header */}

//       <div className="
//         flex
//         flex-col
//         items-center
//         mb-8
//       ">


//         <div className="
//           w-28
//           h-28
//           rounded-full
//           bg-indigo-600
//           flex
//           items-center
//           justify-center
//           text-5xl
//           font-bold
//         ">

//           {
//             user?.name
//             ?.charAt(0)
//             ?.toUpperCase()
//             ||
//             "U"
//           }

//         </div>



//         <h2 className="
//           text-2xl
//           font-bold
//           mt-5
//         ">

//           {
//             user?.name || "User"
//           }

//         </h2>



//         <p className="text-gray-400">

//           {
//             user?.email || "email@example.com"
//           }

//         </p>


//       </div>




//       {/* Settings Items */}

//       <div className="space-y-4">


//         {
//           items.map((item)=>{

//             const Icon=item.icon;


//             return(

//               <button

//                 key={item.title}

//                 onClick={item.action}

//                 className="
//                   w-full
//                   bg-[#1B1C22]
//                   rounded-2xl
//                   p-5
//                   border
//                   border-[#2A2B32]
//                   flex
//                   justify-between
//                   items-center
//                   hover:border-indigo-500
//                   transition
//                 "

//               >


//                 <div className="
//                   flex
//                   items-center
//                   gap-4
//                 ">

//                   <Icon size={22}/>

//                   <span>
//                     {item.title}
//                   </span>


//                 </div>


//                 <ChevronRight size={20}/>


//               </button>

//             )

//           })
//         }


//       </div>




//       {
// showEdit && (

// <Modal
// close={()=>
// setShowEdit(false)
// }
// >


// <EditProfileModal

// user={user}

// close={()=>
// setShowEdit(false)
// }

// onSuccess={()=>{
// loadUser();
// }}

// />


// </Modal>

// )
// }

// {
// showPasswordModal && (

// <Modal

// close={()=>
// setShowPasswordModal(false)
// }

// >


// <ChangePassword

// close={()=>
// setShowPasswordModal(false)
// }

// />


// </Modal>

// )
// }

//     </div>

//   );
// }


// export default Profile;
import {
  User,
  Mail,
  Bell,
  Shield,
  Moon,
  LogOut,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";
import ChangePassword from "../../components/settings/ChangePassword";
import EditProfileModal from "../../components/settings/EditProfileModal";
import Modal from "../../components/common/Modal";

import { getCurrentUser } from "../../services/userServices";


function Profile() {


  const [user,setUser] = useState(null);

  const [showEdit,setShowEdit] = useState(false);

  const [showPasswordModal,setShowPasswordModal] =
    useState(false);

const { logout } = useAuth();

const navigate = useNavigate();

  const loadUser = async()=>{

    try{

      const data =
        await getCurrentUser();

      setUser(data);

    }
    catch(error){

      console.error(
        "Failed loading user",
        error
      );

    }

  };



  useEffect(()=>{

    loadUser();

  },[]);

const handleLogout = ()=>{

  logout();

  navigate("/");

};

  const items=[

    {
      icon:User,
      title:"Personal Information",
      subtitle:"Manage your profile",
      action:()=>setShowEdit(true)
    },


    
  


    {
      icon:Shield,
      title:"Privacy",
      subtitle:"Security settings",
      action:()=>setShowPasswordModal(true)
    },


    {
      icon:LogOut,
      title:"Logout",
      subtitle:"Sign out",
      action: handleLogout
    }

  ];





return (

<motion.div

initial={{
 opacity:0,
 y:20
}}

animate={{
 opacity:1,
 y:0
}}

transition={{
 duration:.5
}}

className="
min-h-full
p-5
pb-40
"

>


{/* HEADER */}

<motion.h1

initial={{
x:-30,
opacity:0
}}

animate={{
x:0,
opacity:1
}}

className="
text-3xl
font-bold
mb-8
"

>
Profile
</motion.h1>





{/* PROFILE CARD */}


<motion.div

initial={{
scale:.9,
opacity:0
}}

animate={{
scale:1,
opacity:1
}}

transition={{
type:"spring",
stiffness:180
}}

className="
relative
rounded-[32px]
bg-gradient-to-br
from-indigo-600/30
via-purple-600/20
to-transparent
border
border-white/10
p-6
mb-8
overflow-hidden
"

>


{/* glow */}

<div
className="
absolute
w-40
h-40
bg-indigo-500
blur-3xl
opacity-20
top-0
right-0
"
/>




<motion.div

animate={{
y:[0,-8,0]
}}

transition={{
duration:3,
repeat:Infinity
}}

className="
relative
mx-auto
w-32
h-32
rounded-full
bg-gradient-to-br
from-indigo-500
to-purple-600
flex
items-center
justify-center
text-6xl
font-bold
shadow-xl
"

>

{
user?.name
?.charAt(0)
?.toUpperCase()
||
"U"
}

</motion.div>





<h2 className="
text-center
text-3xl
font-bold
mt-5
">

{
user?.name || "User"
}

</h2>



<p className="
text-center
text-gray-400
mt-1
">

{
user?.email || "email@example.com"
}

</p>



<motion.div

whileHover={{
scale:1.05
}}

className="
mt-5
mx-auto
w-fit
px-4
py-2
rounded-full
bg-white/10
flex
items-center
gap-2
text-sm
"

>

<Sparkles size={16}/>

ExpenseFlow Member

</motion.div>



</motion.div>





{/* SETTINGS */}


<div className="space-y-4">


{
items.map((item,index)=>{


const Icon=item.icon;


return (

<motion.button

key={item.title}

initial={{
x:40,
opacity:0
}}

animate={{
x:0,
opacity:1
}}

transition={{
delay:index*.08
}}


whileHover={{
scale:1.03,
x:5
}}

whileTap={{
scale:.96
}}


onClick={item.action}


className="
w-full
rounded-3xl
p-5
bg-[#1B1C22]
border
border-white/10
flex
items-center
justify-between
hover:border-indigo-500/70
transition
"

>


<div className="
flex
items-center
gap-4
">


<div className="
w-12
h-12
rounded-2xl
bg-white/5
flex
items-center
justify-center
"

>

<Icon
size={22}
/>

</div>



<div className="text-left">

<p className="
font-semibold
text-lg
">

{item.title}

</p>


<p className="
text-sm
text-gray-400
">

{item.subtitle}

</p>


</div>


</div>



<ChevronRight
size={22}
className="text-gray-400"
/>


</motion.button>


)


})

}


</div>





{/* EDIT PROFILE MODAL */}


{
showEdit &&

(

<Modal

close={()=>
setShowEdit(false)
}

>

<EditProfileModal

user={user}

close={()=>
setShowEdit(false)
}

onSuccess={()=>{
loadUser();
}}

/>


</Modal>

)

}




{/* PASSWORD MODAL */}


{
showPasswordModal &&

(

<Modal

close={()=>
setShowPasswordModal(false)
}

>


<ChangePassword

close={()=>
setShowPasswordModal(false)
}

/>


</Modal>

)

}



</motion.div>


);


}


export default Profile;