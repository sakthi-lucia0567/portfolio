"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("message send ");
  console.log("email ", formData.get("email"));
  console.log("message ", formData.get("message"));
  resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "sakthivela0567@gmail.com",
    subject: "Contact form submitted",
    text: "Contact form submitted",
  });
};
