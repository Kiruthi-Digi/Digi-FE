export async function deleteUser(){
    
    fetch('http://localhost:8080/api/user/user10@gmail.com', {
        method: 'DELETE'
      });
  }
