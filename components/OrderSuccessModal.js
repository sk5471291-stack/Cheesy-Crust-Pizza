'use client';

import React from 'react';
import { STORE_INFO } from '@/lib/pizzaData';

export default function OrderSuccessModal({ isOpen, onClose, orderDetails, onAskAIStatus }) {
  if (!isOpen || !orderDetails) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 110,
      background: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="glass-panel" style={{
        maxWidth: '520px',
        width: '100%',
        padding: '36px',
        border: '1px solid rgba(255, 87, 34, 0.4)',
        background: 'radial-gradient(circle at top, rgba(255, 87, 34, 0.15) 0%, rgba(18, 20, 27, 0.95) 100%)',
        textAlign: 'center',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)'
      }}>
        <div style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #10b981, #059669)',
          margin: '0 auto 18px auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px',
          boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)'
        }}>
          ✓
        </div>

        <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '8px', fontWeight: '900' }}>
          Order Confirmed!
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px' }}>
          Your order has been sent to our woodfired kitchen! Order #CC-{Math.floor(1000 + Math.random() * 9000)}
        </p>

        {/* Live Status Tracker */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '24px',
          textAlign: 'left'
        }}>
          <div style={{ fontSize: '0.8rem', color: '#ff7a45', fontWeight: '700', textTransform: 'uppercase', marginBottom: '14px' }}>
            Live Kitchen Tracking
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#10b981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>✓</div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#fff' }}>Order Received & Verified</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Sent to Cheesy Crust master chef</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#f59e0b', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>🔥</div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#fbbf24' }}>Baking in 800°F Stone Oven</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Melting Fior di Latte cheese & crispy blistered crust</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>🛵</div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: '600', color: '#94a3b8' }}>Out for Delivery ({STORE_INFO.deliveryTime})</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Packed in thermal heat-trap bag</div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => {
              onClose();
              onAskAIStatus("Where is my order? Can you track my delivery?");
            }}
            style={{
              flex: 1,
              background: 'rgba(255, 87, 34, 0.15)',
              border: '1px solid rgba(255, 87, 34, 0.4)',
              color: '#ff7a45',
              padding: '12px',
              borderRadius: '12px',
              fontWeight: '700',
              fontSize: '0.88rem'
            }}
          >
            Ask AI to Track 💬
          </button>

          <button
            onClick={onClose}
            style={{
              flex: 1,
              background: 'linear-gradient(135deg, #ff5722, #ea580c)',
              color: '#fff',
              padding: '12px',
              borderRadius: '12px',
              fontWeight: '700',
              fontSize: '0.88rem'
            }}
          >
            Done & Back to Menu
          </button>
        </div>
      </div>
    </div>
  );
}
