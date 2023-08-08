import dynamic from 'next/dynamic';

import "@uiw/react-md-editor/markdown-editor.css";
import { updateBlogHandle } from '@/services/blog.services';
import { ChangeEvent } from 'react';
// import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
);
// const EditerMarkdown = dynamic(
//     () =>
//       import("@uiw/react-md-editor").then((mod) => {
//         return mod.default.Markdown;
//       }),
//     { ssr: false }
// );
// const Markdown = dynamic(
//     () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
//     { ssr: false }
// );

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

interface FormBlogingComponentProps {
    data: DataBlogProps;
    setData: (data: DataBlogProps) => void
    handle: () => void
}

const FormBlogingComponent = ({ data, setData, handle } : FormBlogingComponentProps) => {

    const onChangeData = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const onChangeContent = (value: string | undefined) => {
        setData({
            ...data,
            content: value || ""
        })
    }

    return (
        <div
            className='my-5 px-10 w-full'
        >

            <input
                name='title'
                value={data.title}
                onChange={onChangeData}
                placeholder='Tiêu đề'
                className='border-none font-semibold text-3xl outline-none leading-tight w-full py-2 mb-3'
            />
            <input
                name='other_names'
                value={data.other_names}
                onChange={onChangeData}
                placeholder='Tên khác'
                className='border-b font-semibold text-xl outline-none leading-tight w-full py-2 mb-3'
            />
            <input
                name='description'
                value={data.description}
                onChange={onChangeData}
                placeholder='Mô tả'
                className='border-b font-semibold text-xl outline-none leading-tight w-full py-2 mb-10'
            />
            <input
                name='thumbnail'
                value={data.thumbnail}
                onChange={onChangeData}
                placeholder='Ảnh nền bài viết'
                className='border-b font-semibold text-xl outline-none leading-tight w-full py-2 mb-10'
            />
            
            <div className='prose'>
                <MDEditor
                    className="w-full max-w-full"
                    height={500}
                    placeholder='Nội dung viết ở đây'
                    value={data.content}
                    onChange={onChangeContent}
                />
            </div>

            <button
                disabled={!data?.content || data?.content?.length < 10 && data.title.length < 10 ? true : false}
                onClick={handle}
                className={`${data?.content && data?.content?.length > 10 && data.title.length > 10 ? '' : 'cursor-default bg-orange-500/70'} my-4 py-2 px-4 rounded-md text-white min-w-[200px] bg-orange-500`}
            >
                Update
            </button>

        </div>
    );
};

export default FormBlogingComponent;

// width: 100%;
//     .dev-set-form {
//         height: 100vh !important;
//     }