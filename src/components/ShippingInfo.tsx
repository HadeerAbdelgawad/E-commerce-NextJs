import React from "react";

interface ShippingInfoProps {
  subtotal: number;
  shippingMethod: "standard" | "express" | "free";
}

const ShippingInfo = ({ subtotal, shippingMethod }: ShippingInfoProps) => {
  const shippingCost =
    shippingMethod === "express"
      ? 15
      : shippingMethod === "standard"
      ? subtotal >= 100
        ? 0
        : 5
      : 0;

  const total = subtotal + shippingCost;

  return (
    <aside
      className="w-full rounded-xl shadow-xl shadow-gray-700 p-4 z-10"
      style={{ backgroundColor: '#215E61' }}
    >
      <h2 className="text-2xl font-semibold mb-3 text-white" >
        Order Summary
      </h2>

      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-200 text-xl">Subtotal</span>
        <span className="text=black font-medium text-lg">${subtotal.toFixed(2)}</span>
      </div>

      <div className="mt-3 border-t pt-3">
        <p className="text-sm font-medium mb-2 text-gray-200" >
          Shipping options
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div>
              <div className="font-medium text-gray-200" >
                Standard
              </div>
              <div className="text-xs" style={{ color: 'Gray' }}>
                {subtotal >= 100 ? 'Free' : '$5 — 5–7 business days'}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-medium text-gray-200 text-gray-200" >
                Express
              </div>
              <div className="text-xs" style={{ color: 'Gray' }}>$15 — 1–2 business days</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-medium text-gray-200" >
                Free pickup
              </div>
              <div className="text-xs" style={{ color: 'Gray' }}>
                No shipping, pick up in store
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 border-t pt-3">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-200" >
            Total
          </span>
          <span className="text-lg font-bold text-gray-200" >
            ${total.toFixed(2)}
          </span>
        </div>
        <button
          className="mt-4 w-full py-2 font-semibold shadow-2xl shadow-gray-200 hover:cursor-pointer rounded-2xl "
          style={{ backgroundColor: '#EFE9E3'}}
        >
          Proceed to Checkout
        </button>
      </div>
    </aside>
  );
};

export default ShippingInfo;
