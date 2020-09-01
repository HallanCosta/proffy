import api from '../services/api';

interface UserAccount {
  email: string;
  password: string;
}

interface UserAuthResponse { 
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export async function signIn(userAccount: UserAccount): Promise<UserAuthResponse> {
  const response = await api.post('/authenticate', userAccount);

  return response.data;
}