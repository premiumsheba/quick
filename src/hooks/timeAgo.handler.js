import { useState, useEffect } from "react";

function convertToBengaliDigits(number) {
  const digits = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };

  return number.toString().replace(/\d/g, (digit) => digits[digit]);
}

export default function TimeAgo({ timestamp, localization }) {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);
      let intervalType, intervalValue;

      if (seconds < 60) {
        intervalType = localization === "bn" ? "সেকেন্ড" : "second";
        intervalValue = seconds;
      } else if (seconds < 3600) {
        intervalType = localization === "bn" ? "মিনিট" : "minute";
        intervalValue = Math.floor(seconds / 60);
      } else if (seconds < 86400) {
        intervalType = localization === "bn" ? "ঘন্টা" : "hour";
        intervalValue = Math.floor(seconds / 3600);
      } else {
        intervalType = localization === "bn" ? "দিন" : "day";
        intervalValue = Math.floor(seconds / 86400);
      }

      if (localization === "bn") {
        intervalValue = convertToBengaliDigits(intervalValue);
      }

      setTimeAgo(
        `${intervalValue} ${intervalType}${
          intervalValue !== 1 ? (localization === "bn" ? "" : "s") : ""
        } ${localization === "bn" ? "আগে" : "ago"}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [timestamp, localization]);

  return <span>{timeAgo}</span>;
}
