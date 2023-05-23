// Function for Admin with right role to get all users
export async function getUsers(){
    const response = await fetch(
      'http://localhost:8080/api/user/users'
    ).then((response) => response.json());
    console.log("Users in function  ");
    console.log(response);
    // update the state
  return response;
  }