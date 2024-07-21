// types.ts
export interface Course {
    id: number;
    name: string;
    course_type: string;
    price: number;
    thumbnail_url: string;
    description: string; // Add other fields as needed
}

export interface Purchase {
    id: string;
    course_name: string;
    thumbnail_url: string;
    course_type: string;
    price: string;
    description: string;
    duration: string;
}

export interface User {
    id: string;
    email: string;
}