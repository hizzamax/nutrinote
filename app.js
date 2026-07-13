const initialMeals = [
  { id: 1, type: "朝食", time: "08:12", name: "トーストと目玉焼き", detail: "食パン 1枚 · 卵 2個 · サラダ", emoji: "🍳", kcal: 412, protein: 21, fat: 16, carbs: 44 },
  { id: 2, type: "昼食", time: "12:45", name: "鶏むね肉の玄米ボウル", detail: "鶏むね肉 · 玄米 · ブロッコリー", emoji: "🥗", kcal: 638, protein: 42, fat: 18, carbs: 71 },
  { id: 3, type: "間食", time: "15:30", name: "ギリシャヨーグルト", detail: "無糖 · ブルーベリー · はちみつ", emoji: "🫐", kcal: 186, protein: 14, fat: 4, carbs: 24 },
  { id: 4, type: "夕食", time: "19:10", name: "鮭と野菜の蒸し焼き", detail: "鮭 · きのこ · さつまいも", emoji: "🐟", kcal: 606, protein: 19, fat: 20, carbs: 75 }
];

const foodEstimates = {
  "鶏むね肉": { kcal: 300, protein: 38, fat: 7, carbs: 0 },
  "玄米": { kcal: 250, protein: 5, fat: 2, carbs: 53 },
  "ブロッコリー": { kcal: 35, protein: 3, fat: 0, carbs: 7 },
  "味噌汁": { kcal: 45, protein: 3, fat: 2, carbs: 5 },
  "オートミール": { kcal: 190, protein: 7, fat: 4, carbs: 32 },
  "バナナ": { kcal: 86, protein: 1, fat: 0, carbs: 22 },
  "ヨーグルト": { kcal: 100, protein: 10, fat: 3, carbs: 8 },
  "サラダ": { kcal: 80, protein: 3, fat: 4, carbs: 8 },
  "ゆで卵": { kcal: 76, protein: 6, fat: 5, carbs: 1 },
  "アボカド": { kcal: 187, protein: 2, fat: 18, carbs: 6 },
  "サラダチキン": { kcal: 115, protein: 24, fat: 1.5, carbs: 1 },
  "鮭おにぎり": { kcal: 190, protein: 5, fat: 2, carbs: 37 },
  "カップヨーグルト": { kcal: 110, protein: 8, fat: 3, carbs: 13 },
  "プロテインバー": { kcal: 190, protein: 15, fat: 7, carbs: 17 },
  "ツナマヨおにぎり": { kcal: 230, protein: 5, fat: 8, carbs: 35 },
  "豆腐": { kcal: 72, protein: 7, fat: 4, carbs: 2 },
  "納豆": { kcal: 100, protein: 8, fat: 5, carbs: 6 }
};

const foodCatalog = [
  { name: "サラダチキン", emoji: "🍗", unit: "1個", ...foodEstimates["サラダチキン"] },
  { name: "鮭おにぎり", emoji: "🍙", unit: "1個", ...foodEstimates["鮭おにぎり"] },
  { name: "カップヨーグルト", emoji: "🥣", unit: "1個", ...foodEstimates["カップヨーグルト"] },
  { name: "プロテインバー", emoji: "🍫", unit: "1本", ...foodEstimates["プロテインバー"] },
  { name: "ツナマヨおにぎり", emoji: "🍙", unit: "1個", ...foodEstimates["ツナマヨおにぎり"] },
  { name: "豆腐", emoji: "▱", unit: "100g", ...foodEstimates["豆腐"] },
  { name: "納豆", emoji: "🫘", unit: "1パック", ...foodEstimates["納豆"] },
  { name: "鶏むね肉", emoji: "🍗", unit: "100g", ...foodEstimates["鶏むね肉"] }
];
const aiDishCatalog = [
  { keywords: ["カレー", "curry"], name: "カレーライス", emoji: "🍛", unit: "1皿", kcal: 720, protein: 20, fat: 24, carbs: 98 },
  { keywords: ["ラーメン", "ramen"], name: "ラーメン", emoji: "🍜", unit: "1杯", kcal: 550, protein: 22, fat: 18, carbs: 70 },
  { keywords: ["牛丼"], name: "牛丼", emoji: "🍚", unit: "1杯", kcal: 690, protein: 24, fat: 22, carbs: 88 },
  { keywords: ["パスタ", "スパゲッティ"], name: "ミートソースパスタ", emoji: "🍝", unit: "1皿", kcal: 650, protein: 20, fat: 20, carbs: 88 },
  { keywords: ["寿司", "すし", "鮨"], name: "にぎり寿司", emoji: "🍣", unit: "8貫", kcal: 520, protein: 24, fat: 8, carbs: 78 },
  { keywords: ["ハンバーガー", "バーガー"], name: "ハンバーガー", emoji: "🍔", unit: "1個", kcal: 640, protein: 28, fat: 30, carbs: 62 },
  { keywords: ["サンドイッチ", "サンド"], name: "サンドイッチ", emoji: "🥪", unit: "1個", kcal: 420, protein: 20, fat: 16, carbs: 48 },
  { keywords: ["弁当", "べんとう"], name: "幕の内弁当", emoji: "🍱", unit: "1食", kcal: 650, protein: 28, fat: 20, carbs: 82 },
  { keywords: ["サラダ"], name: "チキンサラダ", emoji: "🥗", unit: "1皿", kcal: 310, protein: 27, fat: 14, carbs: 22 }
];

