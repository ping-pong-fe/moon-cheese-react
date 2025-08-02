import CheckoutSection from './components/CheckoutSection';
import DeliveryMethodSection from './components/DeliveryMethodSection';
import ShoppingCartSection from './components/ShoppingCartSection';

function ShoppingCartPage() {
  return (
    <>
      <ShoppingCartSection />
      <DeliveryMethodSection />
      <CheckoutSection />
    </>
  );
}

export default ShoppingCartPage;
