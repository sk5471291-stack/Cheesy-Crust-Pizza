'use client';

import React from 'react';
import { STORE_INFO } from '@/lib/pizzaData';

export default function StoreInfoSection({ onAskAIQuestion }) {
  return (
    <section id="store-info" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px auto' }}>
          <div className="section-tag">
            <span>Store Info & Delivery Guarantee</span>
          </div>
          <h2 className="section-title">
            Hot to Your Door in <span className="text-gradient-fire">{STORE_INFO.deliveryTime}</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            We know pizza tastes best straight out of the fire. That&apos;s why our thermal delivery bags 
            lock in temperature and crispiness, guaranteed fresh in 30 to 45 minutes.
          </p>
        </div>

        {/* 2-Column Info & Kitchen Story */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '50px'
        }}>
          {/* Kitchen Ambiance Image Card */}
          <div style={{
            position: 'relative',
            borderRadius: '26px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
          }}>
            <img
              src="/images/artisan_oven.jpg"
              alt="Artisanal Woodfired Stone Oven"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(10, 11, 14, 0.9) 0%, transparent 60%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '28px'
            }}>
              <span style={{
                color: '#fbbf24',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                800°F Italian Stone Oven
              </span>
              <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: '800' }}>
                Handcrafted Crusts Since 2018
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                Every pie is baked over authentic seasoned oak firewood for that distinctive blistered crust and smoky aroma.
              </p>
            </div>
          </div>

          {/* Detailed Info Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
            {/* Card 1: Delivery Time */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>🛵</div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '6px', color: '#ff7a45' }}>
                Delivery Guarantee
              </h4>
              <p style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>
                {STORE_INFO.deliveryTime}
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Guaranteed piping hot in insulated heat-trap bags. Delivery fee $2.99 (Free over $25).
              </p>
            </div>

            {/* Card 2: Operating Hours */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>⏰</div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '6px', color: '#fbbf24' }}>
                Store Hours
              </h4>
              <p style={{ fontSize: '1.1rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>
                11:00 AM – 2:00 AM
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Open 7 days a week, including late-night cravings and weekend game nights.
              </p>
            </div>

            {/* Card 3: Location */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>📍</div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '6px', color: '#34d399' }}>
                Our Locations
              </h4>
              <p style={{ fontSize: '0.95rem', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>
                42 Artisan Crust Blvd
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Downtown Central & Clifton Block 4 Express Kitchen. Dine-in, pickup, and delivery.
              </p>
            </div>

            {/* Card 4: AI Order Support */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>🤖</div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '6px', color: '#818cf8' }}>
                AI Order Assistant
              </h4>
              <p style={{ fontSize: '0.95rem', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>
                Gemini 3.8 Flash
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                Instant answers to menu inquiries, dietary questions, and delivery updates.
              </p>
              <button
                onClick={() => onAskAIQuestion("What are your store hours and delivery policy?")}
                style={{
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.35)',
                  color: '#c7d2fe',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: '600'
                }}
              >
                Ask AI Assistant →
              </button>
            </div>
          </div>
        </div>

        {/* Urdu / Bilingual Friendly Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255, 87, 34, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)',
          border: '1px solid rgba(255, 87, 34, 0.25)',
          borderRadius: '18px',
          padding: '24px 30px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: '700', textTransform: 'uppercase' }}>
              🇵🇰 Customer Support in Urdu & English
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#fff', marginTop: '4px' }}>
              اردو اور رومن اردو میں بھی آرڈر کریں!
            </div>
            <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Hamaara AI Assistant Urdu mein bhi sawaalaat aur delivery time ka jawab deta hai.
            </div>
          </div>

          <button
            onClick={() => onAskAIQuestion("Assalam o Alaikum! Menu aur delivery ki detail batayein")}
            style={{
              background: 'linear-gradient(135deg, #ff5722, #ea580c)',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '10px',
              fontSize: '0.88rem',
              fontWeight: '700',
              boxShadow: '0 4px 14px rgba(255, 87, 34, 0.4)'
            }}
          >
            Urdu Mein Chat Karein 💬
          </button>
        </div>
      </div>
    </section>
  );
}