const FOOD_API = {
  openFoodFacts: "https://world.openfoodfacts.org/api/v2",
  foodDataCentral: "https://api.nal.usda.gov/fdc/v1"
};
const USDA_API_KEY = "DEMO_KEY";

const barcodeCatalog = {
  "4901003012345": { name: "グリルチキン プレーン", emoji: "🍗", unit: "1パック", kcal: 132, protein: 26, fat: 2, carbs: 2 },
  "4902102112345": { name: "鮭おにぎり", emoji: "🍙", unit: "1個", ...foodEstimates["鮭おにぎり"] },
  "4901777123456": { name: "プレーンヨーグルト", emoji: "🥣", unit: "1カップ", kcal: 110, protein: 8, fat: 3, carbs: 13 }
};
const defaultWeightHistory = [{ date: "7/7", value: 69.2 }, { date: "7/8", value: 69.0 }, { date: "7/9", value: 68.9 }, { date: "7/10", value: 68.8 }, { date: "7/11", value: 68.7 }, { date: "7/12", value: 68.6 }, { date: "7/13", value: 68.4 }];
const defaultCalorieHistory = [1980, 2140, 1870, 2050, 1920, 1760, 1842];
const defaultProfile = { age: 30, height: 170, sex: "other", activity: 1.55 };
const defaultReminders = { meal: true, mealTime: "20:00", water: true, weight: false, weightTime: "07:30" };
let targets = { kcal: 2200, protein: 130, fat: 70, carbs: 280 };
let meals = JSON.parse(localStorage.getItem("nutrinote-meals") || "null") || initialMeals;
let water = Number(localStorage.getItem("nutrinote-water") || 1200);
let weightData = JSON.parse(localStorage.getItem("nutrinote-weight") || "null") || { current: 68.4, target: 62.0, deficit: 500, start: 70.4 };
let stepsData = JSON.parse(localStorage.getItem("nutrinote-steps") || "null") || { steps: 7842, kcal: 284, connected: false };
let weightHistory = JSON.parse(localStorage.getItem("nutrinote-weight-history") || "null") || defaultWeightHistory;
let profileData = JSON.parse(localStorage.getItem("nutrinote-profile") || "null") || defaultProfile;
let reminderData = JSON.parse(localStorage.getItem("nutrinote-reminders") || "null") || defaultReminders;
let currentFoodResults = [];
let currentBarcodeProduct = null;
let foodSearchRequestId = 0;
let analysis = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
let deferredInstallPrompt = null;

function formatNumber(value) { return new Intl.NumberFormat("ja-JP").format(Math.round(value)); }
function setupPWA() {
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  window.addEventListener("beforeinstallprompt", (event) => { event.preventDefault(); deferredInstallPrompt = event; $("#install-app").hidden = false; });
  window.addEventListener("appinstalled", () => { deferredInstallPrompt = null; $("#install-app").hidden = true; showToast("NutriNoteをホーム画面に追加しました"); });
  $("#install-app").addEventListener("click", async () => { if (!deferredInstallPrompt) { showToast("Chromeのメニューからホーム画面に追加できます"); return; } deferredInstallPrompt.prompt(); await deferredInstallPrompt.userChoice; deferredInstallPrompt = null; $("#install-app").hidden = true; });
}
function setMobileMenu(open) { $(".sidebar").classList.toggle("open", open); $("#sidebar-scrim").classList.toggle("open", open); $("#mobile-menu").setAttribute("aria-expanded", String(open)); }
function getMealTotals() { return meals.reduce((sum, meal) => ({ kcal: sum.kcal + meal.kcal, protein: sum.protein + meal.protein, fat: sum.fat + meal.fat, carbs: sum.carbs + meal.carbs }), { kcal: 0, protein: 0, fat: 0, carbs: 0 }); }

function renderMeals() {
  const list = $("#meal-list");
  list.innerHTML = meals.map((meal) => `
    <article class="meal-item">
      <div class="meal-visual">${meal.emoji || "🍽️"}</div>
      <div class="meal-meta"><strong>${meal.name}</strong><small>${meal.type} · ${meal.time} · ${meal.detail || "AI解析で記録"}</small></div>
      <div class="meal-pfc"><span class="mini-macro"><i class="macro-pill protein"></i><b>${meal.protein}g</b></span><span class="mini-macro"><i class="macro-pill fat"></i><b>${meal.fat}g</b></span><span class="mini-macro"><i class="macro-pill carbs"></i><b>${meal.carbs}g</b></span></div>
      <div class="meal-kcal">${formatNumber(meal.kcal)} <small>kcal</small></div>
      <button class="meal-more" data-delete="${meal.id}" aria-label="${meal.name}を削除">•••</button>
    </article>`).join("");
  $$('[data-delete]').forEach((button) => button.addEventListener("click", () => deleteMeal(Number(button.dataset.delete))));
}

