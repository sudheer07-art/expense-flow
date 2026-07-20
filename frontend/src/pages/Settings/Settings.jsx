import { useState } from "react";

import AuthOverlay from "../../components/auth/AuthOverlay";
import EditProfileModal from "../../components/settings/EditProfileModal";
import { motion } from "framer-motion";
import {
  User,
  Lock,
  Moon,
  Bell,
  Wallet,
  Download,
  Trash2,
  LogOut,
  ChevronRight,
} from "lucide-react";


export default function Settings() {

const [showEditProfile, setShowEditProfile] = useState(false);
  const user =
    JSON.parse(
      localStorage.getItem("user")
    ) || {};


  return (

    <div
      className="
        min-h-screen
        px-6
        pt-4
        pb-32
      "
    >


      {/* Header */}

      <motion.div

        initial={{
          opacity:0,
          y:15
        }}

        animate={{
          opacity:1,
          y:0
        }}

      >

        <h1
          className="
            text-2xl
            font-bold
            text-white
          "
        >
          Settings
        </h1>


        <p
          className="
            mt-1
            text-sm
            text-gray-400
          "
        >
          Manage your account and preferences
        </p>


      </motion.div>



      {/* Profile Card */}


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
          delay:0.1
        }}

        className="
          mt-6
          rounded-3xl
          bg-gradient-to-br
          from-indigo-600
          via-purple-600
          to-violet-700
          p-6
        "

      >


        <div
          className="
            flex
            items-center
            gap-4
          "
        >


          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-white/20
            "
          >

            <User
              size={32}
              className="text-white"
            />

          </div>



          <div>

            <h2
              className="
                text-xl
                font-bold
                text-white
              "
            >
              {user.name || "ExpenseFlow User"}
            </h2>


            <p
              className="
                text-sm
                text-white/70
              "
            >
              {user.email || "user@email.com"}
            </p>


          </div>


        </div>


      </motion.div>
            {/* Account Section */}

      <motion.div

        initial={{
          opacity:0,
          y:20,
        }}

        animate={{
          opacity:1,
          y:0,
        }}

        transition={{
          delay:0.2,
        }}

        className="mt-6"

      >

        <h2
          className="
            mb-3
            text-sm
            font-semibold
            uppercase
            tracking-wide
            text-gray-400
          "
        >
          Account
        </h2>


        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-white/5
            bg-[#1A1F2B]
          "
        >

          <button

  onClick={() =>
    setShowEditProfile(true)
  }

            className="
              flex
              w-full
              items-center
              justify-between
              p-5
              transition
              hover:bg-white/5
            "
          >

            <div
              className="
                flex
                items-center
                gap-4
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-indigo-500/20
                "
              >

                <User
                  size={20}
                  className="text-indigo-400"
                />

              </div>


              <div className="text-left">

                <h3
                  className="
                    font-medium
                    text-white
                  "
                >
                  Edit Profile
                </h3>


                <p
                  className="
                    text-xs
                    text-gray-400
                  "
                >
                  Update your personal details
                </p>


              </div>

            </div>


            <ChevronRight
              size={20}
              className="text-gray-500"
            />


          </button>



          <div
            className="
              h-px
              bg-white/5
            "
          />


          <button
            className="
              flex
              w-full
              items-center
              justify-between
              p-5
              transition
              hover:bg-white/5
            "
          >

            <div
              className="
                flex
                items-center
                gap-4
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-red-500/20
                "
              >

                <Lock
                  size={20}
                  className="text-red-400"
                />

              </div>


              <div className="text-left">

                <h3
                  className="
                    font-medium
                    text-white
                  "
                >
                  Change Password
                </h3>


                <p
                  className="
                    text-xs
                    text-gray-400
                  "
                >
                  Secure your account
                </p>


              </div>

            </div>


            <ChevronRight
              size={20}
              className="text-gray-500"
            />


          </button>


        </div>


      </motion.div>





      {/* Preferences Section */}


      <motion.div

        initial={{
          opacity:0,
          y:20,
        }}

        animate={{
          opacity:1,
          y:0,
        }}

        transition={{
          delay:0.3,
        }}

        className="mt-6"

      >

        <h2
          className="
            mb-3
            text-sm
            font-semibold
            uppercase
            tracking-wide
            text-gray-400
          "
        >
          Preferences
        </h2>



        <div
          className="
            rounded-3xl
            border
            border-white/5
            bg-[#1A1F2B]
          "
        >


          {/* Dark Mode */}

          <div
            className="
              flex
              items-center
              justify-between
              p-5
            "
          >

            <div
              className="
                flex
                items-center
                gap-4
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-purple-500/20
                "
              >

                <Moon
                  size={20}
                  className="text-purple-400"
                />

              </div>


              <div>

                <h3
                  className="
                    font-medium
                    text-white
                  "
                >
                  Dark Mode
                </h3>


                <p
                  className="
                    text-xs
                    text-gray-400
                  "
                >
                  App appearance
                </p>

              </div>


            </div>



            <div
              className="
                flex
                h-7
                w-12
                items-center
                rounded-full
                bg-indigo-600
                p-1
              "
            >

              <div
                className="
                  h-5
                  w-5
                  translate-x-5
                  rounded-full
                  bg-white
                  transition
                "
              />

            </div>


          </div>



          <div
            className="
              h-px
              bg-white/5
            "
          />



          {/* Notifications */}


          <div
            className="
              flex
              items-center
              justify-between
              p-5
            "
          >

            <div
              className="
                flex
                items-center
                gap-4
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-yellow-500/20
                "
              >

                <Bell
                  size={20}
                  className="text-yellow-400"
                />

              </div>


              <div>

                <h3
                  className="
                    font-medium
                    text-white
                  "
                >
                  Notifications
                </h3>


                <p
                  className="
                    text-xs
                    text-gray-400
                  "
                >
                  Expense reminders
                </p>

              </div>


            </div>


            <div
              className="
                flex
                h-7
                w-12
                items-center
                rounded-full
                bg-indigo-600
                p-1
              "
            >

              <div
                className="
                  h-5
                  w-5
                  translate-x-5
                  rounded-full
                  bg-white
                "
              />

            </div>


          </div>


        </div>


      </motion.div>
            {/* Data Management */}

      <motion.div

        initial={{
          opacity:0,
          y:20,
        }}

        animate={{
          opacity:1,
          y:0,
        }}

        transition={{
          delay:0.4,
        }}

        className="mt-6"

      >

        <h2
          className="
            mb-3
            text-sm
            font-semibold
            uppercase
            tracking-wide
            text-gray-400
          "
        >
          Data Management
        </h2>


        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-white/5
            bg-[#1A1F2B]
          "
        >


          {/* Currency */}

          <button
            className="
              flex
              w-full
              items-center
              justify-between
              p-5
              transition
              hover:bg-white/5
            "
          >

            <div
              className="
                flex
                items-center
                gap-4
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-emerald-500/20
                "
              >

                <Wallet
                  size={20}
                  className="text-emerald-400"
                />

              </div>


              <div className="text-left">

                <h3
                  className="
                    font-medium
                    text-white
                  "
                >
                  Currency
                </h3>


                <p
                  className="
                    text-xs
                    text-gray-400
                  "
                >
                  Indian Rupee (₹)
                </p>


              </div>


            </div>


            <ChevronRight
              size={20}
              className="text-gray-500"
            />


          </button>



          <div
            className="
              h-px
              bg-white/5
            "
          />



          {/* Export Data */}


          <button
            className="
              flex
              w-full
              items-center
              justify-between
              p-5
              transition
              hover:bg-white/5
            "
          >

            <div
              className="
                flex
                items-center
                gap-4
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-500/20
                "
              >

                <Download
                  size={20}
                  className="text-blue-400"
                />

              </div>


              <div className="text-left">

                <h3
                  className="
                    font-medium
                    text-white
                  "
                >
                  Export Data
                </h3>


                <p
                  className="
                    text-xs
                    text-gray-400
                  "
                >
                  Download your expenses
                </p>


              </div>


            </div>


            <ChevronRight
              size={20}
              className="text-gray-500"
            />


          </button>



          <div
            className="
              h-px
              bg-white/5
            "
          />



          {/* Delete Account */}


          <button
            className="
              flex
              w-full
              items-center
              justify-between
              p-5
              transition
              hover:bg-red-500/5
            "
          >

            <div
              className="
                flex
                items-center
                gap-4
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-red-500/20
                "
              >

                <Trash2
                  size={20}
                  className="text-red-400"
                />

              </div>


              <div className="text-left">

                <h3
                  className="
                    font-medium
                    text-red-400
                  "
                >
                  Delete Account
                </h3>


                <p
                  className="
                    text-xs
                    text-gray-400
                  "
                >
                  Permanently remove account
                </p>


              </div>


            </div>


            <ChevronRight
              size={20}
              className="text-gray-500"
            />


          </button>


        </div>


      </motion.div>





      {/* Logout Button */}


      <motion.button

        initial={{
          opacity:0,
          y:20,
        }}

        animate={{
          opacity:1,
          y:0,
        }}

        transition={{
          delay:0.5,
        }}

        className="
          mt-8
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          border
          border-red-500/20
          bg-red-500/10
          py-4
          font-semibold
          text-red-400
          transition
          hover:bg-red-500/20
          active:scale-95
        "

      >

        <LogOut size={20}/>

        Logout

      </motion.button>

{
  showEditProfile && (

    <AuthOverlay
      onClose={() =>
        setShowEditProfile(false)
      }
    >

      <EditProfileModal

        user={user}

        close={() =>
          setShowEditProfile(false)
        }


        onSuccess={(updatedUser)=>{

          setUser(updatedUser);


          localStorage.setItem(
            "user",
            JSON.stringify(updatedUser)
          );

        }}

      />

    </AuthOverlay>

  )
}
    </div>

  );
}