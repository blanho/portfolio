// Real-time data utilities for the chatbot
export interface RealTimeDataSource {
  type:
    | "time"
    | "weather"
    | "news"
    | "crypto"
    | "stocks"
    | "timezone"
    | "calendar";
  data: string | number | Record<string, unknown>;
  timestamp: Date;
}

// Enhanced Time and Date utilities
export function getCurrentTimeInfo(language: string = "en"): string {
  const now = new Date();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  switch (language) {
    case "zh":
      return `当前时间：${now.toLocaleString("zh-CN", {
        timeZone
      })} (时区: ${timeZone})
📅 UTC时间：${now.toISOString()}`;
    case "ja":
      return `現在時刻：${now.toLocaleString("ja-JP", {
        timeZone
      })} (タイムゾーン: ${timeZone})
📅 UTC時刻：${now.toISOString()}`;
    case "fr":
      return `Heure actuelle : ${now.toLocaleString("fr-FR", {
        timeZone
      })} (Fuseau horaire: ${timeZone})
📅 Heure UTC : ${now.toISOString()}`;
    case "vi":
      return `⏰ Thời gian hiện tại: ${now.toLocaleString("vi-VN", {
        timeZone
      })}
🌍 Múi giờ: ${timeZone}
📅 Giờ UTC: ${now.toISOString()}`;
    default:
      return `⏰ Current time: ${now.toLocaleString("en-US", { timeZone })}
🌍 Timezone: ${timeZone}
📅 UTC time: ${now.toISOString()}`;
  }
}

export function getCurrentDateInfo(language: string = "en"): string {
  const now = new Date();
  const dayOfWeek = now.toLocaleDateString(
    language === "vi" ? "vi-VN" : language,
    { weekday: "long" }
  );
  const month = now.toLocaleDateString(language === "vi" ? "vi-VN" : language, {
    month: "long"
  });
  const year = now.getFullYear();
  const day = now.getDate();

  switch (language) {
    case "zh":
      return `📅 今天是：${dayOfWeek}, ${now.toLocaleDateString("zh-CN")}
📆 年份：${year}年
🗓️ 月份：${month}
📍 日期：${day}号`;
    case "ja":
      return `📅 今日は：${dayOfWeek}, ${now.toLocaleDateString("ja-JP")}
📆 年：${year}年
🗓️ 月：${month}
📍 日：${day}日`;
    case "fr":
      return `📅 Date actuelle : ${dayOfWeek} ${day} ${month} ${year}
📆 Année : ${year}
🗓️ Mois : ${month}
📍 Jour : ${day}`;
    case "vi":
      return `📅 Hôm nay là: ${dayOfWeek}, ngày ${day} tháng ${
        now.getMonth() + 1
      } năm ${year}
📆 Năm: ${year}
🗓️ Tháng: ${month}
📍 Ngày: ${day}`;
    default:
      return `📅 Today is: ${dayOfWeek}, ${month} ${day}, ${year}
📆 Year: ${year}
🗓️ Month: ${month}
📍 Day: ${day}`;
  }
}

// Enhanced timezone information
export function getTimezoneInfo(language: string = "en"): string {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const offsetHours = Math.floor(Math.abs(offset) / 60);
  const offsetMins = Math.abs(offset) % 60;
  const offsetSign = offset <= 0 ? "+" : "-";

  switch (language) {
    case "zh":
      return `🌍 时区信息：
📍 当前时区：${timeZone}
⏰ UTC偏移：${offsetSign}${offsetHours}:${offsetMins
        .toString()
        .padStart(2, "0")}
🕐 当地时间：${now.toLocaleString("zh-CN")}`;
    case "ja":
      return `🌍 タイムゾーン情報：
📍 現在のタイムゾーン：${timeZone}
⏰ UTCオフセット：${offsetSign}${offsetHours}:${offsetMins
        .toString()
        .padStart(2, "0")}
🕐 現地時間：${now.toLocaleString("ja-JP")}`;
    case "fr":
      return `🌍 Informations sur le fuseau horaire :
📍 Fuseau horaire actuel : ${timeZone}
⏰ Décalage UTC : ${offsetSign}${offsetHours}:${offsetMins
        .toString()
        .padStart(2, "0")}
🕐 Heure locale : ${now.toLocaleString("fr-FR")}`;
    case "vi":
      return `🌍 Thông tin múi giờ:
📍 Múi giờ hiện tại: ${timeZone}
⏰ Chênh lệch UTC: ${offsetSign}${offsetHours}:${offsetMins
        .toString()
        .padStart(2, "0")}
🕐 Giờ địa phương: ${now.toLocaleString("vi-VN")}`;
    default:
      return `🌍 Timezone Information:
📍 Current timezone: ${timeZone}
⏰ UTC offset: ${offsetSign}${offsetHours}:${offsetMins
        .toString()
        .padStart(2, "0")}
🕐 Local time: ${now.toLocaleString("en-US")}`;
  }
}

