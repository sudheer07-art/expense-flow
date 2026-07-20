// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// import {
//   getCurrentUser,
//   logoutUser,
// } from "../services/authServices";


// const AuthContext = createContext();



// export function AuthProvider({ children }) {


//   const [user, setUser] = useState(null);

//   const [loading, setLoading] = useState(true);



//   // Check existing login when app starts

//   useEffect(() => {

//     checkAuth();

//   }, []);




//   const checkAuth = async () => {

//     const token =
//       localStorage.getItem("token");


//     if (!token) {

//       setLoading(false);

//       return;

//     }



//     try {

//       const currentUser =
//         await getCurrentUser();


//       setUser(currentUser);


//     } catch (error) {


//       console.error(
//         "Authentication failed",
//         error
//       );


//       logoutUser();

//       setUser(null);


//     } finally {

//       setLoading(false);

//     }

//   };





//   // Login function

//   const login = (
//     token,
//     userData
//   ) => {


//     localStorage.setItem(
//       "token",
//       token
//     );


//     setUser(userData);

//   };





//   // Logout function

//   const logout = () => {


//     logoutUser();


//     setUser(null);

//   };





//   return (

//    <AuthContext.Provider
//   value={{
//     user,
//     setUser,
//     login,
//     logout,
//     loading,
//     isAuthenticated: !!user,
//   }}
// >

//       {children}

//     </AuthContext.Provider>

//   );

// }





// export function useAuth() {

//   const context =
//     useContext(AuthContext);


//   if (!context) {

//     throw new Error(
//       "useAuth must be used inside AuthProvider"
//     );

//   }


//   return context;

// }
import {
createContext,
useContext,
useState
}
from "react";


const AuthContext=createContext();



export function AuthProvider({children}){


const [user,setUser]=useState(null);



const login=(token)=>{

localStorage.setItem(
"token",
token
);

};



const logout=()=>{

localStorage.removeItem(
"token"
);

setUser(null);

};



return (

<AuthContext.Provider
value={{
user,
setUser,
login,
logout
}}
>

{children}

</AuthContext.Provider>

)

}



export const useAuth=()=>useContext(AuthContext);