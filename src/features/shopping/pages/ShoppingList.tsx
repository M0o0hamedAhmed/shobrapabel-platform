import { shoppingList } from "../../../data/shoppingList";
import ShoppingCard from "./ShoppingCard";

function ShoppingList() {
  return (
    <div className="shopping-list-page" dir="rtl">
      <header className="shopping-list-heading">
        <span className="shopping-list-heading__eyebrow">سوق شبرابابل</span>
        <h1>قائمة التسوق</h1>
        <p>منتجات أساسية من متاجر القرية</p>
      </header>

      <div className="shopping-list-grid">
        {shoppingList.map((item) => (
          <ShoppingCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ShoppingList;
