import { useState } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import FormBlogingComponent from "@/components/share/FormBloging";
import MainLayout from "@/components/layouts/MainLayout";
import { createBlogHandle } from "@/services/blog.services";
import { convertTitleToSlug } from "@/utils/convertTitleToSlug";

interface DataBlogProps {
    title: string
    thumbnail: string
    authors: string
    status: string
    other_names: string
    description: string
    blogHashtag: string[]
    content: string
}

const AdminCreatePostPage: NextPageWithLayout = () => {
    const [data, setData] = useState<DataBlogProps>({
        title: "",
        thumbnail: "",
        authors: "",
        status: "",
        other_names: "",
        description: "",
        blogHashtag: ["vesmart", "robothutbui", "suachuadanang"],
        content: "",
    });

    const handleCreateBlog = async () => {
        try {
            // e.preventDefault();
            // const { title, thumbnail, authors, status, other_names, description, blogHashtag, content } = data;
            if(!data?.content || data?.content?.length < 10 && data.title.length < 10) {
                console.log("Nhập vào không đúng")
                return;
            }

            const createBlog = await createBlogHandle({
                ...data,
                slug: convertTitleToSlug(data.title) as string
            });

            console.log(createBlog);

        } catch (error) {
            
        }
    }
    
    return (
        <>
            <div className="flex w-full min-h-screen bg-white">

                <FormBlogingComponent
                    data={data}
                    setData={setData}
                    handle={handleCreateBlog}
                />

            </div>
        </>
    );
};

export default AdminCreatePostPage;

AdminCreatePostPage.getLayout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};
