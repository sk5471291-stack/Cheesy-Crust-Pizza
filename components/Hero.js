'use client';

import React from 'react';
import { STORE_INFO } from '@/lib/pizzaData';

export default function Hero({ onOpenChat, onInspectPrompt, onAddToCart }) {
  return (
    <section style={{
      position: 'relative',
      padding: '70px 0 90px 0',
      overflow: 'hidden'
    }}>
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 87, 34, 0.18) 0%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '50px',
          alignItems: 'center'
        }}>
          {/* Left Hero Column */}
          <div>
            <div className="section-tag" style={{ marginBottom: '20px' }}>
              <span>🔥 Woodfired Artisanal Pizzeria</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              lineHeight: 1.1,
              marginBottom: '20px',
              fontWeight: 900
            }}>
              Melted to Perfection.{' '}
              <span className="text-gradient-fire">Woodfired with Soul.</span>
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              marginBottom: '28px',
              lineHeight: 1.7,
              maxWidth: '540px'
            }}>
              Welcome to <strong>{STORE_INFO.name}</strong>. Enjoy blistered crispy crusts, 
              bubbling whole milk mozzarella, and our signature slow-simmered marinara sauce. 
              Delivered hot to your door in <strong>{STORE_INFO.deliveryTime}</strong>!
            </p>

            {/* Quick Price Cards */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '32px'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '8px 14px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.88rem'
              }}>
                <span style={{ fontSize: '18px' }}>🍕</span>
                <span>Large Pepperoni</span>
                <strong style={{ color: '#ff7a45' }}>$15</strong>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '8px 14px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.88rem'
              }}>
                <span style={{ fontSize: '18px' }}>🥦</span>
                <span>Medium Veggie</span>
                <strong style={{ color: '#10b981' }}>$12</strong>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '8px 14px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.88rem'
              }}>
                <span style={{ fontSize: '18px' }}>🥖</span>
                <span>Garlic Bread</span>
                <strong style={{ color: '#fbbf24' }}>$5</strong>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '36px' }}>
              <a
                href="#menu"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 28px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #ff5722 0%, #ea580c 100%)',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: '700',
                  boxShadow: '0 8px 24px rgba(255, 87, 34, 0.4)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(255, 87, 34, 0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 87, 34, 0.4)';
                }}
              >
                <span>Order Online</span>
                <span>→</span>
              </a>

              <button
                onClick={onOpenChat}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 24px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(255, 87, 34, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                <span>💬 Chat with Pizza AI</span>
                <span style={{
                  fontSize: '0.75rem',
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: '#34d399',
                  padding: '2px 8px',
                  borderRadius: '100px',
                  border: '1px solid rgba(16, 185, 129, 0.4)'
                }}>
                  Gemini 3.8 Flash
                </span>
              </button>

              <button
                onClick={onInspectPrompt}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 20px',
                  borderRadius: '14px',
                  background: 'transparent',
                  border: '1px dashed rgba(245, 158, 11, 0.5)',
                  color: '#fbbf24',
                  fontSize: '0.92rem',
                  fontWeight: '600'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(245, 158, 11, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <span>🔍 Inspect System Prompt</span>
              </button>
            </div>

            {/* Trust Metrics */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24', fontWeight: '800', fontSize: '1.1rem' }}>
                  <span>★</span>
                  <span>{STORE_INFO.rating}</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                  {STORE_INFO.reviewCount} Happy Foodies
                </div>
              </div>

              <div style={{ width: '1px', height: '32px', background: 'rgba(255, 255, 255, 0.1)' }} />

              <div>
                <div style={{ fontWeight: '800', fontSize: '1.1rem', color: '#ff7a45' }}>
                  {STORE_INFO.deliveryTime}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                  Hot Delivery Guarantee
                </div>
              </div>

              <div style={{ width: '1px', height: '32px', background: 'rgba(255, 255, 255, 0.1)' }} />

              <div>
                <div style={{ fontWeight: '800', fontSize: '1.1rem', color: '#10b981' }}>
                  100% Real
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                  Fior di Latte Cheese
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(255, 87, 34, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              transform: 'perspective(1000px) rotateY(-2deg)',
              transition: 'transform 0.4s ease'
            }}>
              <img
                src="/images/hero_pizza.jpg"
                alt="Cheesy Crust Artisanal Pizza"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transform: 'scale(1.02)'
                }}
              />

              {/* Gradient bottom overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10, 11, 14, 0.85) 0%, transparent 60%)',
                pointerEvents: 'none'
              }} />

              {/* Bottom Quick Card */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                background: 'rgba(18, 20, 27, 0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '18px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px'
              }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#ff7a45', fontWeight: '700', textTransform: 'uppercase' }}>
                    Fresh from the Stone Oven
                  </div>
                  <div style={{ fontWeight: '800', fontSize: '1.05rem', color: '#fff' }}>
                    Signature Large Pepperoni
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    8 Slices • Cup-and-char curls • $15
                  </div>
                </div>

                <button
                  onClick={() => onAddToCart({
                    id: "large-pepperoni",
                    name: "Large Pepperoni Pizza",
                    price: 15,
                    image: "/images/large_pepperoni.jpg"
                  })}
                  style={{
                    background: 'linear-gradient(135deg, #ff5722, #ea580c)',
                    color: '#fff',
                    borderRadius: '12px',
                    padding: '10px 16px',
                    fontSize: '0.88rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <span>+</span>
                  <span>Add $15</span>
                </button>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              background: 'rgba(18, 20, 27, 0.95)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              borderRadius: '16px',
              padding: '12px 18px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              zIndex: 2
            }} className="animate-float">
              <span style={{ fontSize: '24px' }}>🧀</span>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#fbbf24', fontWeight: '700', textTransform: 'uppercase' }}>
                  Artisan Quality
                </div>
                <div style={{ fontWeight: '800', fontSize: '0.9rem', color: '#fff' }}>
                  Epic Cheese Pull
                </div>
              </div>
            </div>

            {/* Floating Bottom Left Badge */}
            <div style={{
              position: 'absolute',
              bottom: '110px',
              left: '-20px',
              background: 'rgba(18, 20, 27, 0.95)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              borderRadius: '16px',
              padding: '10px 16px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              zIndex: 2
            }}>
              <span style={{ fontSize: '20px' }}>🛵</span>
              <div>
                <div style={{ fontSize: '0.7rem', color: '#34d399', fontWeight: '700' }}>
                  GUARANTEED
                </div>
                <div style={{ fontWeight: '800', fontSize: '0.85rem', color: '#fff' }}>
                  {STORE_INFO.deliveryTime} Hot
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
