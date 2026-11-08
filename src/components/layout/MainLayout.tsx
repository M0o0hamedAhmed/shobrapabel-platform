import type { MainLayoutProps } from "../../types/MainLayoutProps";
import Footer from "./Footer";
import Header from "./Header";


function MainLayout({ children, title }: MainLayoutProps) {
    return (
        <div className="site-shell" dir="rtl">
            <Header title={title} />
            <main className="site-main">{children}</main>
            <Footer />
        </div>
    )
}

export default MainLayout;
