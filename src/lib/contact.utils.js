export const sendContactForm = async (data) => {
  const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json",
      },
  });

  if (!res.ok) throw new Error("Failed to send messages");

  return res.json();
};
