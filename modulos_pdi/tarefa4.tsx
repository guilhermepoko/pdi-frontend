"use client";

import { useEffect, useState } from "react";

export default function Cart() {
  const [items, setItems] = useState<string[]>([]);

  function addItem() {
    const newItem = "Produto novo";

    // items.push(newItem);
    setItems([...items, newItem]);
  }

  return (
    <div>
      <button onClick={addItem}>Adicionar item</button>

      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
