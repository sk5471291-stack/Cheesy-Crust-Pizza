'use client';

import React from 'react';
import { STORE_INFO } from '@/lib/pizzaData';

export default function Footer({ onInspectPrompt, onOpenChat }) {
  return (
    <footer style={{
      background: '#090a0d',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '70px 0 30px 0',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Column 1: Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '28px' }}>🍕</span>
              <span style={{
                fontSize: '1.4rem',
                fontWeight: '900',
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-heading)'
              }}>
                CHEESY <span className="text-gradient-fire">CRUST</span>
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              Artisanal woodfired pizzas baked at 800°F with 100% whole milk Fior di Latte mozzarella. 
              Delivered hot and fresh in 30–45 minutes.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span className="badge-store-info">Delivery: 30-45m</span>
              <span className="badge-gemini">Gemini 3.8 Flash</span>
            </div>
          </div>

          {/* Column 2: Core Menu */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '16px', fontWeight: '700' }}>
              Core Menu & Pricing
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <li>🍕 <strong>Large Pepperoni:</strong> $15 (8 slices)</li>
              <li>🥦 <strong>Medium Veggie:</strong> $12 (6 slices)</li>
              <li>🥖 <strong>Cheesy Garlic Bread:</strong> $5</li>
              <li>🍗 <strong>Smoky BBQ Chicken:</strong> $17</li>
              <li>🍫 <strong>Molten Lava Cake:</strong> $6</li>
              <li>🌟 <strong>Mega Feast Combo:</strong> $28</li>
            </ul>
          </div>

          {/* Column 3: Hours & Location */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '16px', fontWeight: '700' }}>
              Store Hours & Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <div>⏰ <strong>Hours:</strong> {STORE_INFO.hours}</div>
              <div>📍 <strong>Address:</strong> {STORE_INFO.address}</div>
              <div>📞 <strong>Phone:</strong> {STORE_INFO.phone}</div>
              <div>🛵 <strong>Delivery Time:</strong> Guaranteed in {STORE_INFO.deliveryTime}</div>
            </div>
          </div>

          {/* Column 4: AI Prompt Engineering */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '16px', fontWeight: '700' }}>
              AI Assistant Architecture
            </h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
              Powered by <strong>Google Gemini 3.8 Flash</strong> with strict System Prompt governance:
              Persona, Grounded Store Info, and Security Guardrails.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={onInspectPrompt}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  color: '#fbbf24',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                🔍 Inspect System Prompt
              </button>
              <button
                onClick={onOpenChat}
                style={{
                  background: 'rgba(255, 87, 34, 0.12)',
                  border: '1px solid rgba(255, 87, 34, 0.3)',
                  color: '#ff7a45',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                💬 Open AI Assistant
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '0.82rem',
          color: 'var(--text-dim)'
        }}>
          <div>
            © 2026 {STORE_INFO.name}. All Rights Reserved. Crafted with Next.js & Google Gemini.
          </div>
          <div style={{ display: 'flex', gap: '18px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Food Safety Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
