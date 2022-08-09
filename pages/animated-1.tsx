import { useState } from "react";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";

let x = 3;
export default function () {
  const [items, setItems] = useState([1, 2, 3]);

  function addItem() {
    x++;
    setItems((items) => [...items, x]);
  }

  function removeItem(item: any) {
    setItems((items) => items.filter((i) => i !== item));
  }

  return (
    <div>
      <button onClick={addItem} className="border rounded px-2 py-1">
        Add
      </button>
      <ul className="mt-8 border rounded p-8 overflow-hidden">
        <AnimatePresence initial={false}>
          {items.map((item) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                opacity: { duration: 0.3 },
                height: { duration: 0.4 },
              }}
            >
              <div className="flex items-center justify-between py-2 border-b">
                <span>Item {item}</span>
                <button
                  onClick={() => removeItem(item)}
                  className="border rounded w-8 h-8"
                >
                  &times;
                </button>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
