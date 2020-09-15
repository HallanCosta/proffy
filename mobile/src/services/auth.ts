import api from '../services/api';

export interface UserAccount {
  email: string;
  password: string;
}

interface UserAuthResponse { 
  token: string;
  user: {
    name: string;
    email: string;
    photo: string;
  }
}

interface UserAuthErrorResponse {
  message: string;
}

export async function signIn(userAccount: UserAccount): Promise<UserAuthResponse | UserAuthErrorResponse> {
  try {
    const response = await api.post('/authenticate', userAccount);

    return response.data;
  } catch (error) {
    return error;
  }
}