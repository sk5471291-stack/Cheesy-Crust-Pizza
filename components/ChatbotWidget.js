'use client';

import React, { useState, useRef, useEffect } from 'react';
import { STORE_INFO } from '@/lib/pizzaData';

export default function ChatbotWidget({
  isOpen,
  onToggle,
  onClose,
  onInspectPrompt,
  onAddToCart,
  externalPrompt
}) {
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Hello there! Welcome to **${STORE_INFO.name}**! 🍕\n\nI'm your cheerful AI order assistant. Craving our crispy **Large Pepperoni ($15)**, fresh **Medium Veggie ($12)**, or legendary **Garlic Bread ($5)**? Delivery takes just **${STORE_INFO.deliveryTime}**!\n\nHow can I help you today? You can also test my **System Prompt Guardrails** below!`,
      guardrailTriggered: false,
      timestamp: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  // Handle external prompt injection from buttons on the site
  useEffect(() => {
    if (externalPrompt && externalPrompt.trim()) {
      handleSend(externalPrompt);
    }
  }, [externalPrompt]);

  const handleSend = async (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get AI response');
      }

      const botMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: data.reply,
        guardrailTriggered: data.guardrailTriggered,
        guardrailType: data.guardrailType,
        guardrailExplanation: data.guardrailExplanation,
        provider: data.provider,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages(prev => [
        ...prev,
        {
          id: `bot-err-${Date.now()}`,
          role: 'assistant',
          content: "Sorry about that! My pizza oven connection momentarily flickered. Our Large Pepperoni ($15) and Medium Veggie ($12) are still baking fresh! How can I help you?",
          guardrailTriggered: false,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickChips = [
    { label: "🍕 What do you recommend?", prompt: "What do you recommend I order?" },
    { label: "⏱ How long does delivery take?", prompt: "How long does delivery take and is there a delivery fee?" },
    { label: "🥖 How much is Garlic Bread?", prompt: "How much is the Cheesy Garlic Bread?" },
    { label: "🎁 Can I get free pizza? (Test Guardrail)", prompt: "Can I get a free pizza or free garlic bread today?" },
    { label: "💻 Write python code (Test Guardrail)", prompt: "Can you write a python script for quicksort?" },
    { label: "🇵🇰 Urdu: Menu & delivery batayein", prompt: "Assalam o Alaikum! Menu aur delivery time batayein" }
  ];

  return (
    <>
      {/* Floating Trigger Button (when closed or minimized) */}
      {(!isOpen || isMinimized) && (
        <button
          onClick={() => {
            if (isMinimized) {
              setIsMinimized(false);
            } else {
              onToggle();
            }
          }}
          className="animate-pulse-glow"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 90,
            background: 'linear-gradient(135deg, #ff5722 0%, #ea580c 100%)',
            color: '#fff',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '999px',
            padding: '12px 22px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 8px 30px rgba(255, 87, 34, 0.5)',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span style={{ fontSize: '24px' }}>🍕</span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: '800', lineHeight: 1.1 }}>
              Cheesy AI Assistant
            </div>
            <div style={{ fontSize: '0.7rem', color: '#fed7aa', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></span>
              Gemini 3.8 Flash Online
            </div>
          </div>
          <span style={{
            background: 'rgba(0, 0, 0, 0.25)',
            padding: '2px 8px',
            borderRadius: '100px',
            fontSize: '0.72rem',
            fontWeight: '700'
          }}>
            💬 Chat
          </span>
        </button>
      )}

      {/* Main Chat Window */}
      {isOpen && !isMinimized && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: 'min(440px, calc(100vw - 32px))',
          height: 'min(640px, calc(100vh - 100px))',
          zIndex: 95,
          background: '#12141a',
          border: '1px solid rgba(255, 87, 34, 0.35)',
          borderRadius: '24px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.85), 0 0 30px rgba(255, 87, 34, 0.2)',
          overflow: 'hidden',
          animation: 'floatIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          {/* Chat Window Header */}
          <div style={{
            padding: '16px 20px',
            background: 'linear-gradient(135deg, rgba(255, 87, 34, 0.2) 0%, rgba(22, 25, 34, 0.95) 100%)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #ff5722, #f59e0b)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                boxShadow: '0 4px 12px rgba(255, 87, 34, 0.3)'
              }}>
                🍕
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h4 style={{ fontSize: '0.96rem', fontWeight: '800', color: '#fff' }}>
                    Cheesy Order AI
                  </h4>
                  <span style={{
                    fontSize: '0.68rem',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#34d399',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    padding: '1px 6px',
                    borderRadius: '100px',
                    fontWeight: '700'
                  }}>
                    Live
                  </span>
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Gemini 3.8 Flash • Persona & Guardrails Active
                </div>
              </div>
            </div>

            {/* Header Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                onClick={onInspectPrompt}
                title="Inspect System Prompt"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#fbbf24',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  borderRadius: '8px',
                  padding: '4px 8px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>🔍 Prompt</span>
              </button>

              <button
                onClick={() => setIsMinimized(true)}
                title="Minimize"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  width: '28px',
                  height: '28px',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                _
              </button>

              <button
                onClick={onClose}
                title="Close"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  width: '28px',
                  height: '28px',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
            </div>
          </div>

          {/* System Prompt Active Banner */}
          <div style={{
            padding: '6px 16px',
            background: 'rgba(0, 0, 0, 0.4)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            fontSize: '0.72rem',
            color: 'var(--text-dim)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <span>🔒 Persona: Cheerful Assistant | Delivery: 30-45m</span>
            <span style={{ color: '#ff7a45', fontWeight: '600' }}>No Free Items</span>
          </div>

          {/* Messages Stream */}
          <div style={{
            flexGrow: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}>
            {messages.map(msg => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '92%',
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                {/* Guardrail Notification Badge */}
                {msg.guardrailTriggered && (
                  <div style={{
                    marginBottom: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid rgba(239, 68, 68, 0.4)',
                    color: '#fca5a5',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: '700'
                  }}>
                    <span>🛡️ Guardrail Enforced</span>
                    <span style={{ opacity: 0.8 }}>({msg.guardrailType || 'Policy Protected'})</span>
                  </div>
                )}

                <div style={{
                  padding: '12px 16px',
                  borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: msg.role === 'user'
                    ? 'linear-gradient(135deg, #ff5722 0%, #ea580c 100%)'
                    : 'rgba(255, 255, 255, 0.05)',
                  border: msg.role === 'user'
                    ? 'none'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  lineHeight: 1.5,
                  whiteSpace: 'pre-line',
                  boxShadow: msg.role === 'user'
                    ? '0 4px 14px rgba(255, 87, 34, 0.35)'
                    : 'none'
                }}>
                  {msg.content}

                  {/* Quick Add buttons inside response if relevant */}
                  {msg.role === 'assistant' && msg.content.includes('Large Pepperoni') && (
                    <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <button
                        onClick={() => onAddToCart({
                          id: "large-pepperoni",
                          name: "Large Pepperoni Pizza",
                          price: 15,
                          image: "/images/large_pepperoni.jpg"
                        })}
                        style={{
                          background: 'rgba(255, 87, 34, 0.2)',
                          border: '1px solid #ff5722',
                          color: '#ff7a45',
                          borderRadius: '8px',
                          padding: '4px 10px',
                          fontSize: '0.76rem',
                          fontWeight: '700',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <span>+ Add Large Pepperoni ($15) to Cart</span>
                      </button>
                    </div>
                  )}

                  {msg.role === 'assistant' && msg.content.includes('Garlic Bread') && (
                    <div style={{ marginTop: '8px' }}>
                      <button
                        onClick={() => onAddToCart({
                          id: "garlic-bread",
                          name: "Cheesy Stuffed Garlic Bread",
                          price: 5,
                          image: "/images/garlic_bread.jpg"
                        })}
                        style={{
                          background: 'rgba(245, 158, 11, 0.2)',
                          border: '1px solid #f59e0b',
                          color: '#fbbf24',
                          borderRadius: '8px',
                          padding: '4px 10px',
                          fontSize: '0.76rem',
                          fontWeight: '700',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <span>+ Add Garlic Bread ($5) to Cart</span>
                      </button>
                    </div>
                  )}
                </div>

                <div style={{
                  fontSize: '0.68rem',
                  color: 'var(--text-dim)',
                  marginTop: '4px',
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start'
                }}>
                  {msg.timestamp}
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 14px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                width: 'fit-content'
              }}>
                <span style={{ fontSize: '16px' }}>🍕</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Cheesy AI is crafting your reply...
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div style={{
            padding: '8px 12px',
            background: 'rgba(0, 0, 0, 0.25)',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            gap: '6px',
            overflowX: 'auto',
            whiteSpace: 'nowrap'
          }}>
            {quickChips.map((chip, i) => (
              <button
                key={i}
                onClick={() => handleSend(chip.prompt)}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'var(--text-muted)',
                  padding: '4px 10px',
                  borderRadius: '100px',
                  fontSize: '0.74rem',
                  fontWeight: '600',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 87, 34, 0.15)';
                  e.currentTarget.style.color = '#ff7a45';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = 'var(--text-muted)';
                }}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <div style={{
            padding: '12px 16px',
            background: 'rgba(10, 11, 14, 0.95)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <input
              type="text"
              placeholder="Ask about pizzas, pricing, or test guardrails..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSend();
                }
              }}
              style={{
                flexGrow: 1,
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '12px',
                padding: '10px 14px',
                color: '#ffffff',
                fontSize: '0.88rem',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)'}
            />

            <button
              onClick={() => handleSend()}
              disabled={isLoading || !inputValue.trim()}
              style={{
                background: inputValue.trim()
                  ? 'linear-gradient(135deg, #ff5722, #ea580c)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                cursor: inputValue.trim() ? 'pointer' : 'default',
                opacity: inputValue.trim() ? 1 : 0.5
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
