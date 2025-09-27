import { useEffect } from "react";

export default function DunsSeal() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://dunsregistered.dnb.com";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // cleanup when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="duns-seal">{/* The D-U-N-S Registered seal will load here */}</div>
  );
}