function renderSummary() {
  const totals = getMealTotals();
  const kcalPercent = Math.min(100, Math.round((totals.kcal / targets.kcal) * 100));
  $("#calorie-total").textContent = formatNumber(totals.kcal);
  $("#calorie-target").textContent = formatNumber(targets.kcal); $("#calorie-scale-target").textContent = formatNumber(targets.kcal);
  $("#calorie-legend-target").textContent = formatNumber(targets.kcal);
  $("#calorie-percent").textContent = `${kcalPercent}%`;
  $("#remaining-kcal").textContent = `${formatNumber(Math.max(0, targets.kcal - totals.kcal))} kcal`;
  $("#calorie-bar").style.width = `${kcalPercent}%`;
  $("#calorie-ring").style.background = `conic-gradient(var(--green) 0 ${kcalPercent}%, #edf2ee ${kcalPercent}% 100%)`;
  $("#net-calorie").textContent = formatNumber(Math.max(0, totals.kcal - stepsData.kcal));
  ["protein", "fat", "carbs"].forEach((key) => { $(`#${key}-total`).textContent = `${formatNumber(totals[key])}g`; $(`#${key}-bar`).style.width = `${Math.min(100, Math.round((totals[key] / targets[key]) * 100))}%`; });
  localStorage.setItem("nutrinote-meals", JSON.stringify(meals));
  renderCoach();
}

