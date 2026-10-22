'use client';

import React, { useState } from 'react';
import { STORE_INFO } from '@/lib/pizzaData';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const isFreeDelivery = subtotal >= STORE_INFO.freeDeliveryThreshold || subtotal === 0;
  const deliveryFee = isFreeDelivery ? 0 : STORE_INFO.deliveryFee;
  const discountAmount = (subtotal * appliedDiscount) / 100;
  const total = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'CHEESY10') {
      setAppliedDiscount(10);
      setPromoError('');
    } else if (promoCode.trim().toUpperCase() === 'CRUST20') {
      setAppliedDiscount(20);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try "CHEESY10"');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'flex-end',
      background: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)'
    }}>
      {/* Click outside to close */}
      <div
        style={{ flexGrow: 1 }}
        onClick={onClose}
      />

      {/* Slide-out Drawer */}
      <div style={{
        width: '100%',
        maxWidth: '460px',
        height: '100%',
        background: '#12141a',
        borderLeft: '1px solid rgba(255, 255, 255, 0.12)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.8)',
        animation: 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        {/* Drawer Header */}
        <div style={{
          padding: '22px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '24px' }}>🛒</span>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>Your Pizza Order</h3>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in cart
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              width: '32px',
              height: '32px',
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

        {/* Delivery Guarantee Pill */}
        <div style={{
          padding: '12px 24px',
          background: 'rgba(255, 87, 34, 0.1)',
          borderBottom: '1px solid rgba(255, 87, 34, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.84rem'
        }}>
          <span style={{ color: '#ff7a45', fontWeight: '600' }}>
            ⚡ Estimated Delivery Time:
          </span>
          <strong style={{ color: '#fff' }}>{STORE_INFO.deliveryTime}</strong>
        </div>

        {/* Cart Item List */}
        <div style={{
          flexGrow: 1,
          overflowY: 'auto',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {cartItems.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: 'var(--text-muted)'
            }}>
              <div style={{ fontSize: '50px', marginBottom: '14px' }}>🍕</div>
              <h4 style={{ color: '#fff', marginBottom: '8px' }}>Your cart is empty!</h4>
              <p style={{ fontSize: '0.88rem', marginBottom: '20px' }}>
                Add our famous Large Pepperoni ($15) or Cheesy Garlic Bread ($5) to start.
              </p>
              <button
                onClick={onClose}
                style={{
                  background: 'linear-gradient(135deg, #ff5722, #ea580c)',
                  color: '#fff',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontWeight: '700',
                  fontSize: '0.88rem'
                }}
              >
                Browse Menu
              </button>
            </div>
          ) : (
            cartItems.map(item => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '14px',
                  padding: '12px',
                  position: 'relative'
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '10px',
                    objectFit: 'cover'
                  }}
                />

                <div style={{ flexGrow: 1 }}>
                  <h4 style={{ fontSize: '0.92rem', color: '#fff', fontWeight: '700' }}>
                    {item.name}
                  </h4>
                  <div style={{ fontSize: '0.82rem', color: '#ff7a45', fontWeight: '700' }}>
                    ${item.price} each
                  </div>

                  {/* Quantity modifier */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginTop: '8px'
                  }}>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        width: '24px',
                        height: '24px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: '700'
                      }}
                    >
                      -
                    </button>
                    <span style={{ fontSize: '0.88rem', fontWeight: '700', color: '#fff' }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        width: '24px',
                        height: '24px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: '700'
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1rem', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    style={{
                      background: 'transparent',
                      color: 'var(--text-dim)',
                      fontSize: '0.76rem',
                      textDecoration: 'underline'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#ef4444'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-dim)'}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '20px 24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            background: 'rgba(10, 11, 14, 0.95)'
          }}>
            {/* Promo Code Input */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
              <input
                type="text"
                placeholder="Promo code (try CHEESY10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                style={{
                  flexGrow: 1,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  padding: '8px 12px',
                  color: '#fff',
                  fontSize: '0.84rem'
                }}
              />
              <button
                onClick={handleApplyPromo}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '10px',
                  padding: '8px 14px',
                  fontSize: '0.84rem',
                  fontWeight: '600'
                }}
              >
                Apply
              </button>
            </div>
            {promoError && (
              <div style={{ fontSize: '0.75rem', color: '#ef4444', marginBottom: '8px' }}>
                {promoError}
              </div>
            )}
            {appliedDiscount > 0 && (
              <div style={{ fontSize: '0.78rem', color: '#10b981', marginBottom: '8px', fontWeight: '600' }}>
                ✓ {appliedDiscount}% promo discount applied!
              </div>
            )}

            {/* Price Calculations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px', fontSize: '0.86rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              {appliedDiscount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10b981' }}>
                  <span>Promo Discount ({appliedDiscount}%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                <span>Delivery (30-45 mins)</span>
                <span>
                  {isFreeDelivery ? (
                    <strong style={{ color: '#10b981' }}>FREE</strong>
                  ) : (
                    `$${deliveryFee.toFixed(2)}`
                  )}
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '8px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '1.15rem',
                fontWeight: '900',
                color: '#fff'
              }}>
                <span>Total</span>
                <span className="text-gradient-fire">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              onClick={() => onCheckout({ subtotal, deliveryFee, total, items: cartItems })}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #ff5722 0%, #ea580c 100%)',
                color: '#ffffff',
                padding: '14px',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '800',
                boxShadow: '0 4px 20px rgba(255, 87, 34, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <span>Place Order (${total.toFixed(2)})</span>
              <span>→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
