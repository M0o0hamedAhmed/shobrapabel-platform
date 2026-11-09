import { NavLink } from "react-router";

type HeaderProps = {
    title: string;
};

function Header({ title }: HeaderProps) {
    return (
        <header className="site-header">
            <div className="site-header__inner">
                <NavLink to="/" className="site-brand" aria-label={title}>
                    <span className="site-brand__mark" aria-hidden="true">ش</span>
                    <span className="site-brand__text">
                        <strong>{title}</strong>
                        <small>منصة أهل القرية</small>
                    </span>
                </NavLink>

                <nav className="site-nav" aria-label="التنقل الرئيسي">
                    <NavLink to="/" end className={({ isActive }) => `site-nav__link${isActive ? " active" : ""}`}>
                        الرئيسية
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => `site-nav__link${isActive ? " active" : ""}`}>
                        عن المنصة
                    </NavLink>
                    <NavLink to="/shopping-list" className={({ isActive }) => `site-nav__link${isActive ? " active" : ""}`}>
                        قائمة التسوق
                    </NavLink>
                    <NavLink to="/nursing-care" className={({ isActive }) => `site-nav__link${isActive ? " active" : ""}`}>
                        الرعاية المنزلية
                    </NavLink>
                    <NavLink to="/api-practice" className={({ isActive }) => `site-nav__link${isActive ? " active" : ""}`}>
                        منشورات
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}
export default Header;
