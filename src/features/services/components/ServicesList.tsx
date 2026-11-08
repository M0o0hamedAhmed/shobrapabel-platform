import type { ServicesListProps } from "../../../types/ServicesListProps";
import ServiceCard from "../../home/components/ServiceCard";

function ServicesList({ matchingServices }: ServicesListProps) {
    return (
        <section className="services-section">
            <div className="section-heading">
                <div>
                    <h2>خدمات القرية</h2>
                    <p>اكتشف الخدمات المتاحة بالقرب منك</p>
                </div>
                <span className="page-eyebrow">شبرابابل</span>
            </div>
            {matchingServices.length === 0 ? (
                <p className="empty-state">لا توجد خدمات مطابقة لبحثك.</p>
            ) : (
                <ul className="services-grid">
                    {matchingServices.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </ul>
            )}
        </section>
    )
}
export default ServicesList;
