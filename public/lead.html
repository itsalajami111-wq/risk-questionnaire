<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Hoxton Wealth — Get Your Results</title>
  <style>
    :root{
      --bg:#ffffff;
      --card:#F5F7FA;
      --text:#1F2937;
      --muted:#6B7280;
      --border:#E5E7EB;
      --primary:#0B3D3F;
      --shadow:0 10px 24px rgba(0,0,0,.07);
    }
    *{ box-sizing:border-box; }
    body{
      margin:0;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      background:var(--bg);
      color:var(--text);
    }
    .wrap{ width:min(900px,92vw); margin:26px auto 60px; }
    .header{
      background:var(--primary);
      color:#fff;
      border-radius:16px;
      padding:14px 16px;
      display:flex;
      align-items:center;
      gap:12px;
      box-shadow:var(--shadow);
    }
    .header img{ height:32px; width:auto; }
    .header .t1{ font-weight:800; letter-spacing:.2px; }
    .header .t2{ font-size:12px; opacity:.9; }

    .card{
      margin-top:14px;
      background:var(--card);
      border:1px solid var(--border);
      border-radius:16px;
      padding:16px;
      box-shadow:var(--shadow);
    }
    h1{ margin:6px 0 6px; color:var(--primary); font-size:24px; }
    p{ margin:0; color:var(--muted); line-height:1.5; }

    label{ display:flex; flex-direction:column; gap:6px; font-size:14px; font-weight:700; color:#374151; }
    input, select{
      width:100%;
      border:1px solid var(--border);
      border-radius:10px;
      padding:10px 12px;
      font-size:15px;
      background:#fff;
      color:var(--text);
      outline:none;
    }

    .row{ display:grid; grid-template-columns:1fr 1fr; gap:12px; }
    .row2{ display:grid; grid-template-columns:160px 1fr; gap:12px; }

    .btn{
      border:0;
      background:var(--primary);
      color:#fff;
      padding:12px 14px;
      border-radius:12px;
      font-size:15px;
      font-weight:800;
      cursor:pointer;
      width:100%;
    }
    .btn.ghost{
      background:transparent;
      color:var(--primary);
      border:1px solid rgba(11,61,63,.35);
    }

    .errorBox{
      display:none;
      margin-top:12px;
      background:#FEF2F2;
      border:1px solid #FCA5A5;
      color:#991B1B;
      padding:10px 12px;
      border-radius:12px;
      font-size:14px;
    }

    .mini{
      background:#fff;
      border:1px solid var(--border);
      border-radius:14px;
      padding:12px;
      margin-top:12px;
    }
    .kv{ display:flex; justify-content:space-between; gap:10px; padding:6px 0; border-bottom:1px dashed #E5E7EB; }
    .kv:last-child{ border-bottom:0; }
    .k{ color:var(--muted); font-size:13px; }
    .v{ font-weight:800; color:#111827; }

    @media(max-width:720px){
      .row{ grid-template-columns:1fr; }
      .row2{ grid-template-columns:1fr; }
    }
  </style>
</head>
<body>
  <div class="wrap">
    <!-- Magnet Header (same for all tools) -->
    <div class="header">
      <img src="/hoxton-logo.png" alt="Hoxton Wealth">
      <div>
        <div class="t1">Hoxton Wealth</div>
        <div class="t2">Risk Questionnaire — Lead Form</div>
      </div>
    </div>

    <div id="missing" class="card" style="display:none;">
      <h1>Results not found</h1>
      <p>Please complete the questionnaire first.</p>
      <div style="margin-top:14px;">
        <button class="btn" onclick="window.location.href='index.html'">Go to Questionnaire →</button>
      </div>
    </div>

    <div id="leadCard" class="card" style="display:none;">
      <h1>Get Your Results</h1>
      <p>Enter your details to view your personalised profile and allocation.</p>

      <div class="mini" id="previewBox" aria-live="polite"></div>

      <div class="row" style="margin-top:14px;">
        <label>First Name *
          <input id="firstName" placeholder="First name" />
        </label>
        <label>Last Name *
          <input id="lastName" placeholder="Last name" />
        </label>
      </div>

      <div class="row" style="margin-top:12px;">
        <label style="grid-column:span 2;">Email Address *
          <input id="email" type="email" placeholder="name@example.com" />
        </label>
      </div>

      <div class="row" style="margin-top:12px;">
        <label>Country of Residence *
          <select id="country">
            <option value="">Select your country</option>
            <option>United Arab Emirates</option>
            <option>United Kingdom</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>
        </label>
        <label>Currency
          <select id="currency" disabled>
            <option value="AED">AED (د.إ)</option>
          </select>
        </label>
      </div>

      <div class="row2" style="margin-top:12px;">
        <label>Phone Code *
          <select id="phoneCode">
            <option value="+971">United Arab Emirates (+971)</option>
            <option value="+44">United Kingdom (+44)</option>
            <option value="+1">United States (+1)</option>
            <option value="+1">Canada (+1)</option>
            <option value="+61">Australia (+61)</option>
          </select>
        </label>
        <label>Phone Number *
          <input id="phoneNumber" inputmode="numeric" placeholder="Numbers only" />
        </label>
      </div>

      <div id="errorBox" class="errorBox"></div>

      <div class="row" style="margin-top:14px;">
        <button class="btn" id="submitBtn">Submit & View Results →</button>
        <button class="btn ghost" id="backBtn">← Back</button>
      </div>
    </div>

    <div id="resultsCard" class="card" style="display:none;">
      <h1>Your Risk Profile</h1>
      <p>Here’s your personalised result based on your answers.</p>

      <div class="mini" id="resultsBox"></div>

      <div style="margin-top:14px;">
        <button class="btn ghost" onclick="window.location.href='index.html'">Start Again</button>
      </div>
    </div>
  </div>

<script>
  // Branch currency rules (same as before)
  const branchCurrencyByCountry = {
    "United Arab Emirates": [{ code:"AED", label:"AED (د.إ) - UAE Dirham" }],
    "United Kingdom": [{ code:"GBP", label:"GBP (£) - British Pound" }],
    "United States": [{ code:"USD", label:"USD ($) - US Dollar" }],
    "Canada": [{ code:"CAD", label:"CAD ($) - Canadian Dollar" }],
    "Australia": [{ code:"AUD", label:"AUD ($) - Australian Dollar" }],
  };

  const resultsRaw = localStorage.getItem("hoxton_risk_results");
  let results = null;
  try { results = resultsRaw ? JSON.parse(resultsRaw) : null; } catch { results = null; }

  const missing = document.getElementById("missing");
  const leadCard = document.getElementById("leadCard");
  const resultsCard = document.getElementById("resultsCard");

  const previewBox = document.getElementById("previewBox");
  const resultsBox = document.getElementById("resultsBox");

  const countryEl = document.getElementById("country");
  const currencyEl = document.getElementById("currency");
  const phoneCodeEl = document.getElementById("phoneCode");

  const errorBox = document.getElementById("errorBox");
  const submitBtn = document.getElementById("submitBtn");

  function showError(msg){
    errorBox.textContent = msg;
    errorBox.style.display = msg ? "block" : "none";
  }

  function setCurrencyByCountry(country){
    const opts = branchCurrencyByCountry[country] || branchCurrencyByCountry["United Arab Emirates"];
    currencyEl.innerHTML = "";
    for (const o of opts){
      const opt = document.createElement("option");
      opt.value = o.code;
      opt.textContent = o.label;
      currencyEl.appendChild(opt);
    }
  }

  function setPhoneCodeByCountry(country){
    // Keep only branch codes; auto-select best match
    const map = {
      "United Arab Emirates": "+971",
      "United Kingdom": "+44",
      "United States": "+1",
      "Canada": "+1",
      "Australia": "+61",
    };
    const v = map[country];
    if (v) phoneCodeEl.value = v;
  }

  function renderPreview(){
    previewBox.innerHTML = `
      <div class="kv"><div class="k">Risk Score</div><div class="v">${results.riskScore}</div></div>
      <div class="kv"><div class="k">Risk Profile</div><div class="v">${results.riskProfile}</div></div>
      <div class="kv"><div class="k">Suggested Allocation</div><div class="v">
        ${results.suggestedAllocation.stocks}% Stocks / ${results.suggestedAllocation.bonds}% Bonds / ${results.suggestedAllocation.reserves}% Reserves
      </div></div>
    `;
  }

  function renderResults(){
    resultsBox.innerHTML = `
      <div class="kv"><div class="k">Risk Score</div><div class="v">${results.riskScore}</div></div>
      <div class="kv"><div class="k">Risk Profile</div><div class="v">${results.riskProfile}</div></div>
      <div class="kv"><div class="k">Suggested Allocation</div><div class="v">
        ${results.suggestedAllocation.stocks}% Stocks / ${results.suggestedAllocation.bonds}% Bonds / ${results.suggestedAllocation.reserves}% Reserves
      </div></div>
      <div class="kv"><div class="k">Your Current Allocation</div><div class="v">
        ${results.currentAllocation.stocks}% Stocks / ${results.currentAllocation.bonds}% Bonds / ${results.currentAllocation.reserves}% Reserves
      </div></div>
    `;
  }

  // If no stored results, send them back
  if (!results || typeof results.riskScore !== "number") {
    missing.style.display = "";
  } else {
    leadCard.style.display = "";
    renderPreview();
  }

  // Default to UAE branch
  setCurrencyByCountry("United Arab Emirates");

  countryEl.addEventListener("change", () => {
    const c = countryEl.value;
    if (!c) return;
    setCurrencyByCountry(c);
    setPhoneCodeByCountry(c);
  });

  document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "index.html";
  });

  submitBtn.addEventListener("click", async () => {
    showError("");

    const firstName = document.getElementById("firstName").value.trim();
    const lastName  = document.getElementById("lastName").value.trim();
    const email     = document.getElementById("email").value.trim();
    const country   = countryEl.value;
    const currency  = currencyEl.value || "AED";
    const phoneCode = phoneCodeEl.value;
    const phoneNumber = document.getElementById("phoneNumber").value.trim();

    if (!firstName || !lastName) return showError("Please enter your first and last name.");
    if (!email.includes("@")) return showError("Please enter a valid email address.");
    if (!country) return showError("Please select your country.");
    if (!/^[0-9]{4,15}$/.test(phoneNumber)) return showError("Phone number must be 4–15 digits (numbers only).");

    const data = { firstName, lastName, email, country, currency, phoneCode, phoneNumber };

    // Send to your Vercel serverless endpoint -> Ortto magnet-form-captured
    try {
      const r = await fetch("/api/lead", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ data, results })
      });

      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.ok) {
        console.error("Lead submit failed:", j);
        return showError("Could not submit. Please try again.");
      }

      // Success -> show results
      leadCard.style.display = "none";
      resultsCard.style.display = "";
      renderResults();

    } catch (e) {
      console.error(e);
      showError("Could not submit. Please try again.");
    }
  });
</script>
</body>
</html>
