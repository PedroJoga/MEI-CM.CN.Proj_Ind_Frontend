"use client"
import { createContext, useState, ReactNode, useEffect } from "react";
import { api, setAuthToken } from "../services/api";
import { setCookie, parseCookies } from "nookies";
import { useRouter } from "next/navigation";

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
    signIn: (data: SignInData, router: ReturnType<typeof useRouter>) => Promise<void>;
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
                    const { username, email, avatar_url } = response.data;
                    setUser({ username, email, avatar_url });
                })
                .catch(() => {
                    // Token inválido ou expirado — opcionalmente pode-se remover o cookie
                    setUser(null);
                });
        }
    }, []);


    async function signIn({ email, password }: SignInData, router: ReturnType<typeof useRouter>) {
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

            router.push('/dashboard');
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )

}