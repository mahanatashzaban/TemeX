// components/ChartTable.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import "chartjs-adapter-date-fns";

// Register Chart.js modules
ChartJS.register(...registerables, zoomPlugin);

// Generate simple time-series (line) data
const generateWeeklyLineData = (basePrice) => {
  const points = [];
  const oneDay = 24 * 60 * 60 * 1000;
  let lastClose = basePrice;

  for (let i = 6; i >= 0; i--) {
    const time = new Date(Date.now() - i * oneDay);
    const change = (Math.random() * 0.1) - 0.05;
    const close = lastClose * (1 + change);
    points.push({ x: time, y: +close.toFixed(6) });
    lastClose = close;
  }

  return points;
};

// Chart options for line chart
const getLineChartOptions = () => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
    zoom: {
      pan: { enabled: true, mode: "x" },
      zoom: {
        wheel: { enabled: true },
        pinch: { enabled: true },
        mode: "x",
      },
    },
  },
  scales: {
    x: {
      type: "time",
      time: {
        unit: "day",
        tooltipFormat: "yyyy-MM-dd",
        displayFormats: { day: "MMM dd" },
      },
      grid: { display: false },
      ticks: { maxRotation: 0, autoSkip: true, maxTicksLimit: 7 },
    },
    y: {
      beginAtZero: false,
      ticks: {
        callback: (value) => `$${value.toFixed(2)}`,
      },
      grid: { display: true },
    },
  },
});

const ChartTable = () => {
  const [allCoins, setAllCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const coinsPerPage = 9;
  const [lineDataMap, setLineDataMap] = useState({});

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://api.coinlore.net/api/tickers/?limit=100");
        setAllCoins(res.data.data);
      } catch (err) {
        console.error("Error fetching coins:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, []);

  useEffect(() => {
    if (!allCoins.length) return;

    const newLineDataMap = {};
    allCoins.forEach((coin) => {
      const basePrice = parseFloat(coin.price_usd) || 1000;
      newLineDataMap[coin.id] = generateWeeklyLineData(basePrice);
    });
    setLineDataMap(newLineDataMap);
  }, [allCoins]);

  const filteredCoins = allCoins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (page - 1) * coinsPerPage;
  const currentCoins = filteredCoins.slice(startIndex, startIndex + coinsPerPage);
  const totalPages = Math.ceil(filteredCoins.length / coinsPerPage);

  return (
    <div className="w-full py-8">
      {/* Search Input */}
      <div className="w-full max-w-2xl px-4 mb-6 mx-auto">
        <input
          type="text"
          placeholder="جستجو در ارزها..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 font-vazirmatn"
        />
      </div>

      {/* Coin Cards with Line Charts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 mb-8 w-full max-w-6xl mx-auto">
        {loading ? (
          Array.from({ length: coinsPerPage }).map((_, i) => (
            <div key={i} className="border p-4 rounded-lg shadow bg-white animate-pulse">
              <div className="h-24 mb-2 bg-gray-200 rounded" />
              <div className="h-4 w-3/4 mb-2 mx-auto bg-gray-200 rounded" />
              <div className="h-4 w-1/2 mx-auto bg-gray-200 rounded" />
            </div>
          ))
        ) : (
          currentCoins.map((coin) => {
            const price = parseFloat(coin.price_usd);
            const formattedPrice = isNaN(price)
              ? "نامشخص"
              : price.toLocaleString("fa-IR", {
                  maximumFractionDigits: 6,
                }) + " دلار";

            const change = parseFloat(coin.percent_change_24h);
            const formattedChange = isNaN(change)
              ? "۰%"
              : `${change.toFixed(2)}%`;

            const imageUrl = `https://c1.coinlore.com/img/25x25/${coin.nameid || coin.symbol.toLowerCase()}.png`;

            const lineData = lineDataMap[coin.id] || [];

            return (
              <div
                key={coin.id}
                className="border border-gray-200 rounded-lg p-4 shadow bg-white text-center transition hover:shadow-lg duration-200"
              >
                <img
                  src={imageUrl}
                  alt={coin.symbol}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/40";
                  }}
                  className="mx-auto mb-2"
                  style={{ width: "40px", height: "40px" }}
                />
                <h3 className="text-lg font-semibold mb-1">{coin.name}</h3>
                <p className="text-sm mb-1">قیمت: {formattedPrice}</p>
                <p className={`text-sm mb-2 ${change >= 0 ? "text-green-600" : "text-red-600"}`}>
                  تغییر ۲۴ ساعته: {formattedChange}
                </p>
                <div style={{ height: "80px" }}>
                  {lineData.length > 0 && (
                    <Chart
                      type="line"
                      data={{
                        datasets: [
                          {
                            label: "قیمت",
                            data: lineData,
                            borderColor: "#4F46E5",
                            backgroundColor: "rgba(79, 70, 229, 0.1)",
                            borderWidth: 2,
                            pointRadius: 0,
                            tension: 0.3,
                          },
                        ],
                      }}
                      options={getLineChartOptions()}
                    />
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="text-center space-x-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded ${page === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChartTable;
