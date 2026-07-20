import { useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  User,
  Mail,
  Save,
  CheckCircle2,
} from "lucide-react";

import {
  updateProfile,
} from "../../services/userServices";


export default function EditProfileModal({
  close,
  user,
  onSuccess,
}) {


  const [form, setForm] = useState({

    name: user?.name || "",

    email: user?.email || "",

  });



  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");




  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });

  };





  const handleSubmit = async () => {


    try {

      setLoading(true);

      setError("");



      const updatedUser =
        await updateProfile(form);




      localStorage.setItem(
        "user",
        JSON.stringify(updatedUser)
      );



      if(onSuccess){

        onSuccess(updatedUser);

      }



      setSuccess(true);



      setTimeout(() => {

        close();

      },1200);



    }


    catch(error){

      console.error(
        "Profile update failed",
        error
      );


      setError(
        error.response?.data?.detail ||
        "Failed to update profile"
      );


    }


    finally{

      setLoading(false);

    }


  };






  return (


    <div

      className="
       w-[330px]
max-w-[150vw]
        rounded-t-[32px]
        bg-[#181A20]
        border
        border-white/10
        px-6
        pt-6
        pb-6
        shadow-xl
        overflow-hidden
      "

    >




      {/* Drag Handle */}

      <div

        className="
          mx-auto
          mb-6
          h-1.5
          w-12
          rounded-full
          bg-white/20
        "

      />





      {/* Header */}


      <div

        className="
          flex
          items-center
          justify-between
        "

      >



        <div>


          <h2

            className="
              text-2xl
              font-bold
              text-white
            "

          >

            Edit Profile

          </h2>



          <p

            className="
              mt-1
              text-sm
              text-gray-400
            "

          >

            Update your personal information

          </p>


        </div>





        <motion.button

          whileHover={{
            rotate:90,
            scale:1.1
          }}

          whileTap={{
            scale:0.9
          }}

          onClick={close}

          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white/10
            text-gray-300
          "

        >

          <X size={20}/>


        </motion.button>


      </div>






      {/* Error */}


      {
        error &&

        <motion.p

          initial={{
            x:-10,
            opacity:0
          }}

          animate={{
            x:0,
            opacity:1
          }}

          className="
            mt-4
            text-sm
            text-red-400
          "

        >

          {error}

        </motion.p>

      }







      {/* Success */}


      {
        success &&

        <motion.div

          initial={{
            scale:0,
            opacity:0
          }}

          animate={{
            scale:1,
            opacity:1
          }}

          className="
            mt-5
            flex
            items-center
            gap-2
            text-green-400
          "

        >

          <CheckCircle2 size={20}/>

          Profile updated successfully

        </motion.div>


      }








      {/* Inputs */}


      <div

        className="
          mt-7
          space-y-4
        "

      >



        <InputBox

          icon={
            <User size={18}/>
          }

          name="name"

          value={form.name}

          placeholder="Full Name"

          onChange={handleChange}

        />






        <InputBox

          icon={
            <Mail size={18}/>
          }

          name="email"

          value={form.email}

          placeholder="Email Address"

          onChange={handleChange}

        />



      </div>









      {/* Save Button */}



      <motion.button

        whileTap={{
          scale:0.96
        }}


        onClick={handleSubmit}


        disabled={loading}


        className="
          mt-6
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-gradient-to-r
          from-indigo-600
          to-purple-600
          py-3.5
          font-semibold
          text-white
          shadow-lg
          shadow-indigo-500/30
          disabled:opacity-50
        "

      >


        <Save size={18}/>



        {
          loading
          ?
          "Saving..."
          :
          "Save Changes"
        }


      </motion.button>





    </div>


  );

}







function InputBox({
  icon,
  name,
  value,
  placeholder,
  onChange,
}){


return (

<div

className="
flex
items-center
gap-3
rounded-2xl
border
border-white/10
bg-[#11151F]
px-4
transition
focus-within:border-indigo-500
"


>


<span

className="
text-indigo-400
"

>

{icon}

</span>




<input


name={name}


value={value}


placeholder={placeholder}


onChange={onChange}


className="
w-full
bg-transparent
py-3.5
text-white
outline-none
"


/>



</div>


);


}