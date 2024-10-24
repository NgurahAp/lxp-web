import axios from "axios";
import { LoginResponse } from "../types/auth";
import { API_BASE_URL } from "../config/api";

// https://api.m-knows.com/api/v1/auth/login-username

export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(
      `${API_BASE_URL}/api/v1/auth/login-username`,
      { username, password }
    );
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const refreshToken = async (): Promise<string> => {
  const response = await axios.post<LoginResponse>(
    `${API_BASE_URL}/api/v1/refresh-token`,
    {}
  );
  return response.data.data.access_token;
};
