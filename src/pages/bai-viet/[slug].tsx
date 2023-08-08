import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { GetStaticPaths, GetStaticProps } from "next";

import { ParsedUrlQuery } from "querystring";

import Head from "@/components/share/Head";
import { NextPageWithLayout } from "../_app";
import MainLayout from "@/components/layouts/MainLayout";
import { WrapLayout } from "@/components/layouts/CommonLayout";
import { getBlogBySlugHandle } from "@/services/blog.services";



import { MarkdownPreviewProps } from "@uiw/react-markdown-preview";
import { data } from "autoprefixer";
import Breadcrumb from "@/components/share/Breadcrumb";
const MarkdwonView = dynamic<MarkdownPreviewProps>(
    () => import("@uiw/react-markdown-preview"),
    {
      ssr: false,
    }
);


interface Params extends ParsedUrlQuery {
    slug: string;
}

interface PostPageProps {
    blog: BlogTypes | null
}

const PostPage: NextPageWithLayout<PostPageProps> = ({ blog }) => {

    // console.log(blog)

    return (
        <>
            <Head
                title={blog ? blog.title : ""}
            />

            <WrapLayout className="">

                <div className="grid grid-cols-12 gap-4">
                    {/* <div className="col-span-2 max-md:hidde"></div> */}
                    <div className="lg:col-span-8 col-span-full">
                        {
                            blog && (
                                <>
                                    <Breadcrumb
                                        path={[
                                            { title: blog.title, url: "/bai-viet/" + blog.slug },
                                        ]}
                                    />
                                    
                                    <h1 className="font-extrabold text-4xl uppercase text-gray-900 leading-snug mb-2">{blog.title}</h1>
            
                                    <ul className="flex mb-6">
                                        <li className="">
                                            <Link className="px-2 py-1 hover:border-[#562765]/60 hover:[&>span]:text-[#562765] hover:bg-[#5627651a] border border-transparent rounded-md" href={`/`}><span>#</span>vesmart</Link>
                                        </li>
                                        <li>
                                            <Link className="px-2 py-1 hover:border-[#234A84]/60 hover:[&>span]:text-[#234A84] hover:bg-[#5627651a] border border-transparent rounded-md" href={`/`}><span>#</span>robothutbui</Link>
                                        </li>
                                        <li>
                                            <Link className="px-2 py-1 hover:border-[#f7df1e]/60 hover:[&>span]:text-[#f7df1e] hover:bg-[#5627651a] border border-transparent rounded-md" href={`/`}><span>#</span>suachuadanang</Link>
                                        </li>
                                    </ul>
                                    <MarkdwonView className='prose contents text-lg' source={blog.content}/>
                                </>
                            )
                        }
                    </div>
                    <div className="lg:col-span-4 col-span-full"></div>
                </div>

            </WrapLayout>

        </>
    )
}

export default PostPage;

export const getStaticProps: GetStaticProps = async (context) => {

    const { slug } = context.params as Params;

    const dataBlog = await getBlogBySlugHandle(slug as string);

    if(!dataBlog?.success) {
        return {
            props: {
                blog: null,
            },
        };
    }

    return {
        props: {
            blog: dataBlog || null
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    };
};


PostPage.getLayout = (page: ReactNode) => {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}