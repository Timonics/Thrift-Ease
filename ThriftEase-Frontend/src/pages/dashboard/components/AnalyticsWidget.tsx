import React from "react";
import Card from "../../../components/card";
import { Package, Gavel, ShoppingBag, TrendingUp } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

const AnalyticsWidget: React.FC = () => {

  const cartArr = useSelector((state: RootState) => state.cart.items)

  return (
    <section className="py-8 lg:py-12 bg-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <Card className="bg-background border border-[#D1D1D1] rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 lg:p-6">
              <div className="flex flex-col-reverse gap-4 sm:flex-row items-start sm:items-center justify-between">
                <div>
                  <p className="font-body text-sm text-foreground/50">
                    My Products
                  </p>
                  <p className="font-heading font-bold text-2xl lg:text-3xl text-primary">
                    1,247
                  </p>
                </div>
                <Package className="w-8 h-8 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="bg-background border border-[#D1D1D1] rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 lg:p-6">
              <div className="flex flex-col-reverse gap-4 sm:flex-row items-start sm:items-center justify-between">
                <div>
                  <p className="font-body text-sm text-foreground/50">
                    Orders in progress
                  </p>
                  <p className="font-heading font-bold text-2xl lg:text-3xl text-primary">
                    0
                  </p>
                </div>
                <Gavel className="w-8 h-8 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="bg-background border border-[#D1D1D1] rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 lg:p-6">
              <div className="flex flex-col-reverse gap-4 sm:flex-row items-start sm:items-center justify-between">
                <div>
                  <p className="font-body text-sm text-foreground/50">
                    Recent Purchases
                  </p>
                  <p className="font-heading font-bold text-2xl lg:text-3xl text-primary">
                    0
                  </p>
                </div>
                <ShoppingBag className="w-8 h-8 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="bg-background border border-[#D1D1D1] rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 lg:p-6">
              <div className="flex flex-col-reverse gap-4 sm:flex-row items-start sm:items-center justify-between">
                <div className="mt-auto">
                  <p className="font-body text-sm text-foreground/50">
                    Items in cart
                  </p>
                  <p className="font-heading font-bold text-2xl lg:text-3xl text-primary">
                    {cartArr.length}
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsWidget;
