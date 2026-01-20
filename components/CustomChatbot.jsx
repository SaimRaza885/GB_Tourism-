"use client";

import { useState } from "react";

export default function CustomChatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input) return;
        const userMessage = { role: "user", content: input };
        setMessages([...messages, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input })
            });

            const data = await res.json();
            const botMessage = { role: "bot", content: data.reply };
            setMessages((prev) => [...prev, botMessage]);
        } catch (err) {
            console.error(err);
            const errorMessage = { role: "bot", content: "Error: Please try again." };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-4 border rounded shadow">
            <div className="space-y-2 h-64 overflow-y-auto mb-2">
                {messages.map((m, i) => (
                    <div
                        key={i}
                        className={`p-2 rounded ${m.role === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"}`}
                    >
                        {m.content}
                    </div>
                ))}
                {loading && <div className="text-gray-500">AI is typing...</div>}
            </div>
            <div className="flex">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border rounded-l"
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                    onClick={sendMessage}
                    className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
                >
                    Send
                </button>
            </div>
        </div>
    );
}
