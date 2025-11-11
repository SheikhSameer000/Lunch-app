import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { allRestaurantDishes, restaurants } from "@/utils/data";
import { useCart } from "@/context/CartContext";
import { toast, ToastContainer } from "react-toastify";

const formSchema = z.object({
  name: z.string().min(2),
  restaurant: z.string().min(1),
  dish: z.string().min(1),
  description: z.string().min(5),
});

export default function ExampleForm() {
  <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />;
  const [openRestaurant, setOpenRestaurant] = useState(false);
  const [openDish, setOpenDish] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      restaurant: "",
      dish: "",
      description: "",
    },
  });

  const { addItem } = useCart();

  function onSubmit(values) {
    const notify = () => toast.success("Item Added Successfully");
    console.log(values);
    notify();
    const selectedRestaurant = restaurants.find(
      (rest) => rest.name === values?.restaurant
    );

    const dishList =
      allRestaurantDishes.find((r) => r.restaurantId === selectedRestaurant?.id)
        ?.dishes || [];

    const selectedDish = dishList.find((d) => d.name === values?.dish);

    const cartItem = {
      dishId: selectedDish.id,
      restaurantId: selectedRestaurant.id,
      name: selectedDish.name,
      price: selectedDish.price,
      quantity: 1,
      restaurant: values.restaurant,
      description: values.description,
    };
    addItem(cartItem);
    console.log(cartItem);
    form.reset();
  }

  return (
    <Form
      {...form}
      
    >
      <div className="w-full flex flex-col justify-between space-y-6 p-6 rounded-lg border bg-white shadow-sm max-w-lg mx-auto">
        {/* <div>adwdawdaw</div> */}
        <div className="text-2xl md:text-[2vw] text-start w-full mt-10">
          Quick Order
        </div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full my-10"
        >
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Restaurant */}
          <FormField
            control={form.control}
            name="restaurant"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Restaurant</FormLabel>
                <Popover open={openRestaurant} onOpenChange={setOpenRestaurant}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="justify-between"
                    >
                      {field.value || "Select Restaurant"}
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="p-0">
                    <Command>
                      <CommandInput placeholder="Search restaurant..." />
                      <CommandEmpty>No match found.</CommandEmpty>
                      <CommandGroup>
                        {restaurants.map((rest) => (
                          <CommandItem
                            key={rest.id}
                            onSelect={() => {
                              field.onChange(rest.name);
                              setOpenRestaurant(false);
                            }}
                          >
                            {rest.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Dish */}
          <FormField
            control={form.control}
            name="dish"
            render={({ field }) => {
              // Selected restaurant match kar ke dishes nikal lo
              const selectedRestaurant = restaurants.find(
                (rest) => rest.name === form.watch("restaurant")
              );
              const dishList =
                allRestaurantDishes.find(
                  (r) => r.restaurantId === selectedRestaurant?.id
                )?.dishes || [];

              return (
                <FormItem className="flex flex-col">
                  <FormLabel>Dish</FormLabel>

                  <Popover open={openDish} onOpenChange={setOpenDish}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="justify-between"
                      >
                        {field.value || "Select Dish"}
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent className="p-0">
                      <Command>
                        <CommandInput placeholder="Search dish..." />
                        <CommandEmpty>No dish found.</CommandEmpty>
                        <CommandGroup>
                          {dishList.map((dish) => (
                            <CommandItem
                              key={dish.id}
                              onSelect={() => {
                                field.onChange(dish.name);
                                setOpenDish(false);
                              }}
                            >
                              {dish.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <textarea
                    className="border rounded-lg text-start p-3 text-lg placeholder:text-muted-foreground"
                    placeholder="Enter Description"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </Form>
  );
}
