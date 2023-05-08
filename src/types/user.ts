export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserInfo extends IUserLogin {
  phoneNumber: number;
}
export interface ILoginResponse {
  token: string;
  createdAt: Date;
  email: string;
  refreshToken: string;
  username: string;
  _id: string;
}

export interface IUserRegister extends IUserLogin {
  gender: string;
  dateOfBirth: string;
  username: string;
}

export interface IUserInformation {
  id: number;
  email: string;
  // createdDate: Date;
  // updatedDate: Date;
  // role: Object;
  // active: boolean;
}
