'use client';

import React from 'react';
import { STORE_INFO } from '@/lib/pizzaData';

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Hamza Sheikh",
      location: "Downtown / Clifton",
      stars: 5,
      date: "Yesterday",
      comment: "The Large Pepperoni ($15) is unreal! The cup-and-char pepperoni has the perfect crisp, and the delivery arrived in exactly 32 minutes piping hot. Also asked the AI bot about dipping sauces and it was so helpful!",
      pizza: "Large Pepperoni Pizza"
    },
    {
      name: "Sarah Jenkins",
      location: "Central Heights",
      stars: 5,
      date: "3 days ago",
      comment: "I usually struggle to find good veggie pizzas, but the Medium Veggie ($12) is packed with fresh crunch and authentic mozzarella. And the Cheesy Garlic Bread is pure heaven with that cheese pull!",
      pizza: "Medium Veggie + Garlic Bread"
    },
    {
      name: "Ali Raza",
      location: "Bahria Town / Express Hub",
      stars: 5,
      date: "Last week",
      comment: "The website and AI chatbot look and feel super modern. I tried testing if it would give me free pizza like people do on ChatGPT, but the guardrail politely declined and told me to get the combo instead haha! Ordered the Mega Feast combo and it fed the whole family.",
      pizza: "Mega Crust Feast Combo"
    }
  ];

  return (
    <section className="section" style={{
      background: 'rgba(10, 11, 14, 0.6)',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 50px auto' }}>
          <div className="section-tag">
            <span>Verified Customer Reviews</span>
          </div>
          <h2 className="section-title">
            Loved by Pizza Enthusiasts Across the City
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Rated <strong>{STORE_INFO.rating} / 5.0</strong> based on {STORE_INFO.reviewCount} customer orders.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="glass-panel"
              style={{
                padding: '28px',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px'
              }}
            >
              <div>
                {/* Stars & Date */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ color: '#fbbf24', fontSize: '1rem', letterSpacing: '2px' }}>
                    {'★'.repeat(rev.stars)}
                  </div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                    {rev.date}
                  </span>
                </div>

                <p style={{ fontSize: '0.92rem', color: '#e2e8f0', lineHeight: 1.6, marginBottom: '16px' }}>
                  &quot;{rev.comment}&quot;
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '14px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.92rem', color: '#fff' }}>
                    {rev.name}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                    📍 {rev.location}
                  </div>
                </div>

                <span style={{
                  fontSize: '0.72rem',
                  background: 'rgba(255, 87, 34, 0.12)',
                  color: '#ff7a45',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  fontWeight: '600'
                }}>
                  {rev.pizza}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
