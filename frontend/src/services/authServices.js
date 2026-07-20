import api from "./api";


// Login

export const loginUser = async (data) => {

    const response = await api.post(
        "/auth/login",
        {
            email: data.email,
            password: data.password,
        }
    );

 console.log("LOGIN RESPONSE:", response.data);
    localStorage.setItem(
        "token",
        response.data.access_token
    );


    return response.data;
};

    // localStorage.setItem(
    //     "token",
    //     response.data.access_token
    // );


    // return response.data;




// Register

export const registerUser = async (data) => {

    const response = await api.post(
        "/auth/register",
        data
    );

    return response.data;
};



// Get Current User

export const getCurrentUser = async () => {

    const response = await api.get(
        "/auth/me"
    );

    return response.data;
};



// Logout

export const logoutUser = () => {

    localStorage.removeItem(
        "token"
    );

};
export const changePassword = async(data)=>{

    const response = await api.put(
        "/auth/change-password",
        {
            current_password:
                data.current_password,

            new_password:
                data.new_password,
        }
    );


    return response.data;

};