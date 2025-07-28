import React, { useEffect, useRef, useState } from "react";

const coinIds = [
  "bitcoin",
  "ethereum",
  "solana",
  "ripple",
  "cardano",
  "litecoin",
  "dogecoin",
  "polkadot"
];

const WaveBackground = () => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const [prices, setPrices] = useState({});

  // Fetch current prices from CoinGecko
  useEffect(() => {
    async function fetchPrices() {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds.join(
            ","
          )}&vs_currencies=usd`
        );
        const data = await res.json();
        setPrices(data);
      } catch (e) {
        console.error("Failed to fetch prices:", e);
      }
    }
    fetchPrices();
  }, []);

  useEffect(() => {
    if (!pathRef.current || !containerRef.current) return;

    const path = pathRef.current;
    const pathLength = path.getTotalLength();
    const container = containerRef.current;
    const coins = container.querySelectorAll(".coin-float");

    coins.forEach((coin, i) => {
      let progress = (i * 0.18) % 1; // spread coins out
      const speed = 0.0003 + i * 0.00005; // different speeds

      const animate = () => {
        progress += speed;
        if (progress > 1) progress = 0;

        const point = path.getPointAtLength(progress * pathLength);

        // Adjust Y position higher based on screen size
        const yOffset = window.innerWidth < 768 ? 60 : 30;

        coin.style.transform = `translate(${point.x}px, ${point.y - yOffset}px)`;

        requestAnimationFrame(animate);
      };
      animate();
    });
  }, [prices]);

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-[60vh] overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #4F46E5 0%, #F3F4F6 100%)"
      }}
    >
      {/* Globe image */}
      <img
        src="/glob.svg"
        alt="Globe"
        className="absolute top-10 right-0 md:right-10 w-40 md:w-60 opacity-90 animate-pulse"
        style={{ maxWidth: "100%", height: "auto" }}
      />

      {/* Coins with prices moving on wave */}
      {coinIds.map((id, i) => (
        <div
          key={id}
          className="coin-float absolute whitespace-nowrap font-bold text-white"
          style={{
            position: "absolute",
            pointerEvents: "none",
            textShadow:
              "0 0 5px rgba(0,0,0,0.6), 0 0 10px rgba(0,0,0,0.3)",
            fontSize: "14px",
            userSelect: "none",
            willChange: "transform"
          }}
        >
          {id.charAt(0).toUpperCase() + id.slice(1, 3).toUpperCase()}{" "}
          {prices[id] ? `$${prices[id].usd.toLocaleString()}` : "..."}
        </div>
      ))}

      {/* Wave SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <path
          ref={pathRef}
          fill="#F3F4F6"
          fillOpacity="1"
          d="M0,224L48,224C96,224,192,224,288,192C384,160,480,96,576,90.7C672,85,768,139,864,176C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default WaveBackground;
