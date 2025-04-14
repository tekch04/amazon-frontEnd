import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51RCPc0QSqo0t5Ii5ZQyuQbvLQUhMgS42K88F3Qd7o7ASD5Dwo4Wzs91A5w7oQPECE9Et1PEvk1B7uuqSXRv6gPNh00T4jWJgPW"
);

function Router() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/payment"
            element={
              <ProtectedRoute 
              msg = {"you must login to pay"} 
              redirect={"/payment"}
              >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
              </ProtectedRoute>
            }
          />
          <Route path="/orders" element={
            <ProtectedRoute msg={"you must login to access your orders"}>
              redirect={"/orders"}
              <Orders />
            </ProtectedRoute>
            } />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      
    </>
  );
}

export default Router;
