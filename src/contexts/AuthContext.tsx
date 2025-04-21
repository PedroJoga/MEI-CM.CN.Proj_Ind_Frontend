"use client"
import { createContext, useState, ReactNode, useEffect } from "react";
import { api, setAuthToken } from "../services/api";
import { setCookie, parseCookies } from "nookies";

type User = {
    username: string;
    email: string;
    avatar_url: string;
}

type SignInData = {
    email: string;
    password: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    signIn: (data: SignInData) => Promise<boolean>;
}

export const AuthContext = createContext({} as AuthContextType);

type AuthProviderProps = {
    children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'echochat.token': token } = parseCookies();

        if (token) {
            setAuthToken(token); // define o token nos headers

            api.get("/users/me")
                .then(response => {
                    setUser({
                        username: response.data.username,
                        email: response.data.email,
                        avatar_url: response.data.userPhotoLink,
                      });
                })
                .catch(() => {
                    // Token inválido ou expirado — opcionalmente pode-se remover o cookie
                    setUser(null);
                });
        }
    }, []);


    async function signIn({ email, password }: SignInData): Promise<boolean> {
        try {
            const response = await api.post("http://localhost:8080/auth/login", {
                email,
                password
            });

            const { token, user } = response.data;

            setCookie(undefined, 'echochat.token', token, {
                maxAge: 60 * 60 * 24, // 24 hours
                path: "/"
            });

            setAuthToken(token);
            setUser(user);

            return true; 
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            return false;   
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )

}