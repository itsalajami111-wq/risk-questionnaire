export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const ORTTO_API_KEY = process.env.ORTTO_API_KEY;
    const ORTTO_ENDPOINT =
      process.env.ORTTO_ENDPOINT || "https://api.eu.ap3api.com/v1/activities/create";

    if (!ORTTO_API_KEY) {
      return res.status(500).json({ ok: false, error: "Missing ORTTO_API_KEY" });
    }

    const body = req.body || {};
    const data = body.data || {};
    const results = body.results || {};

    if (!data.email) {
      return res.status(400).json({ ok: false, error: "Missing data.email" });
    }

    const phoneCode = String(data.phoneCode || "").replace("+", "").trim();
    const phoneNumber = String(data.phoneNumber || "").trim();

    // ✅ YOUR magnet activity template (same as you provided)
    const orttoBody = {
      activities: [
        {
          activity_id: "act:cm:websiteformsubmit",
          attributes: {
            "str:cm:first-name": data.firstName,
            "str:cm:last-name": data.lastName,
            "str:cm:email": data.email,
            "phn:cm:phone": { c: phoneCode, n: phoneNumber },
            "str:cm:country": data.country,
            "str:cm:answers": JSON.stringify({
              tool: "risk-questionnaire",

              // keep everything from the quiz in one blob
              riskScore: results.riskScore || 0,
              riskProfile: results.riskProfile || "",
              suggestedAllocation: results.suggestedAllocation || { stocks: 0, bonds: 0, reserves: 0 },
              currentAllocation: results.currentAllocation || { stocks: 0, bonds: 0, reserves: 0 },
              answers: results.answers || {},

              // optional: branch currency from lead page
              currency: data.currency || null
            }),
          },
          fields: {
            "str::email": data.email,
          },
          location: {
            source_ip: req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || null,
            custom: null,
            address: null,
          },
        },
      ],
      merge_by: ["str::email"],
    };

    const r = await fetch(ORTTO_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": ORTTO_API_KEY,
      },
      body: JSON.stringify(orttoBody),
    });

    const text = await r.text();

    if (!r.ok) {
      return res.status(502).json({
        ok: false,
        error: "Ortto error",
        orttoStatus: r.status,
        orttoResponse: text,
      });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ ok: false, error: "Server error", details: String(e) });
  }
}
