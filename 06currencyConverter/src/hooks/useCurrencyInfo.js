import { useState } from "react";
import { useEffect } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      );
      const data = await res.json();
      //   console.log(data);
      setData(data[currency]);
    })();
  }, [currency]);
  return data;
};
export default useCurrencyInfo;
