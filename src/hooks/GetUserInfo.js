// Function to display users
export async function getUserInfo (){
    const response = await fetch(
      'http://localhost:8080/api/user/info'
    ).then((response) => response.json());
  };