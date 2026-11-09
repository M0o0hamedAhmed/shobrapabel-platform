import { useActionState } from "react";

function submitCareRequest(_previousMessage: string, formData: FormData) {
  const name = String(formData.get("requestName") ?? "").trim();
  const phone = String(formData.get("requestPhone") ?? "").trim();
  const area = String(formData.get("requestArea") ?? "").trim();
  const careType = String(formData.get("careType") ?? "").trim();
  const preferredTime = String(formData.get("preferredTime") ?? "").trim();

  if (!name || !phone || !area || !careType) {
    return "أكمل الحقول المطلوبة أولًا.";
  }

  const timeMessage = preferredTime
    ? `الموعد المفضل: ${preferredTime}`
    : "لم يُحدد موعد مفضل";

  return `تمت تجربة الطلب لـ${name}. ${timeMessage}. لم تُرسل البيانات أو تُحفظ.`;
}

function submitVolunteerRequest(_previousMessage: string, formData: FormData) {
  const name = String(formData.get("volunteerName") ?? "").trim();
  const phone = String(formData.get("volunteerPhone") ?? "").trim();
  const qualification = String(formData.get("qualification") ?? "").trim();

  if (!name || !phone || !qualification) {
    return "أكمل الحقول المطلوبة أولًا.";
  }

  return "تمت تجربة إرسال الطلب فقط؛ لا يعني ذلك اعتمادًا مهنيًا أو تسجيلًا فعليًا.";
}

