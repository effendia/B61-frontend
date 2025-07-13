import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/button";


export default function CartPage() {
 const { cartItems, updateQuantity, removeFromCart, increaseQty, decreaseQty, loadingItemId } = useCart();


  if (cartItems.length === 0) {
    return <p className="text-center mt-10 text-gray-600">Keranjangmu kosong 😔</p>;
  }
  
   const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="p-6 min-h-screen bg-orange-50">
      <h1 className="text-3xl font-bold mb-4 text-center text-orange-700">
        🛒 Keranjang Belanja
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Keranjangmu masih kosong 😢</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded shadow"
            >
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">Rp {item.price.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
  variant="outline"
  onClick={() => decreaseQty(item.id)}
  disabled={loadingItemId === item.id}
>
  {loadingItemId === item.id ? "..." : "-"}
</Button>

<span>{item.quantity}</span>

<Button
  variant="outline"
  onClick={() => increaseQty(item.id)}
  disabled={loadingItemId === item.id}
>
  {loadingItemId === item.id ? "..." : "+"}
</Button>

<Button
  variant="destructive"
  onClick={() => removeFromCart(item.id)}
  disabled={loadingItemId === item.id}
>
  {loadingItemId === item.id ? "..." : "Hapus"}
</Button>

              </div>
            </div>
          ))}
          <div className="text-right mt-6 text-lg font-semibold text-orange-700">
            Total: Rp {totalPrice.toLocaleString()}
          </div>
        </div>
      )}
    </section>
  );
}