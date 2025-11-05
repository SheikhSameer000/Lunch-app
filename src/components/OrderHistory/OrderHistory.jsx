import React from "react";
import { Card as ShadcnCard, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const OrderHistory = ({ history }) => {
  const notify = () => toast.success("Item Added Successfully");

  return (
    <>
      <div className="w-full md:px-30 md:mt-10 flex justify-center md:justify-start">
        <h1 className="md:text-[2.5vw] text-3xl">Order History</h1>
      </div>

      <section className="md:h-[40vh] flex justify-center items-center w-full">
        <Carousel
          opts={{ align: "start" }}
          className="w-[90%] md:w-[92%] max-w-8xl"
        >
          <CarouselContent>
            {history.slice(0, 7).map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-1/1 md:basis-1/3 lg:basis-1/4"
              >
                <ShadcnCard className="overflow-hidden h-80">
                  <CardContent className="flex flex-col items-center p-4 gap-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-lg w-full h-40 object-cover"
                    />
                    <h3 className="text-lg font-semibold text-center">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">{item.title}</p>
                    {/* If timing exists */}
                    {/* {item.timing && (
                      <p className="text-xs text-gray-400">{item.timing}</p>
                    )} */}
                    <Link to="/cart">
                      <Button className="text-1.2xl font-bold bg-orange-500 hover:bg-[#f58220]">
                        reOrder
                      </Button>
                    </Link>
                  </CardContent>
                </ShadcnCard>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
};

export default OrderHistory;
