import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { cartItems, removeItem, updateQuantity, totalPrice } = useCart();
  console.log(cartItems);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {cartItems.length === 0 && <p>Your cart is empty.</p>}

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={`${item.restaurantId}-${item.dishId}`}
            className="flex justify-between items-center p-4 border rounded-lg"
          >
            <div className="flex-1">
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-500 text-sm">{item.restaurant}</p>
              <p className="text-gray-700 font-medium">Rs {item.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                onClick={() =>
                  updateQuantity(
                    item.restaurantId,
                    item.dishId,
                    item.quantity + 1
                  )
                }
              >
                +
              </Button>
              <span>{item.quantity}</span>
              <Button
                size="sm"
                onClick={() =>
                  updateQuantity(
                    item.restaurantId,
                    item.dishId,
                    Math.max(1, item.quantity - 1)
                  )
                }
              >
                -
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => removeItem(item.restaurantId, item.dishId)}
              >
                {console.log(item)
                }
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
      {console.log(cartItems)}
      <div className="flex justify-between items-center mt-6 p-4 border-t">
        <p className="font-semibold text-lg">Total: Rs {totalPrice}</p>
        <Button>Checkout</Button>
      </div>
    </div>
  );
}
