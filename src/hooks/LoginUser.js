//Function to Login a user
export async function loginUser() {
  const user = {
    email: "reactjs11@mail.com",
    password: "1234"
  }

  const response = await fetch('http://localhost:8080/api/auth/login', {

    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }

  })
}