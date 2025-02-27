import React from "react";
import emailjs from "@emailjs/browser";
import { BiLoaderCircle } from "react-icons/bi";
export function ContactForm() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [buttonText, setButtonText] = React.useState("Enviar Mensagem");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setButtonText("Enviando...");
        const form = {
            from_name: name.toUpperCase(),
            email,
            message,
        };

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAIL_JS_SERVICE_ID!,
                import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID!,
                form,
                {
                    publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
                }
            );
            setButtonText("Mensagem Enviada!");
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
            setButtonText("Erro ao enviar mensagem");
        } finally {
          setIsLoading(false);
            setTimeout(() => {
                setName("");
                setEmail("");
                setMessage("");
                setButtonText("Enviar Mensagem");
            }, 1500);
        }
    };
    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                >
                    Nome
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                >
                    Mensagem
                </label>
                <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    required
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-orange-400 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
                {isLoading &&
                    BiLoaderCircle({
                        className: "animate-spin inline-block mr-2",
                    })}
                {buttonText}
            </button>
        </form>
    );
}
