import { mailOptions, transpoter } from "@/config/nodemailer";
import fs from "fs";
import path from "path";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !subject || !message) {
            return new Response(JSON.stringify({ message: "Bad request: Missing fields" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Load the email template
        const templatePath = path.join(process.cwd(), "src/emails/contactEmailTemplate.html");
        let emailHtml = fs.readFileSync(templatePath, "utf8");

        // Replace placeholders with actual data
        emailHtml = emailHtml
            .replace("{{name}}", name)
            .replace("{{email}}", email)
            .replace("{{subject}}", subject)
            .replace("{{message}}", message);

        await transpoter.sendMail({
            ...mailOptions,
            subject,
            html: emailHtml, // Use the HTML template
        });

        console.log("Email sent successfully");
        return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ message: "Internal Server Error", error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
