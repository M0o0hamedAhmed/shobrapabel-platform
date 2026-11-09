import type { Business } from "../../../types/business";

type BusinessRegistrationListProps = {
  businesses: Business[];
};

function BusinessRegistrationList({ businesses }: BusinessRegistrationListProps) {
  return (
    <section className="businesses-section" aria-labelledby="businesses-heading">
      <div className="businesses-section__heading">
        <div>
          <span className="page-eyebrow">من أهل البلد ولأهل البلد</span>
          <h2 id="businesses-heading">أنشطة أهل شبرابابل</h2>
          <p>تعرّف على الأنشطة التي شاركها جيرانك مع مجتمع القرية.</p>
        </div>
        <span className="businesses-section__count" aria-label={`${businesses.length} أنشطة`}>
          {businesses.length}
        </span>
      </div>

      {businesses.length === 0 ? (
        <div className="businesses-empty-state">
          <span className="businesses-empty-state__icon" aria-hidden="true">⌂</span>
          <h3>لسه مفيش أنشطة مسجلة</h3>
          <p>ابدأ بإضافة نشاطك، وخلي أهل القرية يعرفوا خدماتك.</p>
        </div>
      ) : (
        <ul className="businesses-grid">
          {businesses.map((business) => (
            <li className="business-card" key={business.id}>
              <span className="business-card__icon" aria-hidden="true">✦</span>
              <div>
                <h3>{business.name}</h3>
                <p>{business.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default BusinessRegistrationList;
