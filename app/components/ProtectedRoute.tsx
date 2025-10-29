'use client';
import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface Props {
    children: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) router.push("/login");
        else setLoading(false);
    }, []);

    if (loading) return <div>Loading...</div>;
    return <>{children}</>;
}