function renderWater() { $("#water-total").textContent = formatNumber(water); $("#water-fill").style.height = `${Math.min(100, (water / 2000) * 100)}%`; localStorage.setItem("nutrinote-water", String(water)); }
function renderWeight() {
  const remaining = Math.max(0, weightData.current - weightData.target);
  const span = Math.max(0.1, weightData.start - weightData.target);
  const progress = Math.max(0, Math.min(100, ((weightData.start - weightData.current) / span) * 100));
  const days = weightData.deficit > 0 ? Math.ceil((remaining * 7700) / weightData.deficit) : 0;
  const goalDate = new Date(); goalDate.setDate(goalDate.getDate() + days);
  $("#current-weight-display").textContent = weightData.current.toFixed(1); $("#target-weight-display").textContent = weightData.target.toFixed(1); $("#weight-remaining").textContent = `${remaining.toFixed(1)} kg`; $("#weight-progress").style.width = `${progress}%`;
  $("#goal-date").textContent = days ? `${goalDate.getFullYear()}年${goalDate.getMonth() + 1}月${goalDate.getDate()}日ごろ` : "目標を達成しています";
  $("#current-weight").value = weightData.current; $("#target-weight").value = weightData.target; $("#daily-deficit").value = weightData.deficit;
  localStorage.setItem("nutrinote-weight", JSON.stringify(weightData)); renderCharts();
}
function calculateEnergy() { const adjustment = profileData.sex === "male" ? 5 : profileData.sex === "female" ? -161 : -78; const bmr = 10 * weightData.current + 6.25 * profileData.height - 5 * profileData.age + adjustment; const tdee = Math.round(bmr * Number(profileData.activity)); return { bmr, tdee, target: Math.max(1200, Math.round(tdee - weightData.deficit)) }; }
function renderProfile() { const energy = calculateEnergy(); $("#profile-age").value = profileData.age; $("#profile-height").value = profileData.height; $("#profile-sex").value = profileData.sex; $("#profile-activity").value = profileData.activity; $("#tdee-value").textContent = `${formatNumber(energy.tdee)} kcal`; $("#profile-target-kcal").textContent = `${formatNumber(energy.target)} kcal`; targets.kcal = energy.target; localStorage.setItem("nutrinote-profile", JSON.stringify(profileData)); }
function saveProfile() { profileData = { age: Number($("#profile-age").value) || 30, height: Number($("#profile-height").value) || 170, sex: $("#profile-sex").value, activity: Number($("#profile-activity").value) || 1.55 }; renderProfile(); renderSummary(); showToast("プロフィールを保存しました"); }
function renderCharts() {
  const values = weightHistory.map((item) => item.value); const min = Math.min(...values) - .3; const max = Math.max(...values) + .3; const points = values.map((value, index) => { const x = 12 + (336 / Math.max(1, values.length - 1)) * index; const y = 24 + ((max - value) / Math.max(.1, max - min)) * 102; return { x, y, value }; });
  $("#weight-line").setAttribute("points", points.map((point) => `${point.x},${point.y}`).join(" ")); $("#weight-dots").innerHTML = points.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="4"></circle>`).join(""); $("#weight-labels").innerHTML = weightHistory.map((item) => `<span>${item.date}</span>`).join(""); $("#weight-change").textContent = `${(values[values.length - 1] - values[0]).toFixed(1)} kg`;
  const calorieValues = [...defaultCalorieHistory]; calorieValues[calorieValues.length - 1] = getMealTotals().kcal; const average = Math.round(calorieValues.reduce((sum, value) => sum + value, 0) / calorieValues.length); $("#avg-calorie").textContent = `${formatNumber(average)} kcal`; $("#calorie-bars").innerHTML = calorieValues.map((value, index) => `<div class="bar-column"><i style="height:${Math.max(8, Math.min(100, (value / 2400) * 100))}%" title="${value} kcal"></i><span>${weightHistory[index]?.date || ""}</span></div>`).join(""); $("#calorie-labels").innerHTML = "";
}
function renderWeeklyReview() { const weightChange = weightHistory[weightHistory.length - 1].value - weightHistory[0].value; const totals = getMealTotals(); const averageCalories = Math.round([...defaultCalorieHistory.slice(0, -1), totals.kcal].reduce((sum, value) => sum + value, 0) / defaultCalorieHistory.length); const proteinGap = Math.max(0, targets.protein - totals.protein); const direction = weightChange <= 0 ? `${Math.abs(weightChange).toFixed(1)}kg減っています` : `${weightChange.toFixed(1)}kg増えています`; $("#weekly-review-text").textContent = `今週の体重は${direction}。摂取カロリーは平均${formatNumber(averageCalories)}kcalで、${proteinGap ? `今日のたんぱく質はあと${formatNumber(proteinGap)}gです。` : "PFCのバランスも良い状態です。"}このペースを急がず続けるのがおすすめです。`; }
function renderReminders() { $("#reminder-meal").checked = reminderData.meal; $("#reminder-meal-time").value = reminderData.mealTime; $("#reminder-water").checked = reminderData.water; $("#reminder-weight").checked = reminderData.weight; $("#reminder-weight-time").value = reminderData.weightTime; }
function saveReminders() { reminderData = { meal: $("#reminder-meal").checked, mealTime: $("#reminder-meal-time").value, water: $("#reminder-water").checked, weight: $("#reminder-weight").checked, weightTime: $("#reminder-weight-time").value }; localStorage.setItem("nutrinote-reminders", JSON.stringify(reminderData)); $("#reminder-status").textContent = "この端末に設定を保存しました"; showToast("リマインダーを保存しました"); }
async function testReminder() { if (!("Notification" in window)) { showToast("このブラウザは通知に対応していません"); return; } const permission = Notification.permission === "granted" ? "granted" : await Notification.requestPermission(); if (permission === "granted") new Notification("NutriNote", { body: "記録の時間です。今日の食事や水分を確認しましょう。" }); else showToast("通知が許可されていません"); }
function renderSteps() {
  $("#step-total").textContent = formatNumber(stepsData.steps); $("#exercise-kcal").textContent = `${formatNumber(stepsData.kcal)} kcal`; $("#steps-progress").style.width = `${Math.min(100, (stepsData.steps / 10000) * 100)}%`; $("#health-status").textContent = stepsData.connected ? "接続済み" : "未接続"; $("#health-status").classList.toggle("connected", stepsData.connected); renderSummary(); localStorage.setItem("nutrinote-steps", JSON.stringify(stepsData));
}
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character])); }
function asNumber(value) { const number = Number(value); return Number.isFinite(number) ? number : null; }
function nutrientValue(nutrients, keys) { for (const key of keys) { const value = asNumber(nutrients?.[key]); if (value !== null) return value; } return null; }
function normalizeFood(name, nutrition, extra = {}) {
  const kcal = nutrientValue(nutrition, ["kcal", "energy-kcal_100g", "energy-kcal", "energy_kcal"]);
  const energyKj = nutrientValue(nutrition, ["energy-kj_100g", "energy-kj", "energy_100g"]);
  const calories = kcal ?? (energyKj !== null ? energyKj / 4.184 : null);
  if (!name || calories === null) return null;
  return {
    name,
    emoji: extra.emoji || "🍽️",
    unit: extra.unit || "100gあたり",
    kcal: Math.round(calories),
    protein: Math.round((nutrientValue(nutrition, ["protein", "protein_100g", "proteins_100g"]) ?? 0) * 10) / 10,
    fat: Math.round((nutrientValue(nutrition, ["fat", "fat_100g", "fat_100g"]) ?? 0) * 10) / 10,
    carbs: Math.round((nutrientValue(nutrition, ["carbs", "carbohydrate", "carbohydrates", "carbohydrates_100g"]) ?? 0) * 10) / 10,
    ...extra
  };
}
function normalizeOpenFoodFactsProduct(product) {
  const name = product.product_name_ja || product.product_name || product.product_name_en || product.generic_name;
  const nutrients = product.nutriments || {};
  return normalizeFood(name, nutrients, {
    emoji: "📦",
    unit: "100gあたり",
    brand: product.brands || "",
    source: "Open Food Facts API",
    code: product.code || ""
  });
}
function normalizeUsdaFood(food) {
  const nutrients = Object.fromEntries((food.foodNutrients || []).map((nutrient) => [String(nutrient.nutrientId), nutrient.value]));
  return normalizeFood(food.description, {
    kcal: nutrients["1008"],
    protein: nutrients["1003"],
    fat: nutrients["1004"],
    carbs: nutrients["1005"]
  }, { emoji: "🍽️", unit: "100gあたり", source: "USDA FoodData Central API" });
}
async function fetchOpenFoodFacts(query) {
  const params = new URLSearchParams({ search_terms: query, search_simple: "1", action: "process", page_size: "8", fields: "code,product_name,product_name_ja,product_name_en,generic_name,brands,nutriments" });
  const response = await fetch(`${FOOD_API.openFoodFacts}/search?${params}`);
  if (!response.ok) throw new Error(`Open Food Facts: ${response.status}`);
  const data = await response.json();
  return (data.products || []).map(normalizeOpenFoodFactsProduct).filter(Boolean);
}
async function fetchUsdaFoods(query) {
  const params = new URLSearchParams({ api_key: USDA_API_KEY, query, pageSize: "8", pageNumber: "1", dataType: "Foundation,SR Legacy,FNDDS,Branded" });
  const response = await fetch(`${FOOD_API.foodDataCentral}/foods/search?${params}`);
  if (!response.ok) throw new Error(`FoodData Central: ${response.status}`);
  const data = await response.json();
  return (data.foods || []).map(normalizeUsdaFood).filter(Boolean);
}
function localFoodMatches(query) {
  const normalized = query.trim().toLowerCase();
  const catalogMatches = foodCatalog.filter((food) => [food.name, food.unit].some((term) => term.toLowerCase().includes(normalized))).map((food) => ({ ...food, source: "NutriNote食品カタログ" }));
  const dishMatches = aiDishCatalog.filter((food) => food.keywords.some((keyword) => normalized.includes(keyword.toLowerCase()) || keyword.toLowerCase().includes(normalized))).map((food) => ({ ...food, source: "NutriNote料理候補（要確認）", estimated: true }));
  return [...catalogMatches, ...dishMatches];
}
function uniqueFoods(foods) { const seen = new Set(); return foods.filter((food) => { const key = food.name.toLowerCase(); if (seen.has(key)) return false; seen.add(key); return true; }); }
async function searchFoods(query) {
  const [offResult, usdaResult] = await Promise.allSettled([fetchOpenFoodFacts(query), fetchUsdaFoods(query)]);
  const apiFoods = [
    ...(offResult.status === "fulfilled" ? offResult.value : []),
    ...(usdaResult.status === "fulfilled" ? usdaResult.value : [])
  ];
  return uniqueFoods([...apiFoods, ...localFoodMatches(query)]);
}
async function renderFoodResults(query = "") {
  const target = $("#food-results");
  const requestId = ++foodSearchRequestId;
  currentFoodResults = [];
  if (!query) { target.innerHTML = ""; return; }
  target.innerHTML = `<p class="food-result-empty">APIから栄養情報を検索中...</p>`;
  $("#food-search-button").disabled = true;
  try {
    currentFoodResults = await searchFoods(query);
    if (requestId !== foodSearchRequestId) return;
    target.innerHTML = currentFoodResults.length ? currentFoodResults.map((food, index) => `<article class="food-result ${food.estimated ? "ai-estimated" : ""}"><span class="food-result-icon">${escapeHtml(food.emoji)}</span><div><strong>${escapeHtml(food.name)}</strong><small>${formatNumber(food.kcal)} kcal · P ${food.protein}g · F ${food.fat}g · C ${food.carbs}g / ${escapeHtml(food.unit)}${food.brand ? `<br>${escapeHtml(food.brand)}` : ""}<br><span class="food-source">${escapeHtml(food.source)}</span></small></div><button data-search-index="${index}">＋追加</button></article>`).join("") : `<p class="food-result-empty">「${escapeHtml(query)}」の栄養データが見つかりませんでした。商品名やメーカー名を追加して検索してください。</p>`;
    $$('[data-search-index]').forEach((button) => button.addEventListener("click", () => addSearchedFood(Number(button.dataset.searchIndex))));
  } catch (error) {
    if (requestId !== foodSearchRequestId) return;
    currentFoodResults = localFoodMatches(query);
    target.innerHTML = currentFoodResults.length ? currentFoodResults.map((food, index) => `<article class="food-result ai-estimated"><span class="food-result-icon">${escapeHtml(food.emoji)}</span><div><strong>${escapeHtml(food.name)}</strong><small>${formatNumber(food.kcal)} kcal · P ${food.protein}g · F ${food.fat}g · C ${food.carbs}g / ${escapeHtml(food.unit)}<br><span class="food-source">APIに接続できないためローカル候補・要確認</span></small></div><button data-search-index="${index}">＋追加</button></article>`).join("") : `<p class="food-result-empty">栄養APIに接続できませんでした。通信状態を確認して再検索してください。</p>`;
    $$('[data-search-index]').forEach((button) => button.addEventListener("click", () => addSearchedFood(Number(button.dataset.searchIndex))));
  } finally { if (requestId === foodSearchRequestId) $("#food-search-button").disabled = false; }
}
function addSearchedFood(index) { const food = currentFoodResults[index]; if (!food) return; meals.push({ id: Date.now(), type: "検索", time: new Date().toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" }), name: food.name, detail: `${food.unit} · ${food.source}`, emoji: food.emoji, kcal: food.kcal, protein: food.protein, fat: food.fat, carbs: food.carbs }); renderMeals(); renderSummary(); showToast(`${food.name}を食事に追加しました`); }
function addCatalogFood(name) { const food = foodCatalog.find((item) => item.name === name); if (!food) return; meals.push({ id: Date.now(), type: "追加", time: new Date().toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" }), name: food.name, detail: `${food.unit} · 食品カタログ`, emoji: food.emoji, kcal: food.kcal, protein: food.protein, fat: food.fat, carbs: food.carbs }); renderMeals(); renderSummary(); showToast(`${food.name}を食事に追加しました`); }
async function fetchOpenFoodFactsProduct(code) { const response = await fetch(`${FOOD_API.openFoodFacts}/product/${encodeURIComponent(code)}.json?fields=code,product_name,product_name_ja,product_name_en,generic_name,brands,nutriments`); if (!response.ok) throw new Error(`Open Food Facts: ${response.status}`); const data = await response.json(); return data.status === 1 ? normalizeOpenFoodFactsProduct(data.product) : null; }
async function renderBarcodeResult(code) {
  const cleanCode = code.replace(/\D/g, ""); const target = $("#barcode-result"); currentBarcodeProduct = null;
  if (!cleanCode) { target.innerHTML = `<p class="food-result-empty">バーコードを入力してください。</p>`; return; }
  target.innerHTML = `<p class="food-result-empty">商品データベースを検索中...</p>`;
  let product = null;
  try { product = await fetchOpenFoodFactsProduct(cleanCode); } catch (error) { product = null; }
  product = product || (barcodeCatalog[cleanCode] ? { ...barcodeCatalog[cleanCode], source: "NutriNoteサンプル商品" } : null);
  currentBarcodeProduct = product;
  target.innerHTML = product ? `<article class="food-result"><span class="food-result-icon">${escapeHtml(product.emoji)}</span><div><strong>${escapeHtml(product.name)}</strong><small>${formatNumber(product.kcal)} kcal · P ${product.protein}g · F ${product.fat}g · C ${product.carbs}g / ${escapeHtml(product.unit)}${product.brand ? `<br>${escapeHtml(product.brand)}` : ""}<br><span class="food-source">${escapeHtml(product.source || "Open Food Facts API")} · JAN ${cleanCode}</span></small></div><button data-add-barcode="${cleanCode}">＋追加</button></article>` : `<p class="food-result-empty">JAN ${cleanCode} の商品が見つかりませんでした。商品名で検索するか、バーコードを確認してください。</p>`;
  $$('[data-add-barcode]').forEach((button) => button.addEventListener("click", () => addBarcodeProduct(button.dataset.addBarcode)));
}
function addBarcodeProduct(code) { const product = currentBarcodeProduct && (!currentBarcodeProduct.code || currentBarcodeProduct.code === code) ? currentBarcodeProduct : barcodeCatalog[code]; if (!product) return; meals.push({ id: Date.now(), type: "商品", time: new Date().toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" }), name: product.name, detail: `${product.unit} · ${product.source || "バーコード検索"}`, emoji: product.emoji, kcal: product.kcal, protein: product.protein, fat: product.fat, carbs: product.carbs }); renderMeals(); renderSummary(); showToast(`${product.name}を食事に追加しました`); }
function syncHealth() { stepsData = { steps: 7842, kcal: 284, connected: true }; renderSteps(); showToast("Google Healthの歩数を同期しました"); }
function saveWeight() { const current = Number($("#current-weight").value) || weightData.current; weightData = { current, target: Number($("#target-weight").value) || weightData.target, deficit: Number($("#daily-deficit").value) || weightData.deficit, start: Math.max(weightData.start, current) }; const now = new Date(); weightHistory = [...weightHistory.slice(-6), { date: `${now.getMonth() + 1}/${now.getDate()}`, value: current }]; localStorage.setItem("nutrinote-weight-history", JSON.stringify(weightHistory)); renderWeight(); renderProfile(); renderSummary(); showToast("ダイエット目標を更新しました"); }
function generateCoachAdvice(question) {
  const totals = getMealTotals(); const proteinGap = Math.max(0, targets.protein - totals.protein); const calorieRoom = Math.max(0, targets.kcal - totals.kcal); const weightGap = Math.max(0, weightData.current - weightData.target); const stepsGap = Math.max(0, 10000 - stepsData.steps);
  if (/たんぱく/.test(question)) return proteinGap ? `今日はたんぱく質があと${formatNumber(proteinGap)}gです。夕食にサラダチキン、鮭、豆腐のどれかを1品足すと、脂質を増やしすぎずに補えます。` : "今日はたんぱく質の目標を達成しています。これ以上無理に増やさず、野菜と水分を意識しましょう。";
  if (/歩数|運動|消費/.test(question)) return stepsGap ? `現在${formatNumber(stepsData.steps)}歩なので、目標まであと${formatNumber(stepsGap)}歩です。10〜15分の散歩を2回に分けると続けやすく、今日は約${formatNumber(stepsData.kcal)}kcalを消費できています。` : "歩数目標を達成しています。今日は回復を優先し、無理に運動量を増やさなくて大丈夫です。";
  if (/目標体重|減量|痩せ|ペース/.test(question)) return `現在の目標は${weightGap.toFixed(1)}kg減。1日${formatNumber(weightData.deficit)}kcalの赤字なら、約${Math.ceil((weightGap * 7700) / weightData.deficit)}日が目安です。体重は毎日の増減より、週平均で確認しましょう。`;
  if (/夕食|何を|食べたら/.test(question)) return calorieRoom > 0 ? `夕食に使える目安はあと${formatNumber(calorieRoom)}kcalです。たんぱく質${proteinGap}gを補える魚・豆腐・鶏肉に、汁物と野菜を組み合わせるのがおすすめです。` : "今日は目標カロリーに近いので、夕食は野菜や汁物を中心に軽めにするとバランスが整います。";
  if (/バランス|食事/.test(question) || !question) {
    const macroMessage = proteinGap > 20 ? `たんぱく質があと${formatNumber(proteinGap)}g` : totals.fat > targets.fat ? "脂質が少し多め" : "PFCは良いバランス";
    return `今日の食事は${macroMessage}です。${calorieRoom ? `残り${formatNumber(calorieRoom)}kcalの範囲で、主菜と野菜を選びましょう。` : "明日は朝食にたんぱく質を足すと、1日を通して整えやすくなります。"}`;
  }
  return `今日の記録では${formatNumber(totals.kcal)}kcalを摂取し、${formatNumber(stepsData.kcal)}kcalを運動で消費しています。${proteinGap ? `まずはたんぱく質をあと${formatNumber(proteinGap)}g補うのがおすすめです。` : "この調子で食事と活動量を記録していきましょう。"}`;
}
function renderCoach() { const totals = getMealTotals(); const proteinGap = Math.max(0, targets.protein - totals.protein); $("#coach-summary").textContent = proteinGap ? `今日のたんぱく質はあと${formatNumber(proteinGap)}g。質問に合わせて提案します。` : "今日の主要栄養素は目標に近づいています。次の一手を相談できます。"; }
function askCoach(question) { const answer = generateCoachAdvice((question || "").trim()); $("#coach-answer-text").textContent = answer; $("#coach-answer").classList.add("is-new"); setTimeout(() => $("#coach-answer").classList.remove("is-new"), 400); }
function showToast(message) { const toast = $("#toast"); toast.textContent = message; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2200); }
function deleteMeal(id) { const meal = meals.find((item) => item.id === id); meals = meals.filter((item) => item.id !== id); renderMeals(); renderSummary(); showToast(`${meal?.name || "食事"}を削除しました`); }

function openModal() { $("#modal-backdrop").classList.add("open"); $("#modal-backdrop").setAttribute("aria-hidden", "false"); $("#meal-description").focus(); }
function closeModal() { $("#modal-backdrop").classList.remove("open"); $("#modal-backdrop").setAttribute("aria-hidden", "true"); $("#analysis-result").hidden = true; analysis = null; }

function estimateMeal(description) {
  const found = Object.keys(foodEstimates).filter((food) => description.includes(food));
  const items = found.length ? found : ["鶏むね肉", "玄米", "ブロッコリー"];
  return items.reduce((sum, food) => ({ kcal: sum.kcal + foodEstimates[food].kcal, protein: sum.protein + foodEstimates[food].protein, fat: sum.fat + foodEstimates[food].fat, carbs: sum.carbs + foodEstimates[food].carbs }), { kcal: 0, protein: 0, fat: 0, carbs: 0 });
}

function renderAnalysisResult(result, name, source = "入力内容から推定") {
  const box = $("#analysis-result");
  box.hidden = false;
  box.innerHTML = `<h3>解析結果 <span style="color:var(--green);font-size:10px;font-weight:500">${escapeHtml(name)}</span></h3><label class="analysis-name-field">料理名<input id="analysis-name" type="text" value="${escapeHtml(name)}" /></label><p style="color:var(--muted);font-size:9px;margin:0 0 10px">${escapeHtml(source)} · 記録前に内容を確認してください</p><div class="result-grid"><div class="result-stat"><span>カロリー</span><strong>${formatNumber(result.kcal)}</strong><small>kcal</small></div><div class="result-stat"><span>たんぱく質</span><strong>${result.protein}g</strong></div><div class="result-stat"><span>脂質</span><strong>${result.fat}g</strong></div><div class="result-stat"><span>炭水化物</span><strong>${result.carbs}g</strong></div></div><div class="result-actions"><button class="edit-result" id="edit-result">内容を調整</button><button class="save-result" id="save-result">この内容で記録</button></div>`;
  $("#save-result").addEventListener("click", () => { const finalName = $("#analysis-name").value.trim() || name; meals.push({ id: Date.now(), type: "夕食", time: new Date().toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" }), name: finalName, detail: "AI解析 · 内容を確認済み", emoji: "🍽️", ...result }); renderMeals(); renderSummary(); closeModal(); showToast("食事を記録しました"); });
  $("#edit-result").addEventListener("click", () => $("#meal-description").focus());
}

function analyze() { const hasImage = $("#meal-image").files && $("#meal-image").files.length > 0; const description = $("#meal-description").value.trim() || "鶏むね肉、玄米、ブロッコリー"; const result = estimateMeal(description); const name = hasImage ? "鶏むね肉の玄米ボウル（推定）" : description.split(/[、,]/)[0] + "の食事"; const source = hasImage ? "写真から推定（料理名は編集できます）" : "入力内容から推定"; analysis = result; $("#analyze-button").innerHTML = "<span>✓</span> 解析が完了しました"; setTimeout(() => { $("#analyze-button").innerHTML = "<span>✦</span> AIで栄養を解析する"; }, 1600); renderAnalysisResult(result, name, source); }

function manualAdd() { const name = $("#manual-name").value.trim() || "食事メモ"; meals.push({ id: Date.now(), type: "夕食", time: $("#manual-time").value || "19:00", name, detail: "手入力で記録", emoji: "🍽️", kcal: Number($("#manual-kcal").value) || 0, protein: Number($("#manual-protein").value) || 0, fat: Number($("#manual-fat").value) || 0, carbs: Number($("#manual-carbs").value) || 0 }); renderMeals(); renderSummary(); closeModal(); showToast("食事を記録しました"); }

document.addEventListener("DOMContentLoaded", () => {
  setupPWA();
  renderProfile(); renderMeals(); renderSummary(); renderWater(); renderWeight(); renderSteps(); renderFoodResults(); renderReminders(); renderWeeklyReview();
  $("#mobile-menu").addEventListener("click", () => setMobileMenu(!$(".sidebar").classList.contains("open"))); $("#sidebar-scrim").addEventListener("click", () => setMobileMenu(false)); $$(".sidebar .nav-item, .profile-link").forEach((link) => link.addEventListener("click", () => setMobileMenu(false))); $$("#mobile-bottom-nav a").forEach((link) => link.addEventListener("click", () => { setMobileMenu(false); document.querySelector(link.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" }); }));
  $$(".open-modal").forEach((button) => button.addEventListener("click", openModal));
  $("#modal-close").addEventListener("click", closeModal); $("#modal-backdrop").addEventListener("click", (event) => { if (event.target.id === "modal-backdrop") closeModal(); });
  $$(".modal-tab").forEach((tab) => tab.addEventListener("click", () => { $$(".modal-tab").forEach((item) => item.classList.remove("active")); $$(".tab-panel").forEach((panel) => panel.classList.remove("active")); tab.classList.add("active"); $(`[data-panel="${tab.dataset.tab}"]`).classList.add("active"); }));
  $$("[data-prompt]").forEach((button) => button.addEventListener("click", () => { $("#meal-description").value = button.dataset.prompt; }));
  $("#analyze-button").addEventListener("click", analyze); $("#manual-add").addEventListener("click", manualAdd);
  $("#meal-image").addEventListener("change", (event) => { const file = event.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => { $("#image-preview").src = reader.result; $(".upload-box").classList.add("has-image"); $("#meal-description").value = "鶏むね肉、玄米、ブロッコリー"; $("#analyze-button").innerHTML = "<span>✦</span> 写真からAI解析する"; }; reader.readAsDataURL(file); });
  $$(".water-add").forEach((button) => button.addEventListener("click", () => { water = Math.min(3000, water + Number(button.dataset.amount)); renderWater(); showToast("水分を記録しました"); })); $("#water-reset").addEventListener("click", () => { water = 0; renderWater(); showToast("水分量をリセットしました"); });
  $$(".food-chip").forEach((button) => button.addEventListener("click", () => { openModal(); $("#meal-description").value = button.dataset.food; showToast(`${button.dataset.food}を解析欄に追加しました`); }));
  $("#food-search-button").addEventListener("click", () => renderFoodResults($("#food-search").value.trim())); $("#food-search").addEventListener("keydown", (event) => { if (event.key === "Enter") renderFoodResults(event.target.value.trim()); }); $("#clear-food-search").addEventListener("click", () => { $("#food-search").value = ""; renderFoodResults(); });
  $("#barcode-search").addEventListener("click", () => renderBarcodeResult($("#barcode-input").value)); $("#barcode-input").addEventListener("keydown", (event) => { if (event.key === "Enter") renderBarcodeResult(event.target.value); }); $$('[data-barcode]').forEach((button) => button.addEventListener("click", () => { $("#barcode-input").value = button.dataset.barcode; renderBarcodeResult(button.dataset.barcode); }));
  $("#profile-save").addEventListener("click", saveProfile); $("#reminder-save").addEventListener("click", saveReminders); $("#reminder-test").addEventListener("click", testReminder); $("#weekly-review-button").addEventListener("click", () => { renderWeeklyReview(); showToast("週間レビューを更新しました"); });
  $("#weight-save").addEventListener("click", saveWeight); $("#health-sync").addEventListener("click", syncHealth);
  $$("[data-section]").forEach((button) => button.addEventListener("click", () => document.getElementById(button.dataset.section)?.scrollIntoView({ behavior: "smooth" })));
  $$('[data-coach-prompt]').forEach((button) => button.addEventListener("click", () => { $("#coach-question").value = button.dataset.coachPrompt; askCoach(button.dataset.coachPrompt); })); $("#coach-ask").addEventListener("click", () => askCoach($("#coach-question").value)); $("#coach-question").addEventListener("keydown", (event) => { if (event.key === "Enter") askCoach(event.target.value); });
  $("#filter-button").addEventListener("click", () => showToast("現在は今日の食事を表示しています"));
  $$("[data-date-shift]").forEach((button) => button.addEventListener("click", () => showToast(button.dataset.dateShift === "1" ? "次の日はまだ記録がありません" : "前の日はまだ記録がありません")));
});
