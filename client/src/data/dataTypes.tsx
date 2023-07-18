export type loginInfo = {
  username: string;
  password: string;
};

export type accountInfo = {
  firstname: string;
  lastname: string;
  birthdate: string;
  email: string;
  address: string;
};

export type userInfo = {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  birthdate: string;
  email: string;
  address: string;
  userId?: number;
};

export type productInfo = {
  id: number;
  title: string;
  description: string;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string;
};
