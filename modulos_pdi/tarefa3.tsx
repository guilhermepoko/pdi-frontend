"use client";

import { useEffect, useState } from "react";

export default function Cart() {
  const [items, setItems] = useState<{ id: string; price: number }[]>([]);
  // const [total, setTotal] = useState(5);

  // useEffect(() => {
  //   console.log(total);
  //   setTotal(items.reduce((sum, item) => sum + item.price, 2));
  //   console.log(total);
  // }, [items]);

  const total = items.reduce((sum, item) => sum + item.price, 3);

  return (
    <div>
      <p>Total: {total}</p>
    </div>
  );
}