// Enhanced calendar information
export function getCalendarInfo(language: string = "en"): string {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const monthName = now.toLocaleDateString(
    language === "vi" ? "vi-VN" : language,
    { month: "long" }
  );
  const dayOfYear = Math.floor(
    (now.getTime() - new Date(currentYear, 0, 0).getTime()) /
      (1000 * 60 * 60 * 24)
  );

  switch (language) {
    case "zh":
      return `📅 ${monthName} ${currentYear}年 日历信息：
🗓️ 本月天数：${daysInMonth}天
📍 今天是第${now.getDate()}天
🌟 今年第${dayOfYear}天
📊 本月已过：${Math.round((now.getDate() / daysInMonth) * 100)}%`;
    case "ja":
      return `📅 ${currentYear}年${monthName}のカレンダー情報：
🗓️ 今月の日数：${daysInMonth}日
📍 今日は${now.getDate()}日
🌟 今年の${dayOfYear}日目
📊 今月の進捗：${Math.round((now.getDate() / daysInMonth) * 100)}%`;
    case "fr":
      return `📅 Informations du calendrier ${monthName} ${currentYear} :
🗓️ Jours dans le mois : ${daysInMonth}
📍 Aujourd'hui est le ${now.getDate()}
🌟 ${dayOfYear}ème jour de l'année
📊 Progression du mois : ${Math.round((now.getDate() / daysInMonth) * 100)}%`;
    case "vi":
      return `📅 Thông tin lịch tháng ${monthName} ${currentYear}:
🗓️ Số ngày trong tháng: ${daysInMonth} ngày
📍 Hôm nay là ngày ${now.getDate()}
🌟 Ngày thứ ${dayOfYear} trong năm
📊 Tiến độ tháng: ${Math.round((now.getDate() / daysInMonth) * 100)}%`;
    default:
      return `📅 Calendar info for ${monthName} ${currentYear}:
🗓️ Days in month: ${daysInMonth}
📍 Today is day ${now.getDate()}
🌟 Day ${dayOfYear} of the year
📊 Month progress: ${Math.round((now.getDate() / daysInMonth) * 100)}%`;
  }
}

