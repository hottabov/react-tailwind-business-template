import twilio from "twilio";

function getField(source, key) {
  return source?.[key] ?? source?.data?.[key] ?? source?.payload?.[key] ?? "";
}

export default async (request) => {
  const { payload = {} } = await request.json();
  const formName =
    payload.form_name ||
    payload.formName ||
    getField(payload, "form-name") ||
    "";

  if (formName !== "quote-request") {
    return new Response("Ignored", { status: 200 });
  }

  const phone =
    getField(payload, "phone") ||
    payload.number ||
    "";
  const firstName =
    getField(payload, "firstName") ||
    getField(payload, "name") ||
    "there";

  const accountSid = Netlify.env.get("TWILIO_ACCOUNT_SID");
  const authToken = Netlify.env.get("TWILIO_AUTH_TOKEN");
  const fromNumber = Netlify.env.get("TWILIO_FROM_NUMBER");

  if (!accountSid || !authToken || !fromNumber || !phone) {
    return new Response("Missing Twilio config or phone", { status: 200 });
  }

  const client = twilio(accountSid, authToken);
  const smsBody = `Thanks ${firstName}, we got your quote request and will contact you soon. Melbourne Pro Painters`;

  await client.messages.create({
    body: smsBody,
    from: fromNumber,
    to: phone,
  });

  return new Response("SMS sent", { status: 200 });
};
