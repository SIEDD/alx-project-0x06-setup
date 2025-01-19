import { createContext, useContext, ReactNode, useState } from "react";

interface CountContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CountContext = createContext<CountContextType | undefined>(undefined);

export const CountProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = (): CountContextType => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};
