import { CartItem as CartItemType } from "../types/cart";
import { Button } from "./ui/button";
import { useCart } from "../context/CartContext";

type Props = {
  item: CartItemType;
};

export default function CartItem({ item }: Props) {
  const { increaseQty, decreaseQty, removeFromCart, loading } = useCart();

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded shadow">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h2 className="font-semibold">{item.name}</h2>
          <p className="text-sm text-gray-500">
            Rp {item.price.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => decreaseQty(item.id)}
          disabled={loading}
        >
          -
        </Button>
        <span>{item.quantity}</span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => increaseQty(item.id)}
          disabled={loading}
        >
          +
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => removeFromCart(item.id)}
          disabled={loading}
        >
          Hapus
        </Button>
      </div>
    </div>
  );
}
