import {  NavLink } from "react-router";
import type { Service } from "../../../types/service";

function ServiceCard({ service }: { service: Service }) {
    return (
        <li>
            <NavLink className="service-card" to={`/services/${service.id}`}>
                {service.name}
            </NavLink>
        </li>
    )
}
export default ServiceCard;
