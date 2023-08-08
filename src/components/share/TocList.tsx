import Link from "next/link";

const TocList = () => {
    
    return (
        <>

            <ul className="p-3 my-4 font-semibold text-blue-500 bg-gray-100 border-2 border-black/40 rounded-sm">
                <li className="[&>ul]:ml-5">
                    <Link className="hover:underline" href="#SUA_CHUA_ROBOT_HUT_BUI_DA_NANG">
                        <span className="toc_number toc_depth_1">1</span> SỬA
                        CHỮA ROBOT HÚT BỤI ĐÀ NẴNG
                    </Link>
                    <ul>
                        <li>
                            <ul>
                                <li className="[&>ul]:ml-5">
                                    <Link className="hover:underline" href="#Trải nghiệm dịch vụ sửa chữa Robot hút bụi Đà Nẵng uy tín, đạt chuẩn 5 sao">
                                        <span className="toc_number toc_depth_3">
                                            1.0.1
                                        </span>{" "}
                                        Trải nghiệm dịch vụ sửa chữa Robot hút
                                        bụi Đà Nẵng uy tín, đạt chuẩn 5 sao
                                    </Link>
                                    <ul>
                                        <li>
                                            <ul>
                                                <li>
                                                    <ul>
                                                        <li>
                                                            <Link className="hover:underline" href="#1. Các dịch vụ sửa chữa Robot hút bụi">
                                                                <span className="toc_number toc_depth_6">
                                                                    1.0.1.0.0.1
                                                                </span>{" "}
                                                                1. Các dịch vụ
                                                                sửa chữa Robot
                                                                hút bụi&nbsp;
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="hover:underline" href="#2. Các dịch vụ bảo dưỡng Robot hút bụi">
                                                                <span className="toc_number toc_depth_6">
                                                                    1.0.1.0.0.2
                                                                </span>{" "}
                                                                2. Các dịch vụ
                                                                bảo dưỡng Robot
                                                                hút bụi
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="hover:underline" href="#3. Cam kết chính sách bảo hành và sửa chữa Robot hút bụi">
                                                                <span className="toc_number toc_depth_6">
                                                                    1.0.1.0.0.3
                                                                </span>{" "}
                                                                3. Cam kết chính
                                                                sách bảo hành và
                                                                sửa chữa Robot
                                                                hút bụi&nbsp;
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link className="hover:underline" href="#4. Quy trình các bước sữa chữa Robot hút bụi">
                                                                <span className="toc_number toc_depth_6">
                                                                    1.0.1.0.0.4
                                                                </span>{" "}
                                                                4. Quy trình các
                                                                bước sữa chữa
                                                                Robot hút bụi
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link className="hover:underline" href="#CÔNG TY TNHH CÔNG NGHỆ NHÀ THÔNG MINH AZ">
                                        <span className="toc_number toc_depth_3">
                                            1.0.2
                                        </span>{" "}
                                        CÔNG TY TNHH CÔNG NGHỆ NHÀ THÔNG MINH
                                        AZ&nbsp;
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default TocList;