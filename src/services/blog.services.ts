// http://localhost:4000/api/blogs/sua-chua-robot-hut-bui-da-nang

import { apiUrl } from "@/config";
import axios from "axios";

interface dataBlog {
    title: string
    thumbnail: string
    authors: string
    status: string
    other_names: string
    description: string
    blogHashtag: string[]
    content: string | undefined
}

export const getBlogHandle = async (query: string) => {
    try {
        const blogRes = await axios.get(
            `${apiUrl}/api/blogs${query ? '?'+query : ''}`
        );
        return blogRes.data;
    } catch (error) {
        if(axios.isAxiosError(error) && error.response?.data) {
            return error.response.data;
        } else {
            return {
                success: false,
                message: (error as Error).message
            };
        }
    }
};

export const createBlogHandle = async (data: BlogTypes) => {
    try {
        const blogRes = await axios.post(
            `${apiUrl}/api/blogs`, data, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiaG9hbmdiYW8wMjAxMDNAZ21haWwuY29tIiwiaWF0IjoxNjkxNTA1ODUzLCJleHAiOjE2OTE1MDk0NTN9.0E30U3L6YMoxZtjX-C6EeFwyPHq0TuwTw7QGQawbp5k`,
                }
            }
        );
        return blogRes.data;
    } catch (error) {
        if(axios.isAxiosError(error) && error.response?.data) {
            return error.response.data;
        } else {
            return {
                success: false,
                message: (error as Error).message
            };
        }
    }
};

export const getBlogBySlugHandle = async (slug: string) => {
    try {
        const blogRes = await axios.get(
            `${apiUrl}/api/blogs/${slug}`, {}
        );
        return blogRes.data;
    } catch (error) {
        if(axios.isAxiosError(error) && error.response?.data) {
            return error.response.data;
        } else {
            return {
                success: false,
                message: (error as Error).message
            };
        }
    }
};

export const updateBlogHandle = async (id: number, data: any) => {
    try {
        const blogRes = await axios.patch(
            `${apiUrl}/api/blogs/${id}`
        );
        return blogRes.data;
    } catch (error) {
        if(axios.isAxiosError(error)) {
            return error;
        } else {
            return {
                success: false,
                message: (error as Error).message
            };
        }
    }
};