function HomeCarePage() {
  const [careMessage, careAction, carePending] = useActionState(
    submitCareRequest,
    ""
  );
  const [volunteerMessage, volunteerAction, volunteerPending] = useActionState(
    submitVolunteerRequest,
    ""
  );

  return (
    <div className="home-care-page">
      <section className="home-care-hero">
        <span className="home-care-eyebrow">مبادرة مجتمعية · شبرابابل</span>
        <h1>رعاية تمريضية منزلية بجهود أهل القرية</h1>
        <p>
          مساحة تجريبية للتعريف بمبادرة تربط الأسر بالمتطوعين المؤهلين، مع احترام
          الخصوصية وحدود الاختصاص المهني.
        </p>
        <div className="home-care-hero__actions">
          <a className="home-care-button home-care-button--light" href="#care-request">
            أحتاج إلى رعاية
          </a>
          <a className="home-care-button home-care-button--outline" href="#volunteer">
            أريد التطوع
          </a>
        </div>
      </section>

      <aside className="home-care-notice" role="note">
        <strong>نموذج أولي تجريبي</strong>
        <span>
          لا توجد خدمة فعلية أو قاعدة بيانات، ولن تُرسل النماذج. هذه الصفحة ليست
          للطوارئ ولا تضمن توفر متطوع.
        </span>
      </aside>

      <section className="home-care-panel">
        <div className="home-care-section-heading">
          <span className="home-care-eyebrow home-care-eyebrow--soft">خطوات واضحة</span>
          <h2>كيف تعمل المبادرة؟</h2>
          <p>كل طلب يحتاج مراجعة وتواصلًا وتأكيدًا قبل أي زيارة.</p>
        </div>
        <ol className="home-care-steps">
          <li><strong>قدّم طلبًا مختصرًا</strong><span>اكتب معلومات التواصل والمنطقة ونوع الرعاية المطلوبة.</span></li>
          <li><strong>يراجع الفريق الطلب</strong><span>يتواصل معك للتأكد من التفاصيل وإمكانية المتابعة.</span></li>
          <li><strong>البحث عن متطوع</strong><span>يعتمد توفر الزيارة على وجود متطوع مناسب ومتاح.</span></li>
          <li><strong>تأكيد الموعد</strong><span>لا تُعد الزيارة مؤكدة قبل الاتفاق معك ومع المتطوع.</span></li>
        </ol>
      </section>

      <section className="home-care-info-grid">
        <article className="home-care-info-card">
          <span className="home-care-info-card__icon" aria-hidden="true">✚</span>
          <h2>الخدمات المقترحة</h2>
          <p>تُراجع القائمة قبل اعتمادها وبحسب مؤهلات المتطوعين الفعلية.</p>
          <ul>
            <li>تغيير الضمادات</li>
            <li>قياس العلامات الحيوية</li>
            <li>رعاية ما بعد الخروج من المستشفى</li>
            <li>مساندة كبار السن</li>
          </ul>
        </article>
        <article className="home-care-info-card">
          <span className="home-care-info-card__icon" aria-hidden="true">✓</span>
          <h2>التحقق المهني</h2>
          <p>
            لا ينبغي وصف أي متطوع بأنه معتمد قبل مراجعة مؤهله وترخيصه فعليًا من
            الجهة المسؤولة.
          </p>
        </article>
        <article className="home-care-info-card">
          <span className="home-care-info-card__icon" aria-hidden="true">♡</span>
          <h2>خصوصيتك</h2>
          <p>
            اجمع أقل قدر ممكن من المعلومات، ولا تعرض بيانات التواصل أو المعلومات
            الصحية للزوار.
          </p>
        </article>
      </section>

      <section className="home-care-forms">
        <article className="home-care-panel" id="care-request">
          <div className="home-care-section-heading">
            <span className="home-care-eyebrow home-care-eyebrow--soft">طلب تجريبي</span>
            <h2>أحتاج إلى رعاية</h2>
            <p>هذه التجربة لا ترسل معلوماتك ولا تنشئ طلبًا حقيقيًا.</p>
          </div>
          <form className="home-care-form" action={careAction}>
            <label className="home-care-field">
              <span>اسم مقدم الطلب</span>
              <input name="requestName" autoComplete="name" required />
            </label>
            <label className="home-care-field">
              <span>رقم للتواصل</span>
              <input name="requestPhone" type="tel" inputMode="tel" dir="ltr" required />
            </label>
            <label className="home-care-field">
              <span>القرية أو المنطقة</span>
              <select name="requestArea" defaultValue="" required>
                <option value="" disabled>اختر المنطقة</option>
                <option value="شبرابابل">شبرابابل</option>
                <option value="منطقة مجاورة">منطقة مجاورة · تحتاج مراجعة</option>
              </select>
            </label>
            <label className="home-care-field">
              <span>نوع الرعاية</span>
              <select name="careType" defaultValue="" required>
                <option value="" disabled>اختر نوع الرعاية</option>
                <option>تغيير ضمادات</option>
                <option>رعاية بعد الخروج من المستشفى</option>
                <option>مساندة كبار السن</option>
                <option>أخرى · تحتاج مراجعة</option>
              </select>
            </label>
            <label className="home-care-field home-care-field--optional">
              <span className="home-care-field__label">
                الموعد المفضل
                <span className="home-care-field__optional">اختياري</span>
              </span>
              <span className="home-care-field__hint">اكتب الوقت الأنسب للتواصل أو الزيارة.</span>
              <span className="home-care-field__input-wrap">
                <span className="home-care-field__input-icon" aria-hidden="true">◷</span>
                <input name="preferredTime" placeholder="مثال: صباحًا أو بعد العصر" />
              </span>
            </label>
            <button className="home-care-button" type="submit" disabled={carePending}>
              {carePending ? "جارٍ التجربة..." : "تجربة إرسال الطلب"}
            </button>
            {careMessage && <p className="home-care-form-message" role="status">{careMessage}</p>}
          </form>
        </article>

        <article className="home-care-panel" id="volunteer">
          <div className="home-care-section-heading">
            <span className="home-care-eyebrow home-care-eyebrow--soft">طلب تطوع تجريبي</span>
            <h2>أريد التطوع</h2>
            <p>إرسال النموذج لا يعني اعتمادًا أو قبولًا فعليًا.</p>
          </div>
          <form className="home-care-form" action={volunteerAction}>
            <label className="home-care-field">
              <span>الاسم</span>
              <input name="volunteerName" autoComplete="name" required />
            </label>
            <label className="home-care-field">
              <span>رقم للتواصل</span>
              <input name="volunteerPhone" type="tel" inputMode="tel" dir="ltr" required />
            </label>
            <label className="home-care-field">
              <span>المؤهل المهني</span>
              <select name="qualification" defaultValue="" required>
                <option value="" disabled>اختر المؤهل</option>
                <option>بكالوريوس تمريض</option>
                <option>دبلوم تمريض</option>
                <option>مؤهل آخر · يحتاج مراجعة</option>
              </select>
            </label>
            <button className="home-care-button" type="submit" disabled={volunteerPending}>
              {volunteerPending ? "جارٍ التجربة..." : "تجربة إرسال طلب التطوع"}
            </button>
            {volunteerMessage && <p className="home-care-form-message" role="status">{volunteerMessage}</p>}
          </form>
        </article>
      </section>

      <section className="home-care-panel home-care-faq">
        <div className="home-care-section-heading">
          <span className="home-care-eyebrow home-care-eyebrow--soft">معلومات مهمة</span>
          <h2>أسئلة شائعة</h2>
        </div>
        <details>
          <summary>هل هذه خدمة فعلية؟</summary>
          <p>لا، هذه صفحة تجريبية فقط ولا ترسل الطلبات أو تحفظها.</p>
        </details>
        <details>
          <summary>هل تضمن المبادرة توفر متطوع؟</summary>
          <p>لا. أي مبادرة فعلية تعتمد على التوفر والمراجعة والتأكيد المباشر.</p>
        </details>
        <details>
          <summary>هل هذه الصفحة بديل عن الطبيب أو الطوارئ؟</summary>
          <p>لا. ليست بديلًا عن الرعاية الطبية أو خدمات الطوارئ المحلية.</p>
        </details>
      </section>
    </div>
  );
}

export default HomeCarePage;
