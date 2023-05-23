//Function to register a user
export async function registerUser() {
    const user = {
      email: "reactjs14@mail.com",
      password: "1234",
      active: 1,
      role: "USER",
      permission: "USER"
    }

    const response = await fetch('http://localhost:8080/api/auth/register', {

      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }

    })
  }
