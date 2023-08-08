import Image from "next/image";
import { GetStaticProps } from "next";
import { Inter } from "next/font/google";

import { ParsedUrlQuery } from "querystring";
import { getBlogHandle } from "@/services/blog.services";
import { NextPageWithLayout } from "./_app";
import { Fragment, ReactNode } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { WrapLayout } from "@/components/layouts/CommonLayout";
import ItemBlog from "@/components/share/ItemBlog";

const inter = Inter({ subsets: ["latin"] });

interface Params extends ParsedUrlQuery {
    slug: string;
}

interface HomePageProps {
    newBlogs: BlogTypes[] | null;
}

const HomePage: NextPageWithLayout<HomePageProps> = ({ newBlogs }) => {
    // console.log(newBlogs);

    return (
        <WrapLayout className="my-5">
            <div>Bài viết mới</div>
            <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
                {
                    newBlogs && newBlogs.length > 0 && newBlogs.map((blog) => {
                        return (
                            <Fragment key={blog.id}><ItemBlog data={blog}/></Fragment>
                        )
                    })
                }
            </div>
        </WrapLayout>
    );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (context) => {
    // const { query } = context.params as Params;

    const dataBlog = await getBlogHandle("" as string);

    if(!dataBlog?.success) {
        return {
            props: {
                newBlogs: null,
            },
        };
    }

    return {
        props: {
            newBlogs: dataBlog || null,
        },
    };
};

HomePage.getLayout = (page: ReactNode) => {
    return <MainLayout>{page}</MainLayout>;
};
