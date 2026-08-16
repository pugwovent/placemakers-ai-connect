import { useEffect, useRef, useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { connectConfig, isConnectConfigured } from "@/config/connect";

declare global {
  interface Window {
    amazon_connect?: (...args: unknown[]) => void;
  }
}

type Msg = { from: "anna" | "you"; text: string };

/**
 * Loads the real Amazon Connect communications widget when configured,
 * otherwise renders a visually identical demo launcher for the AI agent.
 */
export function AmazonConnectChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "anna",
      text: `Kia ora, I'm ${connectConfig.agentName} — the AnyCompany virtual assistant. I can help with orders, stock, trade accounts and delivery.`,
    },
  ]);
  const loaded = useRef(false);
  const configured = isConnectConfigured();

  useEffect(() => {
    if (!configured || loaded.current) return;
    loaded.current = true;

    const script = document.createElement("script");
    script.src = connectConfig.scriptUrl;
    script.async = true;
    script.id = connectConfig.widgetId;
    document.head.appendChild(script);

    window.amazon_connect =
      window.amazon_connect ||
      function (...args: unknown[]) {
        // queue calls until the widget script loads
        (
          (window.amazon_connect as unknown as { ac?: unknown[] }).ac ||
          ((window.amazon_connect as unknown as { ac: unknown[] }).ac = [])
        ).push(args);
      };

    window.amazon_connect("snippetId", connectConfig.snippetId);
    window.amazon_connect("supportedMessagingContentTypes", ["text/plain", "text/markdown"]);
    window.amazon_connect("customDisplayNames", {
      header: { headerTitle: `Chat with ${connectConfig.agentName}` },
    });
  }, [configured]);

  if (configured) return null;

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((m) => [...m, { from: "you", text }]);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          from: "anna",
          text: "Thanks — in the live build this connects to the Amazon Connect contact flow and I'll answer from the AnyCompany product and account data.",
        },
      ]);
    }, 700);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[26rem] w-[21rem] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
          <div className="flex items-center justify-between bg-primary px-4 py-3">
            <div>
              <p className="text-sm font-bold text-primary-foreground">
                {connectConfig.agentName}
              </p>
              <p className="text-xs text-primary-foreground/80">AnyCompany virtual assistant</p>
            </div>
            <button
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="rounded p-1 text-primary-foreground/90 hover:bg-black/10"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto bg-muted/40 p-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                  m.from === "anna"
                    ? "bg-card text-foreground shadow-sm"
                    : "ml-auto bg-primary text-primary-foreground"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 border-t border-border p-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type your message"
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              aria-label="Send message"
              onClick={send}
              className="rounded-md bg-primary p-2 text-primary-foreground hover:opacity-90"
            >
              <Send className="size-4" />
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-xl transition hover:opacity-90"
      >
        <MessageSquare className="size-5" />
        {open ? "Hide chat" : `Chat with ${connectConfig.agentName}`}
      </button>
    </div>
  );
}
