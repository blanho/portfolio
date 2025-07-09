// Real-time data utilities for the chatbot
export interface RealTimeDataSource {
  type: "time" | "weather" | "news" | "crypto" | "stocks";
  data: string | number | Record<string, unknown>;
  timestamp: Date;
}

// Time and Date utilities
export function getCurrentTimeInfo(language: string = "en"): string {
  const now = new Date();

  switch (language) {
    case "zh":
      return `当前时间：${now.toLocaleString(
        "zh-CN"
      )} (UTC: ${now.toISOString()})`;
    case "ja":
      return `現在時刻：${now.toLocaleString(
        "ja-JP"
      )} (UTC: ${now.toISOString()})`;
    case "fr":
      return `Heure actuelle : ${now.toLocaleString(
        "fr-FR"
      )} (UTC: ${now.toISOString()})`;
    case "vi":
      return `Thời gian hiện tại: ${now.toLocaleString(
        "vi-VN"
      )} (UTC: ${now.toISOString()})`;
    default:
      return `Current time: ${now.toLocaleString()} (UTC: ${now.toISOString()})`;
  }
}

export function getCurrentDateInfo(language: string = "en"): string {
  const now = new Date();

  switch (language) {
    case "zh":
      return `今天是：${now.toLocaleDateString(
        "zh-CN"
      )} (${now.toDateString()})`;
    case "ja":
      return `今日は：${now.toLocaleDateString(
        "ja-JP"
      )} (${now.toDateString()})`;
    case "fr":
      return `Date actuelle : ${now.toLocaleDateString(
        "fr-FR"
      )} (${now.toDateString()})`;
    case "vi":
      return `Ngày hôm nay: ${now.toLocaleDateString(
        "vi-VN"
      )} (${now.toDateString()})`;
    default:
      return `Current date: ${now.toLocaleDateString()} (${now.toDateString()})`;
  }
}

// Weather API integration (example using OpenWeatherMap)
export async function getWeatherInfo(): Promise<string> {
  try {
    // You would need to add your OpenWeatherMap API key here
    // const API_KEY = 'your_openweather_api_key';
    // const city = "Ho Chi Minh City";
    // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    // const data = await response.json();
    // return `Weather in ${city}: ${data.main.temp}°C, ${data.weather[0].description}`;

    return `Weather API integration available. Add your OpenWeatherMap API key to get live weather data.`;
  } catch {
    return `Weather information unavailable at the moment.`;
  }
}

// Cryptocurrency prices (example using CoinGecko free API)
export async function getCryptoInfo(coin: string = "bitcoin"): Promise<string> {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`
    );
    const data = await response.json();
    const price = data[coin]?.usd;

    if (price) {
      return `${
        coin.charAt(0).toUpperCase() + coin.slice(1)
      } price: $${price.toLocaleString()}`;
    }
    return `Price information for ${coin} not available.`;
  } catch {
    return `Cryptocurrency price information unavailable at the moment.`;
  }
}

// News headlines (you can integrate with news APIs)
export async function getNewsInfo(): Promise<string> {
  try {
    // You would need to add your news API key here (e.g., NewsAPI)
    // const API_KEY = 'your_news_api_key';
    // const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    // const data = await response.json();
    // return `Latest headlines: ${data.articles.slice(0, 3).map(article => article.title).join(', ')}`;

    return `News API integration available. Add your NewsAPI key to get live news updates.`;
  } catch {
    return `News information unavailable at the moment.`;
  }
}

// Language detection helper
export function detectLanguageFromMessage(message: string): string {
  if (/[\u4e00-\u9fff]/.test(message)) return "zh";
  if (/[\u3040-\u309f\u30a0-\u30ff]/.test(message)) return "ja";
  if (/[àâäéèêëïîôöùûüÿç]/i.test(message)) return "fr";
  if (
    /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(
      message
    )
  )
    return "vi";
  return "en";
}

// Main function to get real-time information
export async function getRealTimeInformation(message: string): Promise<string> {
  const lowerMessage = message.toLowerCase();
  const userLanguage = detectLanguageFromMessage(message);

  // Time queries
  if (
    lowerMessage.includes("time") ||
    lowerMessage.includes("clock") ||
    lowerMessage.includes("thời gian") ||
    lowerMessage.includes("時間") ||
    lowerMessage.includes("temps") ||
    lowerMessage.includes("时间") ||
    lowerMessage.includes("what time")
  ) {
    return getCurrentTimeInfo(userLanguage);
  }

  // Date queries
  if (
    lowerMessage.includes("date") ||
    lowerMessage.includes("today") ||
    lowerMessage.includes("ngày") ||
    lowerMessage.includes("日付") ||
    lowerMessage.includes("fecha") ||
    lowerMessage.includes("日期") ||
    lowerMessage.includes("what date")
  ) {
    return getCurrentDateInfo(userLanguage);
  }

  // Weather queries
  if (
    lowerMessage.includes("weather") ||
    lowerMessage.includes("temperature") ||
    lowerMessage.includes("thời tiết") ||
    lowerMessage.includes("天気") ||
    lowerMessage.includes("météo") ||
    lowerMessage.includes("天气")
  ) {
    return await getWeatherInfo();
  }

  // Cryptocurrency queries
  if (
    lowerMessage.includes("bitcoin") ||
    lowerMessage.includes("crypto") ||
    lowerMessage.includes("ethereum") ||
    lowerMessage.includes("price")
  ) {
    const cryptoMatch = lowerMessage.match(/(bitcoin|btc|ethereum|eth)/);
    const coin = cryptoMatch ? cryptoMatch[0] : "bitcoin";
    return await getCryptoInfo(coin);
  }

  // News queries
  if (
    lowerMessage.includes("news") ||
    lowerMessage.includes("headlines") ||
    lowerMessage.includes("tin tức") ||
    lowerMessage.includes("ニュース") ||
    lowerMessage.includes("nouvelles") ||
    lowerMessage.includes("新闻")
  ) {
    return await getNewsInfo();
  }

  return ""; // No real-time info detected
}
