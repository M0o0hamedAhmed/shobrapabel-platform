import type { ShoppingCardProps } from "../../../types/shoppingList";

function ShoppingCard({ name, price }: ShoppingCardProps) {
  return (
    <article className="shopping-card">
      <div className="shopping-card__icon" aria-hidden="true">
        🧺
      </div>

      <div className="shopping-card__details">
        <span className="shopping-card__label">منتج من القرية</span>
        <h2 className="shopping-card__name">{name}</h2>
      </div>

      <div className="shopping-card__price">
        <span>السعر</span>
        <strong>
          {price.toFixed(2)} <small>ج.م</small>
        </strong>
      </div>
    </article>
  );
}

export default ShoppingCard;
