export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  email: string;
  token: string;
};

export type RegisterPayload = {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
};

export type RegisterResponse = {
  newUser: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  token: string;
};
