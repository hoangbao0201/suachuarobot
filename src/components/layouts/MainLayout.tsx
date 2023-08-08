import { ReactNode } from "react";

import Header from "../patials/Header";
import Footer from "../patials/Footer";
import ContactSupport from "../patials/ContactSupport";


interface MainLayoutProps {
    children: ReactNode
    isHeader?: boolean
    isFooter?: boolean
    isContact?: boolean
}

const MainLayout = ({ children, isHeader = true, isFooter = true, isContact = true }: MainLayoutProps) => {


    return (
        <main>

            {/* { isContact && <ContactSupport /> } */}

            { isHeader && <Header /> }

            <div className={``}>
                {children}
            </div>

            { isFooter && <Footer /> }

        </main>
    )
}

export default MainLayout;