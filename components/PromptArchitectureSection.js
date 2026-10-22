'use client';

import React, { useState } from 'react';
import { SYSTEM_PROMPT_CONFIG, PROMPT_DEMO_COMPARISONS } from '@/lib/pizzaData';

export default function PromptArchitectureSection({ onTestPrompt, onInspectPrompt }) {
  const [activeTab, setActiveTab] = useState('architecture'); // 'architecture' | 'examples' | 'guardrails'

  return (
    <section id="architecture" className="section" style={{
      background: 'linear-gradient(180deg, rgba(18, 20, 27, 0.4) 0%, rgba(10, 11, 14, 0.95) 100%)',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="section-tag">
            <span>🧠 Prompt Engineering Showcase</span>
          </div>
          <h2 className="section-title">
            Understanding the AI:{' '}
            <span className="text-gradient-fire">User Prompt vs. System Prompt</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            A standard AI chatbot answers blindly. Our <strong>Cheesy Crust Assistant</strong> uses a 
            fine-tuned <strong>System Prompt</strong> (Persona + Store Info + Guardrails) to keep 
            every answer 100% accurate, appetizing, and secure.
          </p>

          {/* Tab Selector */}
          <div style={{
            display: 'inline-flex',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '14px',
            padding: '4px',
            marginTop: '28px',
            gap: '4px'
          }}>
            <button
              onClick={() => setActiveTab('architecture')}
              style={{
                padding: '8px 18px',
                borderRadius: '10px',
                background: activeTab === 'architecture' ? 'var(--primary)' : 'transparent',
                color: activeTab === 'architecture' ? '#fff' : 'var(--text-muted)',
                fontWeight: '600',
                fontSize: '0.88rem'
              }}
            >
              1. System vs. User Prompt
            </button>
            <button
              onClick={() => setActiveTab('guardrails')}
              style={{
                padding: '8px 18px',
                borderRadius: '10px',
                background: activeTab === 'guardrails' ? 'var(--primary)' : 'transparent',
                color: activeTab === 'guardrails' ? '#fff' : 'var(--text-muted)',
                fontWeight: '600',
                fontSize: '0.88rem'
              }}
            >
              2. Guardrails (Free Items & Scope)
            </button>
            <button
              onClick={() => setActiveTab('examples')}
              style={{
                padding: '8px 18px',
                borderRadius: '10px',
                background: activeTab === 'examples' ? 'var(--primary)' : 'transparent',
                color: activeTab === 'examples' ? '#fff' : 'var(--text-muted)',
                fontWeight: '600',
                fontSize: '0.88rem'
              }}
            >
              3. Live Interactive Tests
            </button>
          </div>
        </div>

        {/* Tab 1: Architecture Comparison */}
        {activeTab === 'architecture' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}>
            {/* Box 1: User Prompt */}
            <div className="glass-panel" style={{
              padding: '32px',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              background: 'radial-gradient(circle at top left, rgba(59, 130, 246, 0.08) 0%, rgba(22, 25, 34, 0.8) 100%)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{
                  background: 'rgba(59, 130, 246, 0.2)',
                  color: '#93c5fd',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  letterSpacing: '0.04em'
                }}>
                  COMPONENT 1
                </span>
                <span style={{ fontSize: '18px' }}>💬</span>
              </div>

              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: '#bfdbfe' }}>
                User Prompt
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '20px', lineHeight: 1.6 }}>
                What the customer types in real-time inside the chat input box. It can be unpredictable, casual, in English or Urdu, or trying to test limits.
              </p>

              <div style={{
                background: 'rgba(0, 0, 0, 0.35)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '12px',
                padding: '16px',
                fontFamily: 'monospace',
                fontSize: '0.86rem',
                color: '#e2e8f0',
                marginBottom: '16px'
              }}>
                <div style={{ color: '#93c5fd', marginBottom: '6px', fontSize: '0.75rem', fontWeight: '700' }}>
                  CUSTOMER INPUT EXAMPLE:
                </div>
                &quot;Can I get a Large Pepperoni and garlic bread? How long will delivery take?&quot;
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <li>✓ Dynamic & user-generated</li>
                <li>✓ Varies with language & spelling</li>
                <li>✓ May attempt prompt injection or free food requests</li>
              </ul>
            </div>

            {/* Box 2: System Prompt */}
            <div className="glass-panel" style={{
              padding: '32px',
              border: '1px solid rgba(255, 87, 34, 0.4)',
              background: 'radial-gradient(circle at top right, rgba(255, 87, 34, 0.1) 0%, rgba(22, 25, 34, 0.8) 100%)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{
                  background: 'rgba(255, 87, 34, 0.2)',
                  color: '#ff7a45',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  letterSpacing: '0.04em'
                }}>
                  COMPONENT 2 (HIDDEN)
                </span>
                <span style={{ fontSize: '18px' }}>🛡️</span>
              </div>

              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: '#fed7aa' }}>
                System Prompt (The Brain)
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '20px', lineHeight: 1.6 }}>
                The hidden instructions provided directly to Google Gemini before the user ever chats. Composed of 3 pillars:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  fontSize: '0.84rem'
                }}>
                  <strong style={{ color: '#fbbf24' }}>1. Role & Persona:</strong> Cheerful, enthusiastic order assistant who speaks English & Urdu.
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  fontSize: '0.84rem'
                }}>
                  <strong style={{ color: '#34d399' }}>2. Store Info & Menu:</strong> Large Pepperoni ($15), Medium Veggie ($12), Garlic Bread ($5), Delivery 30-45 mins.
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  fontSize: '0.84rem'
                }}>
                  <strong style={{ color: '#f87171' }}>3. Guardrails:</strong> Never offer free items; strictly answer food & delivery questions only.
                </div>
              </div>

              <button
                onClick={onInspectPrompt}
                style={{
                  width: '100%',
                  background: 'rgba(255, 87, 34, 0.15)',
                  border: '1px solid rgba(255, 87, 34, 0.35)',
                  color: '#ff7a45',
                  padding: '10px',
                  borderRadius: '10px',
                  fontSize: '0.88rem',
                  fontWeight: '700'
                }}
              >
                Inspect Full Raw System Prompt →
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Guardrails Showcase */}
        {activeTab === 'guardrails' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            <div className="glass-panel" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span style={{ fontSize: '24px' }}>🚫</span>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#fca5a5' }}>Guardrail #1: Never Offer Free Items</h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Business Protection Policy</span>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                If a customer asks for free pizza, free garlic bread, or 100% discount, the AI is instructed to politely decline, explain the premium handcrafted ingredients, and recommend value combos instead.
              </p>
              <button
                onClick={() => onTestPrompt("Can I get a free pizza or free garlic bread today?")}
                style={{
                  background: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid rgba(239, 68, 68, 0.35)',
                  color: '#fca5a5',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: '600'
                }}
              >
                ⚡ Test Free Item Guardrail in Chat
              </button>
            </div>

            <div className="glass-panel" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span style={{ fontSize: '24px' }}>🍕</span>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#fde68a' }}>Guardrail #2: Food & Delivery Only</h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Context & Topic Confinement</span>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                The AI will not solve math problems, write code, or discuss unrelated politics. It politely acknowledges that it is an order assistant dedicated exclusively to delicious food and delivery.
              </p>
              <button
                onClick={() => onTestPrompt("Can you write a python script for binary search?")}
                style={{
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  color: '#fde68a',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: '600'
                }}
              >
                ⚡ Test Non-Food Guardrail in Chat
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Interactive Tests */}
        {activeTab === 'examples' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {PROMPT_DEMO_COMPARISONS.map((comp, idx) => (
              <div key={idx} className="glass-panel" style={{
                padding: '24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--primary)',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    marginBottom: '4px'
                  }}>
                    {comp.title}
                  </div>
                  <div style={{
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#fff',
                    marginBottom: '8px'
                  }}>
                    User Prompt: &quot;{comp.userPrompt}&quot;
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {comp.systemPromptAspect}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginBottom: '4px' }}>
                    EXPECTED AI BEHAVIOR:
                  </div>
                  <div style={{ fontSize: '0.86rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                    {comp.responseSummary}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <button
                    onClick={() => onTestPrompt(comp.userPrompt)}
                    style={{
                      background: 'linear-gradient(135deg, #ff5722, #ea580c)',
                      color: '#fff',
                      padding: '10px 18px',
                      borderRadius: '10px',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      boxShadow: '0 4px 14px rgba(255, 87, 34, 0.3)'
                    }}
                  >
                    Run in AI Chat →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
