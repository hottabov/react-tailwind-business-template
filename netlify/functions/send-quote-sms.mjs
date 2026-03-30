import twilio from "twilio";

export default async (request) => {
  try {
    const { firstName = "there", phone = "" } = await request.json();
    const accountSid = Netlify.env.get("TWILIO_ACCOUNT_SID");
    const authToken = Netlify.env.get("TWILIO_AUTH_TOKEN");
    const fromNumber = Netlify.env.get("TWILIO_FROM_NUMBER");

    if (!accountSid || !authToken || !fromNumber || !phone) {
      return Response.json(
        { ok: false, reason: "Missing Twilio config or phone" },
        { status: 400 },
      );
    }

    const client = twilio(accountSid, authToken);
    const body = `Thanks ${firstName}, we got your quote request and will contact you soon. Melbourne Pro Painters`;

    await client.messages.create({
      body,
      from: fromNumber,
      to: phone,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Twilio SMS send failed", error);
    return Response.json(
      { ok: false, reason: "SMS send failed" },
      { status: 500 },
    );
  }
};
