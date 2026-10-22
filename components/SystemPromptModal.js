'use client';

import React, { useState } from 'react';
import { SYSTEM_PROMPT_CONFIG, FULL_SYSTEM_PROMPT } from '@/lib/pizzaData';

export default function SystemPromptModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('breakdown'); // 'breakdown' | 'raw' | 'diagram'
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(FULL_SYSTEM_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 120,
      background: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="glass-panel" style={{
        maxWidth: '750px',
        width: '100%',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '24px',
        border: '1px solid rgba(255, 87, 34, 0.4)',
        background: '#12141a',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 87, 34, 0.25)',
        overflow: 'hidden'
      }}>
        {/* Modal Header */}
        <div style={{
          padding: '24px 28px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px' }}>🔍</span>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', fontWeight: '800' }}>
                System Prompt Inspector
              </h3>
              <span className="badge-gemini">Gemini 3.8 Flash</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              The hidden instructions given to the AI that dictate Persona, Store Info, and Strict Guardrails.
            </p>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              width: '34px',
              height: '34px',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            ✕
          </button>
        </div>

        {/* Tab Switcher */}
        <div style={{
          display: 'flex',
          gap: '8px',
          padding: '12px 28px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          background: 'rgba(0, 0, 0, 0.2)'
        }}>
          <button
            onClick={() => setActiveTab('breakdown')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              background: activeTab === 'breakdown' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)',
              color: '#fff',
              fontSize: '0.84rem',
              fontWeight: '600'
            }}
          >
            1. 3-Pillar Breakdown
          </button>
          <button
            onClick={() => setActiveTab('raw')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              background: activeTab === 'raw' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)',
              color: '#fff',
              fontSize: '0.84rem',
              fontWeight: '600'
            }}
          >
            2. Raw System Prompt Text
          </button>
          <button
            onClick={() => setActiveTab('diagram')}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              background: activeTab === 'diagram' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)',
              color: '#fff',
              fontSize: '0.84rem',
              fontWeight: '600'
            }}
          >
            3. Flow & Architecture
          </button>
        </div>

        {/* Modal Body */}
        <div style={{
          padding: '24px 28px',
          overflowY: 'auto',
          flexGrow: 1
        }}>
          {activeTab === 'breakdown' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Pillar 1: Persona */}
              <div style={{
                background: 'rgba(245, 158, 11, 0.08)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                borderRadius: '16px',
                padding: '18px 22px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '20px' }}>🎭</span>
                  <h4 style={{ color: '#fbbf24', fontSize: '1.05rem', fontWeight: '700' }}>
                    Pillar 1: Persona & Role
                  </h4>
                  <span className="badge-store-info">Behavior Control</span>
                </div>
                <p style={{ color: '#e2e8f0', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {SYSTEM_PROMPT_CONFIG.role}
                </p>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                  • Speaks fluent English, Urdu, and Roman Urdu • Always polite and appetizing • Recommends favorites.
                </div>
              </div>

              {/* Pillar 2: Store Info */}
              <div style={{
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                borderRadius: '16px',
                padding: '18px 22px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '20px' }}>📋</span>
                  <h4 style={{ color: '#34d399', fontSize: '1.05rem', fontWeight: '700' }}>
                    Pillar 2: Store Info & Accurate Menu
                  </h4>
                  <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#6ee7b7', padding: '3px 8px', borderRadius: '4px', fontSize: '0.74rem', fontWeight: '700' }}>
                    Grounded Knowledge
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.88rem', color: '#e2e8f0' }}>
                  <div>• 🍕 <strong>Large Pepperoni:</strong> $15 (8 slices, crispy cup-and-char pepperoni curls)</div>
                  <div>• 🥦 <strong>Medium Veggie:</strong> $12 (6 slices, fresh bell peppers, olives, mushrooms)</div>
                  <div>• 🥖 <strong>Garlic Bread:</strong> $5 (Artisan baguette with garlic butter & cheese pull)</div>
                  <div>• 🛵 <strong>Delivery Time:</strong> 30-45 minutes guaranteed fresh & hot</div>
                  <div>• ⏰ <strong>Hours:</strong> 11:00 AM - 2:00 AM (Daily)</div>
                </div>
              </div>

              {/* Pillar 3: Strict Guardrails */}
              <div style={{
                background: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                borderRadius: '16px',
                padding: '18px 22px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '20px' }}>🛡️</span>
                  <h4 style={{ color: '#f87171', fontSize: '1.05rem', fontWeight: '700' }}>
                    Pillar 3: Strict Guardrails
                  </h4>
                  <span className="badge-guardrail">Safety & Policy</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#e2e8f0' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#ef4444', fontWeight: 'bold' }}>✕ Guardrail 1:</span>
                    <span><strong>NEVER offer free items</strong> under any circumstances. If requested, politely explain artisan ingredient costs and recommend $5 Garlic Bread or Mega Combos.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#ef4444', fontWeight: 'bold' }}>✕ Guardrail 2:</span>
                    <span><strong>ONLY answer food and delivery questions.</strong> Deflect out-of-scope queries (e.g. math, coding, politics) gracefully back to pizza.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'raw' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Exact string passed to Google Gemini `systemInstruction`:
                </span>
                <button
                  onClick={handleCopy}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    padding: '4px 12px',
                    fontSize: '0.78rem',
                    fontWeight: '600'
                  }}
                >
                  {copied ? '✓ Copied!' : '📋 Copy Prompt'}
                </button>
              </div>

              <pre style={{
                background: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '18px',
                color: '#cbd5e1',
                fontSize: '0.82rem',
                lineHeight: 1.6,
                whiteSpace: 'pre-wrap',
                fontFamily: 'monospace'
              }}>
                {FULL_SYSTEM_PROMPT}
              </pre>
            </div>
          )}

          {activeTab === 'diagram' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '20px'
              }}>
                <h4 style={{ color: '#fff', marginBottom: '12px' }}>How Gemini Processes the Conversation</h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
                  <div style={{ background: 'rgba(255, 87, 34, 0.1)', padding: '10px 14px', borderRadius: '8px', borderLeft: '4px solid #ff5722' }}>
                    <strong style={{ color: '#ff7a45' }}>1. System Instruction Injection:</strong> The hidden prompt (Role + Store Info + Guardrails) is transmitted in the top-level API parameter.
                  </div>
                  <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '10px 14px', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                    <strong style={{ color: '#93c5fd' }}>2. User Message Received:</strong> Customer asks questions (e.g., &quot;How much is Large Pepperoni?&quot; or &quot;Can I get free food?&quot;).
                  </div>
                  <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '10px 14px', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                    <strong style={{ color: '#6ee7b7' }}>3. Gemini 3.8 Flash Synthesis:</strong> Evaluates user message against guardrails. If free food requested, guardrail activates and refutes politely. If delivery asked, quotes 30-45 minutes.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '16px 28px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(10, 11, 14, 0.6)',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <button
            onClick={onClose}
            style={{
              background: 'linear-gradient(135deg, #ff5722, #ea580c)',
              color: '#fff',
              padding: '10px 24px',
              borderRadius: '10px',
              fontSize: '0.88rem',
              fontWeight: '700'
            }}
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
