// types.ts
export interface AuthContextType {
    user: { name: string } | null; // adjust type as per your user object
    loading: boolean;
}
