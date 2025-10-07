import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import Card from "../../../components/card";
import { CgSpinner } from "react-icons/cg";
import emptyOrders from "../../../assets/svg/empty-categories.svg";

const Orders: React.FC = () => {
  const { orders, loading, error } = useSelector(
    (state: RootState) => state.orderReducer
  );

  return (
    <section className="py-8 lg:py-12 bg-background">
      <div className="max-w-7xl flex flex-col gap-4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground/90 mb-2">
            🛍️ My Orders
          </h2>
          <p className="font-body text-foreground/40">
            Track all your orders in one place — from pending payments to
            delivered thrift finds.
          </p>
        </div>
        <div className="mt-5">
          {orders.length !== 0 && <div></div>}
          {loading && (
            <div className="min-h-[400px] flex items-center justify-center w-full">
              <CgSpinner className="w-12 h-12 text-foreground/75 animate-spin" />
            </div>
          )}
          {error ||
            (!orders.length && (
              <Card className="min-h-[400px] font-bold flex flex-col items-center justify-center w-full font-body text-2xl">
                <img src={emptyOrders} className="size-30 lg:size-50" />
                No Orders Yet
                <p></p>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Orders;
