    "use client";
    import { useState, useRef, useEffect } from "react";
    import Header from "@/components/header";
    import Footer from "@/components/footer";
    import { Button } from "@/components/ui/button";

    export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const textareaRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));

        if (name === "message" && textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
        }
    };

    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      const err = await res.json();
      alert("Failed to submit: " + err.error);
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("Something went wrong!");
  }
};
    useEffect(() => {
        if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        }
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
        <Header />
        <main className="flex-grow p-6 max-w-2xl mx-auto w-full">
            <h1 className="text-4xl font-extrabold text-center mb-8 text-red-600">Contact Us</h1>

            {submitted ? (
            <div className="bg-green-800 text-green-200 p-6 rounded-xl text-center transition duration-300">
                <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
                <p>Your message has been sent. We’ll get back to you shortly.</p>
            </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <label className="block text-sm mb-2 font-semibold">Name</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-200"
                    required
                />
                </div>

                <div>
                <label className="block text-sm mb-2 font-semibold">Email</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-200"
                    required
                />
                </div>

                <div>
                <label className="block text-sm mb-2 font-semibold">Message</label>
                <textarea
                    ref={textareaRef}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    rows={1}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 resize-none overflow-hidden focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-200"
                    required
                />
                </div>

                <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold rounded-lg transition duration-300"
                >
                Send Message
                </Button>
            </form>
            )}
        </main>
        <Footer />
        </div>
    );
    }
