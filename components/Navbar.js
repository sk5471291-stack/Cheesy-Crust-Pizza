'use client';

import React from 'react';
import { STORE_INFO } from '@/lib/pizzaData';

export default function Navbar({ cartCount, onOpenCart, onOpenChat, onInspectPrompt }) {
  return (
    <>
      {/* Top Announcement Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #ff5722 0%, #d97706 50%, #e11d48 100%)',
        color: '#ffffff',
        padding: '8px 16px',
        fontSize: '0.82rem',
        fontWeight: '600',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        letterSpacing: '0.02em',
        zIndex: 60,
        position: 'relative'
      }}>
        <span>🛵 Hot & Fresh Delivery in <strong>{STORE_INFO.deliveryTime}</strong></span>
        <span style={{ opacity: 0.6 }}>•</span>
        <span>🔥 Free Delivery over $25</span>
        <span style={{ opacity: 0.6 }}>•</span>
        <button
          onClick={onInspectPrompt}
          style={{
            background: 'rgba(0, 0, 0, 0.25)',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '20px',
            padding: '2px 10px',
            fontSize: '0.75rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          🔍 View AI System Prompt
        </button>
      </div>

      {/* Main Navbar */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(10, 11, 14, 0.85)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px'
        }}>
          {/* Brand Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #ff5722, #f59e0b)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(255, 87, 34, 0.4)',
              fontSize: '24px'
            }}>
              🍕
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: '900',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span>CHEESY</span>
                <span className="text-gradient-fire">CRUST</span>
              </div>
              <div style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: '600'
              }}>
                Artisanal Woodfired Pizzeria
              </div>
            </div>
          </a>

          {/* Nav Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            fontSize: '0.92rem',
            fontWeight: '500'
          }} className="nav-links">
            <a href="#menu" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
               onMouseEnter={(e) => e.target.style.color = '#fff'}
               onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
              Menu
            </a>
            <a href="#architecture" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
               onMouseEnter={(e) => e.target.style.color = '#fff'}
               onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
              Prompt Architecture
            </a>
            <a href="#store-info" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
               onMouseEnter={(e) => e.target.style.color = '#fff'}
               onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
              Store & Delivery
            </a>
            <a href="#story" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
               onMouseEnter={(e) => e.target.style.color = '#fff'}
               onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
              Our Kitchen
            </a>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* AI Assistant Button */}
            <button
              onClick={onOpenChat}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 16px',
                borderRadius: '12px',
                background: 'rgba(255, 87, 34, 0.12)',
                border: '1px solid rgba(255, 87, 34, 0.35)',
                color: '#ff7a45',
                fontSize: '0.88rem',
                fontWeight: '600'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 87, 34, 0.22)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 87, 34, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(255, 87, 34, 0.35)';
              }}
            >
              <span style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 8px #10b981'
              }} />
              <span>Ask AI Assistant</span>
              <span style={{ fontSize: '12px', background: 'rgba(255, 87, 34, 0.2)', padding: '2px 6px', borderRadius: '4px' }}>Gemini</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '9px 18px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #ff5722, #ea580c)',
                color: '#ffffff',
                fontSize: '0.88rem',
                fontWeight: '700',
                boxShadow: '0 4px 18px rgba(255, 87, 34, 0.35)',
                position: 'relative'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <span>🛒</span>
              <span>Cart</span>
              <span style={{
                background: '#ffffff',
                color: '#ff5722',
                borderRadius: '999px',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                fontWeight: '800'
              }}>
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
