//Update Data
export async function updateUser() {
    const user = {
        email: "admin@gmail.com",
        active: "1",
        role: "ADMIN",
        permission: "ADMIN"
    }

    const response = await fetch('http://localhost:8080/api/user/admin@gmail.com', {

        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }

    })
}
