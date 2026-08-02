export type User = {
  name: string;
  age: number;
};

export const saveUser = (user: User): void => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = (): User | null => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    return null;
  }

  return JSON.parse(storedUser) as User;
};

export const removeUser = (): void => {
  localStorage.removeItem("user");
};