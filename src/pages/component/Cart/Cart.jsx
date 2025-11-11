import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { cartItems, removeItem, updateQuantity, totalPrice } = useCart();
  // console.log(cartItems);

  return (
    <div className="flex md:flex-row flex-col justify-between w-full h-full">
      <div className="md:w-12/8 w-full mx-auto p-6 space-y-6">
        <h1 className="text-2xl font-bold">Your Cart</h1>

        {cartItems.length === 0 && <p>Your cart is empty.</p>}

        <div className="space-y-5">
          {cartItems.map((item) => (
            <div
              key={`${item.restaurantId}-${item.dishId}`}
              className="flex justify-between items-center p-4 border rounded-lg"
            >
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.restaurant}</p>
                <p className="text-gray-700 font-medium">Rs {item.price}</p>
                <p className="text-gray-700 font-medium">
                  Description: {item.description}
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <div className="flex gap-1 items-center">
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
                </div>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => removeItem(item.restaurantId, item.dishId)}
                >
                  {/* {console.log(item)} */}
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
        {/* {console.log(cartItems)} */}
        <div className="flex justify-between items-center mt-6 p-4 border-t">
          <p className="font-semibold text-lg">Total: Rs {totalPrice}</p>
          <Button>Checkout</Button>
        </div>
      </div>
      <div className="md:w-8/12 w-full mx-auto p-6">
        <h1 className="my-5 text-2xl font-bold">Order Summary</h1>
        <div className="w-full h-auto p-5 border space-y-5 rounded-lg">
          {cartItems.map((item) => (
            <div
              key={`${item.dishId}-${item.restaurantId}`}
              className="border-b shadow p-1 rounded-md"
            >
              <h1>{item?.restaurant}</h1>
              <p>{item?.name}</p>
              <div className="flex gap-1">
                <p>{item?.price}</p>
                <p>{` x ${item.quantity} = total: ${
                  item.price * item.quantity
                }`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
