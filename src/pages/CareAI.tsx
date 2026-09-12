import { useState } from "react";
import type { FormEvent } from "react";

import type { ChatMessage } from "../types";

function CareAI() {
    const [input, setInput] = useState("");

    const [messages, setMessages] = useState<
        ChatMessage[]
    >([
        {
            id: 1,
            sender: "ai",
            message:
                "Hello! I'm CareBridge AI. I can help you organize your health information and answer general health questions. How can I help you today?",
        },
    ]);

    const getAIResponse = (message: string) => {
        const lowerMessage = message.toLowerCase();

        if (lowerMessage.includes("headache")) {
            return "Headaches can have many causes, including dehydration, stress, lack of sleep, or illness. Rest, hydration, and reducing screen time may help. If symptoms are severe or persistent, please consult a healthcare professional.";
        }

        if (
            lowerMessage.includes("stress") ||
            lowerMessage.includes("anxious")
        ) {
            return "I'm sorry you're feeling stressed. Try taking slow breaths, stepping away from stressful activities, and speaking with someone you trust. If stress is persistent or overwhelming, consider contacting a qualified mental health professional.";
        }

        if (lowerMessage.includes("medication")) {
            return "I can help you organize your medication schedule. Please remember that you should not change medication dosage or stop prescribed medicines without consulting your doctor.";
        }

        return "Thanks for sharing that. I can provide general health information, but I am not a substitute for professional medical advice.";
    };

    const sendMessage = (
        event?: FormEvent,
        prompt?: string
    ) => {
        event?.preventDefault();

        const message = prompt || input;

        if (!message.trim()) return;

        const userMessage: ChatMessage = {
            id: Date.now(),
            sender: "user",
            message,
        };

        setMessages((previous) => [
            ...previous,
            userMessage,
        ]);

        setInput("");

        setTimeout(() => {
            const aiMessage: ChatMessage = {
                id: Date.now() + 1,
                sender: "ai",
                message: getAIResponse(message),
            };

            setMessages((previous) => [
                ...previous,
                aiMessage,
            ]);
        }, 500);
    };

    return (
        <div className="ai-page">
            <div className="ai-header">
                <div className="ai-heading-group">
                    <div className="ai-title-icon">
                        <i className="fa-solid fa-sparkles" />
                    </div>

                    <div>
                        <span className="panel-label">
                            CAREBRIDGE ASSISTANT
                        </span>

                        <h1>CareBridge AI</h1>

                        <p>
                            Ask questions and organize your
                            health information.
                        </p>
                    </div>
                </div>

                <span className="ai-status">
                    <i className="fa-solid fa-circle" />
                    Online
                </span>
            </div>

            <div className="chat-container">
                <div className="chat-messages">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`chat-message ${message.sender}`}
                        >
                            {message.sender === "ai" && (
                                <div className="chat-avatar">
                                    <i className="fa-solid fa-sparkles" />
                                </div>
                            )}

                            <div className="message-content">
                                <span className="message-name">
                                    {message.sender === "ai"
                                        ? "CareBridge AI"
                                        : "You"}
                                </span>

                                <div className="message-bubble">
                                    {message.message}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="suggestions">
                    <button
                        onClick={() =>
                            sendMessage(
                                undefined,
                                "I have a headache"
                            )
                        }
                    >
                        I have a headache
                    </button>

                    <button
                        onClick={() =>
                            sendMessage(
                                undefined,
                                "Help me with my medication"
                            )
                        }
                    >
                        Medication help
                    </button>

                    <button
                        onClick={() =>
                            sendMessage(
                                undefined,
                                "I am feeling stressed"
                            )
                        }
                    >
                        I'm feeling stressed
                    </button>
                </div>

                <form
                    className="chat-input-area"
                    onSubmit={sendMessage}
                >
                    <input
                        type="text"
                        placeholder="Ask CareBridge AI something..."
                        value={input}
                        onChange={(event) =>
                            setInput(event.target.value)
                        }
                    />

                    <button type="submit">
                        <i className="fa-solid fa-paper-plane" />
                    </button>
                </form>

                <small className="ai-disclaimer">
                    CareBridge AI provides general information
                    and is not a substitute for professional
                    medical advice.
                </small>
            </div>
        </div>
    );
}

export default CareAI;