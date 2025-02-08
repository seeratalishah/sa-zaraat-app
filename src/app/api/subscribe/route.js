import { sendMailOptions, sendTranspoter } from "@/config/nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return new Response(
        JSON.stringify({ message: "Bad request: Missing email" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Load and compile the welcome email template
    // const templatePath = path.join(
    //   process.cwd(),
    //   "src/emails/welcomeEmailTemplate.html"
    // );
    // const source = fs.readFileSync(templatePath, "utf8");
    // const template = handlebars.compile(source);
    // const emailHtml = template({ email });

    await sendTranspoter.sendMail({
      ...sendMailOptions,
      to: email, // Send email to subscriber
      subject: "Welcome to Our Platform!",
      html: <p></p>,
    });

    console.log("Welcome email sent successfully");
    return new Response(
      JSON.stringify({ success: true, message: "Welcome email sent" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending welcome email:", error);
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
