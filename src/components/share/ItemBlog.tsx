import Link from "next/link";
import Image from "next/image";



interface ItemBlogProps {
    data: BlogTypes
}

const ItemBlog = ({ data } : ItemBlogProps) => {
    
    return (
        <div className="bg-white rounded-md shadow-lg border overflow-hidden">
            <Link href={`/bai-viet/${data.slug}`}>
                {/* <span className="p-4 text-2xl font-bold uppercase text-white">{data.title}</span> */}
                <figure className="w-full h-48 flex items-center justify-center bg-slate-700">
                    <Image
                        width={300}
                        height={300}
                        alt={`Ảnh ${data.title}`}
                        src={`${data.thumbnail}`}
                        className="object-cover w-full "
                    />
                </figure>
            </Link>
            <div className="p-4">
                <Link href={`/bai-viet/${data.slug}`}>
                    <h3 className="font-semibold text-lg line-clamp-2">{data.title}</h3>
                </Link>
                <Link href={`/user/`}>
                    Nguyễn Hoàng Bảo
                </Link>
                <p className="line-clamp-2">dịch vụ sửa chữa robot hút bụi uy tín tại Đà Nẵng</p>
            </div>
        </div>
    )
}

export default ItemBlog;