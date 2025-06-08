"use client";
import React, { useEffect, useState } from "react";

const BillingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network delay of 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return <div className="p-4">BillingPage</div>;
};

export default BillingPage;
