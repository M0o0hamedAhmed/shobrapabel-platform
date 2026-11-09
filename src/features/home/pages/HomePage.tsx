import { useState } from "react";
import ServicesList from "../../services/components/ServicesList";
import { services } from "../../../data/services";
import BusinessRegistrationForm from "../../businesses/components/BusinessRegistrationForm";
import type { Business, NewBusiness } from "../../../types/business";
import BusinessRegistrationList from "../../businesses/components/BusinessRegistrationList";

function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const matchingServices = services.filter((service) =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const [businesses, setBusinesses] = useState<Business[]>([]);
    function handleRegister(newBusiness: NewBusiness) {
        const business: Business = {
            ...newBusiness,
            id: Date.now(),
        }
        setBusinesses((prev) => [...prev, business]);
        console.log("تم تسجيل العمل التجاري:", newBusiness.name, newBusiness.description);
    }
    return (
        <section className="home-page">
            <header className="home-hero">
                <div className="home-hero__copy">
                    <span className="home-hero__eyebrow">مجتمعنا أقرب</span>
                    <h1>أهلًا بك في شبرابابل</h1>
                    <p>منصة تجمع خدمات القرية وأهلها في مكان واحد، لتجد ما تحتاجه وتشارك مجتمعك بسهولة.</p>
                </div>
                <div className="home-hero__seal" aria-hidden="true">⌂</div>
            </header>

            <div className="home-content">
                <div className="search-panel">
                    <span className="search-panel__icon" aria-hidden="true">⌕</span>
                    <label className="search-panel__field" htmlFor="service-search">
                        <span className="field-label">ابحث عن خدمة</span>
                        <input
                            id="service-search"
                            className="form-input"
                            type="search"
                            placeholder="مثل: صيدلية أو مخبز"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </label>
                </div>

                <ServicesList matchingServices={matchingServices} />
            <BusinessRegistrationForm onRegister={handleRegister} />
            <BusinessRegistrationList businesses={businesses} />
            </div>
        </section>
    )
}
export default HomePage;
