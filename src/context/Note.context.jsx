import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const NoteContext = createContext(0);

// eslint-disable-next-line react/prop-types
export default function NoteProvider({ children }) {
  const [notes, setNotes] = useState(null);

  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}
function calcSum(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
function avrAge(x, y) {
  var avr = calcSum(x, y) / 2;
  return avr;
}
function multiBy10(num) {
  var total = num * 10;
  return total;
}
var result = multiBy10(avrAge(10, 20));
console.log(result);
