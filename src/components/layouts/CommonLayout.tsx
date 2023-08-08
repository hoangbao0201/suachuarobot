import { ReactNode } from "react";

import cn from "clsx";

interface WrapLayoutProps {
    children: ReactNode
    className?: string;
}
const WrapLayout : React.FC<WrapLayoutProps> = ({children, className}) => {

    return (
        <div className={cn(className,"lg:max-w-7xl max-w-3xl w-full min-h-screen mx-auto px-4 py-5")}>
            {children}
        </div>
    )
}

export { WrapLayout }