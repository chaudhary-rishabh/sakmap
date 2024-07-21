// context/types.ts
// types.ts
export type User = {
    id: string;
    email: string;
    // Add other user properties as needed
};


export interface AuthContextType {
    user: User | null;
    loading: boolean;
}
