'use client';

import React, { useState } from 'react';
import { MENU_ITEMS } from '@/lib/pizzaData';

export default function MenuSection({ onAddToCart, onAskAI }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'pizzas', label: '🍕 Artisan Pizzas' },
    { id: 'sides', label: '🥖 Cheesy Sides' },
    { id: 'desserts', label: '🍫 Desserts' },
    { id: 'combos', label: '🌟 Value Combos' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto' }}>
          <div className="section-tag">
            <span>Our Handcrafted Menu</span>
          </div>
          <h2 className="section-title">
            Artisanal Slices & <span className="text-gradient-fire">Cheesy Indulgence</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Every pizza begins with 48-hour slow fermented dough, San Marzano style marinara, 
            and 100% whole milk Fior di Latte mozzarella. Baked at 800°F in our stone oven.
          </p>

          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '30px'
          }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '12px',
                  background: selectedCategory === cat.id
                    ? 'linear-gradient(135deg, #ff5722, #ea580c)'
                    : 'rgba(255, 255, 255, 0.05)',
                  border: selectedCategory === cat.id
                    ? '1px solid #ff7043'
                    : '1px solid rgba(255, 255, 255, 0.09)',
                  color: selectedCategory === cat.id ? '#ffffff' : 'var(--text-muted)',
                  fontSize: '0.9rem',
                  fontWeight: selectedCategory === cat.id ? '700' : '500',
                  boxShadow: selectedCategory === cat.id
                    ? '0 4px 15px rgba(255, 87, 34, 0.4)'
                    : 'none'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '30px'
        }}>
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="glass-panel"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(255, 87, 34, 0.4)';
                e.currentTarget.style.boxShadow = '0 18px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 87, 34, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Image Container */}
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Highlight Badge */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  background: 'rgba(10, 11, 14, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fbbf24',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  fontSize: '0.76rem',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <span>★</span>
                  <span>{item.highlight}</span>
                </div>

                {/* Price Pill */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  background: 'linear-gradient(135deg, #ff5722, #ea580c)',
                  color: '#ffffff',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  fontSize: '1rem',
                  fontWeight: '900',
                  boxShadow: '0 4px 12px rgba(255, 87, 34, 0.4)'
                }}>
                  ${item.price}
                </div>

                {/* Veg / Non-Veg Indicator */}
                <div style={{
                  position: 'absolute',
                  bottom: '14px',
                  right: '14px',
                  background: 'rgba(10, 11, 14, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  border: item.isVeg ? '1px solid #10b981' : '1px solid #ef4444',
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  color: item.isVeg ? '#34d399' : '#f87171'
                }}>
                  {item.isVeg ? '● VEG' : '▲ NON-VEG'}
                </div>
              </div>

              {/* Card Body */}
              <div style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'space-between'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.28rem',
                    marginBottom: '8px',
                    fontWeight: '800',
                    color: '#ffffff'
                  }}>
                    {item.name}
                  </h3>

                  <p style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '16px'
                  }}>
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.74rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: '#cbd5e1',
                          padding: '3px 8px',
                          borderRadius: '6px'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    <span style={{
                      fontSize: '0.74rem',
                      background: 'rgba(245, 158, 11, 0.1)',
                      color: '#fbbf24',
                      padding: '3px 8px',
                      borderRadius: '6px'
                    }}>
                      {item.calories}
                    </span>
                  </div>
                </div>

                {/* Card Actions */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  <button
                    onClick={() => onAddToCart(item)}
                    style={{
                      flex: 2,
                      background: 'linear-gradient(135deg, #ff5722 0%, #ea580c 100%)',
                      color: '#ffffff',
                      padding: '12px 18px',
                      borderRadius: '12px',
                      fontWeight: '700',
                      fontSize: '0.92rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 15px rgba(255, 87, 34, 0.35)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <span>+</span>
                    <span>Add to Order (${item.price})</span>
                  </button>

                  <button
                    onClick={() => onAskAI(item)}
                    title="Ask AI about this item"
                    style={{
                      flex: 1,
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#cbd5e1',
                      padding: '12px 12px',
                      borderRadius: '12px',
                      fontWeight: '600',
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 87, 34, 0.15)';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.color = '#ff7a45';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.color = '#cbd5e1';
                    }}
                  >
                    <span>🤖</span>
                    <span>Ask AI</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
