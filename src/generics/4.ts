type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>) {
  // оновлення користувача 
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
