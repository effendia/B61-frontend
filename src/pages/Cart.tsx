import { useCart } from "../context/CartContext"
import { Button } from "../Components/ui/button"

export default function Cart() {
  const { cart, removeFromCart } = useCart()
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Keranjang Belanja</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Keranjang kamu kosong.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border rounded p-4 mb-4">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>Jumlah: {item.quantity}</p>
                <p>Total: Rp {item.price * item.quantity}</p>
              </div>
              <Button variant="destructive" onClick={() => removeFromCart(item.id)}>
                Hapus
              </Button>
            </div>
          ))}
          <div className="mt-4 text-right font-bold">
            Total Belanja: Rp {total}
          </div>
        </>
      )}
    </div>
  )
}
