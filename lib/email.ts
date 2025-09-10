import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmails({
  name,
  email,
  phone,
  interest,
}: {
  name: string;
  email: string;
  phone: string;
  interest: string;
}) {

  console.log("enterd")
  const admin = await resend.emails.send({
    from: "Insight Abroad <no-reply@insightabroadservices.org>",
    to: "Info@insightabroadservices.org",
    subject: `📬 New Inquiry from ${name}`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.5;">
        <h2 style="color: #EF4444;">New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>interest:</strong><br/>${interest}</p>
      </div>
    `,
  });
  console.log("mail sent")


  const user = await resend.emails.send({
    from: "Insight Abroad <no-reply@insightabroadservices.org>",
    to: email,
    subject: `🎉 Thank You for Contacting Insight Abroad`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.5;">
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out to <strong>Insight Abroad Services</strong>.</p>
        <p>We’ve received your interest and will get back to you shortly.</p>
        <hr/>
        <p><strong>Your interest:</strong><br/>${interest}</p>
        <br/>
        <p>Warm regards,<br/><strong>Insight Abroad Team</strong></p>
      </div>
    `,
  });

  return { admin, user };
}
