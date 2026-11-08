import { useParams } from "react-router";
import { services } from "../../../data/services";


function ServiceDetails() {
 const params = useParams();
 const service = services.find((item)=>item.id === Number(params.serviceId));
 console.log(service,params);
 if(!service){
    return <section className="service-details-page"><div className="not-found-card"><h1>الخدمة غير موجودة</h1><p>لم نعثر على خدمة بهذا الرقم.</p></div></section>
 }
    return(
    <section className="service-details-page">
      <article className="service-details-card">
        <span className="page-eyebrow">دليل خدمات القرية</span>
        <h1>{service?.name}</h1>
        <p className="service-details-card__description">{service?.description}</p>
      </article>
    </section>)
}
export default ServiceDetails;