// Weather API integration (example using OpenWeatherMap)
export async function getWeatherInfo(language: string = "en"): Promise<string> {
  try {
    // You would need to add your OpenWeatherMap API key here
    // const API_KEY = 'your_openweather_api_key';
    // const city = "Ho Chi Minh City";
    // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    // const data = await response.json();

    // For now, return localized fallback information
    switch (language) {
      case "zh":
        return `天气API集成可用。请添加你的OpenWeatherMap API密钥以获取实时天气数据。
🌤️ 可以获取Ho Chi Minh City的天气信息：温度、湿度、天气状况等。`;
      case "ja":
        return `天気API統合が利用可能です。OpenWeatherMap APIキーを追加してリアルタイムの天気データを取得してください。
🌤️ Ho Chi Minh Cityの天気情報：温度、湿度、天気状況などを取得できます。`;
      case "fr":
        return `Intégration API météo disponible. Ajoutez votre clé API OpenWeatherMap pour obtenir des données météo en temps réel.
🌤️ Peut obtenir les informations météo de Ho Chi Minh City : température, humidité, conditions météo, etc.`;
      case "vi":
        return `🌤️ Tích hợp API thời tiết đang sẵn sàng! Thêm API key OpenWeatherMap để lấy data thời tiết real-time.
🌡️ Có thể lấy thông tin thời tiết TP.HCM: nhiệt độ, độ ẩm, tình trạng thời tiết, v.v.
☀️ Lan thường check weather trước khi ra ngoài hoặc plan outdoor activities!`;
      default:
        return `🌤️ Weather API integration available. Add your OpenWeatherMap API key to get live weather data.
🌡️ Can fetch weather info for Ho Chi Minh City: temperature, humidity, weather conditions, etc.
☀️ Lan usually checks weather before going out or planning outdoor activities!`;
    }
  } catch {
    return language === "vi"
      ? `Thông tin thời tiết tạm thời không có. Fen có thể thử lại sau hoặc check weather app nha! 🌦️`
      : `Weather information unavailable at the moment. You can try again later or check a weather app! 🌦️`;
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
export async function getNewsInfo(language: string = "en"): Promise<string> {
  try {
    // You would need to add your news API key here (e.g., NewsAPI)
    // const API_KEY = 'your_news_api_key';
    // const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    // const data = await response.json();

    // For now, return localized fallback information
    switch (language) {
      case "zh":
        return `新闻API集成可用。请添加你的NewsAPI密钥以获取实时新闻更新。
📰 可以获取科技新闻、商业新闻、国际新闻等实时头条。`;
      case "ja":
        return `ニュースAPI統合が利用可能です。NewsAPIキーを追加してリアルタイムのニュース更新を取得してください。
📰 テクノロジーニュース、ビジネスニュース、国際ニュースなどのリアルタイムヘッドラインを取得できます。`;
      case "fr":
        return `Intégration API actualités disponible. Ajoutez votre clé NewsAPI pour obtenir des mises à jour d'actualités en temps réel.
📰 Peut obtenir des titres en temps réel sur la technologie, les affaires, les actualités internationales, etc.`;
      case "vi":
        return `📰 Tích hợp API tin tức đang sẵn sàng! Thêm NewsAPI key để lấy tin tức real-time.
🔥 Có thể lấy tin hot về tech, business, international news, v.v.
💡 Lan thường follow tech news như TechCrunch, Dev.to, Vietnamese tech blogs!
🚀 Đặc biệt quan tâm đến startup scene và AI/ML developments!`;
      default:
        return `📰 News API integration available. Add your NewsAPI key to get live news updates.
🔥 Can fetch breaking news on tech, business, international news, etc.
💡 Lan usually follows tech news like TechCrunch, Dev.to, Vietnamese tech blogs!
🚀 Especially interested in startup scene and AI/ML developments!`;
    }
  } catch {
    return language === "vi"
      ? `Tin tức tạm thời không có. Fen có thể check VnExpress, TechCrunch, hoặc Dev.to! 📱`
      : `News information unavailable at the moment. You can check VnExpress, TechCrunch, or Dev.to! 📱`;
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

// Enhanced main function to get real-time information
export async function getRealTimeInformation(message: string): Promise<string> {
  const lowerMessage = message.toLowerCase();
  const userLanguage = detectLanguageFromMessage(message);

  // Time queries (enhanced with more patterns)
  if (
    lowerMessage.includes("time") ||
    lowerMessage.includes("clock") ||
    lowerMessage.includes("thời gian") ||
    lowerMessage.includes("時間") ||
    lowerMessage.includes("temps") ||
    lowerMessage.includes("时间") ||
    lowerMessage.includes("what time") ||
    lowerMessage.includes("now") ||
    lowerMessage.includes("bây giờ") ||
    lowerMessage.includes("hiện tại") ||
    lowerMessage.includes("mấy giờ") ||
    lowerMessage.includes("giờ")
  ) {
    return getCurrentTimeInfo(userLanguage);
  }

  // Date queries (enhanced with more patterns)
  if (
    lowerMessage.includes("date") ||
    lowerMessage.includes("today") ||
    lowerMessage.includes("ngày") ||
    lowerMessage.includes("日付") ||
    lowerMessage.includes("fecha") ||
    lowerMessage.includes("日期") ||
    lowerMessage.includes("what date") ||
    lowerMessage.includes("hôm nay") ||
    lowerMessage.includes("ngày nào") ||
    lowerMessage.includes("tháng") ||
    lowerMessage.includes("năm nay")
  ) {
    return getCurrentDateInfo(userLanguage);
  }

  // Timezone queries
  if (
    lowerMessage.includes("timezone") ||
    lowerMessage.includes("time zone") ||
    lowerMessage.includes("múi giờ") ||
    lowerMessage.includes("utc") ||
    lowerMessage.includes("gmt") ||
    lowerMessage.includes("タイムゾーン") ||
    lowerMessage.includes("fuseau horaire") ||
    lowerMessage.includes("时区")
  ) {
    return getTimezoneInfo(userLanguage);
  }

  // Calendar queries
  if (
    lowerMessage.includes("calendar") ||
    lowerMessage.includes("month") ||
    lowerMessage.includes("lịch") ||
    lowerMessage.includes("カレンダー") ||
    lowerMessage.includes("calendrier") ||
    lowerMessage.includes("日历") ||
    lowerMessage.includes("tháng này") ||
    lowerMessage.includes("năm này")
  ) {
    return getCalendarInfo(userLanguage);
  }

  // Weather queries
  if (
    lowerMessage.includes("weather") ||
    lowerMessage.includes("temperature") ||
    lowerMessage.includes("thời tiết") ||
    lowerMessage.includes("天気") ||
    lowerMessage.includes("météo") ||
    lowerMessage.includes("天气") ||
    lowerMessage.includes("nhiệt độ") ||
    lowerMessage.includes("trời") ||
    lowerMessage.includes("nắng") ||
    lowerMessage.includes("mưa")
  ) {
    return await getWeatherInfo(userLanguage);
  }

  // Cryptocurrency queries
  if (
    lowerMessage.includes("bitcoin") ||
    lowerMessage.includes("crypto") ||
    lowerMessage.includes("ethereum") ||
    lowerMessage.includes("price") ||
    lowerMessage.includes("btc") ||
    lowerMessage.includes("eth") ||
    lowerMessage.includes("coin") ||
    lowerMessage.includes("tiền điện tử")
  ) {
    const cryptoMatch = lowerMessage.match(
      /(bitcoin|btc|ethereum|eth|dogecoin|doge)/
    );
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
    lowerMessage.includes("新闻") ||
    lowerMessage.includes("báo") ||
    lowerMessage.includes("thông tin") ||
    lowerMessage.includes("sự kiện")
  ) {
    return await getNewsInfo(userLanguage);
  }

  return ""; // No real-time info detected
}
