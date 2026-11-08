import { useActionState } from "react";
import type { NewBusiness } from "../../../types/business";

type BusinessRegistrationFormProps = {
    onRegister: (business: NewBusiness) => void;
};
function BusinessRegistrationForm({ onRegister }: BusinessRegistrationFormProps) {
    function registerBusiness(_perivousMessage: string, formData: FormData) {
        const name = String(formData.get("name") ?? "").trim();
        const description = String(formData.get("description") ?? "").trim();
        if (typeof name !== "string" || name.trim() === "") {
            return "Business name is required.";
        }
        if (typeof description !== "string" || description.trim() === "") {
            return "Business description is required.";
        }
        onRegister({ name, description });    // Simulate a successful registration
    return `تم استلام طلب تسجيل ${name}.`;
    }

    const [message, submitAction, isPending] = useActionState(registerBusiness, "");
    return (
        <section className="registration-card">
            <div className="registration-card__heading">
                <span className="page-eyebrow">شاركنا نشاطك</span>
                <h2>سجّل نشاطك التجاري</h2>
                <p>أضف نشاطك إلى دليل القرية ليسهل على الجيران الوصول إليك.</p>
            </div>
            <form className="registration-form" action={submitAction}>
                <label className="registration-form__field" htmlFor="businessName">
                    <span className="field-label">اسم النشاط</span>
                    <input className="form-input" type="text" id="businessName" name="name" placeholder="مثال: مخبز العائلة" />
                </label>
                <label className="registration-form__field" htmlFor="businessDescription">
                    <span className="field-label">نبذة عن النشاط</span>
                    <textarea className="form-textarea" id="businessDescription" name="description" placeholder="اكتب وصفًا قصيرًا لخدماتك" />
                </label>
                <button className="primary-button" type="submit" disabled={isPending}>
                    {isPending ? "جارٍ الإرسال..." : "إرسال طلب التسجيل"}
                </button>
            </form>
            {message && <p className="form-message" role="status">{message}</p>}
        </section>
    );
}

export default BusinessRegistrationForm;
