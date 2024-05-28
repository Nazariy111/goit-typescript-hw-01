type User = {
    surname: string;
    email: string;
    password: string;
    name: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  // Оновлення користувача
}

createOrUpdateUser({
    password: "password123",
    email: "user@mail.com",
});