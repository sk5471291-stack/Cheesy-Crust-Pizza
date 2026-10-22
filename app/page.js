'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PromptArchitectureSection from '@/components/PromptArchitectureSection';
import MenuSection from '@/components/MenuSection';
import StoreInfoSection from '@/components/StoreInfoSection';
import ReviewsSection from '@/components/ReviewsSection';
import CartDrawer from '@/components/CartDrawer';
import OrderSuccessModal from '@/components/OrderSuccessModal';
import SystemPromptModal from '@/components/SystemPromptModal';
import ChatbotWidget from '@/components/ChatbotWidget';
import Footer from '@/components/Footer';

export default function Home() {
  const [cartItems, setCartItems] = useState([
    {
      id: "large-pepperoni",
      name: "Large Pepperoni Pizza",
      price: 15,
      quantity: 1,
      image: "/images/large_pepperoni.jpg"
    },
    {
      id: "garlic-bread",
      name: "Cheesy Stuffed Garlic Bread",
      price: 5,
      quantity: 1,
      image: "/images/garlic_bread.jpg"
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);
  const [isOrderSuccessOpen, setIsOrderSuccessOpen] = useState(false);
  const [latestOrderDetails, setLatestOrderDetails] = useState(null);
  const [externalPrompt, setExternalPrompt] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleAddToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    showToast(`✓ Added ${item.name} ($${item.price}) to cart!`);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = (orderDetails) => {
    setLatestOrderDetails(orderDetails);
    setCartItems([]);
    setIsCartOpen(false);
    setIsOrderSuccessOpen(true);
  };

  const handleTestPrompt = (promptText) => {
    setIsChatOpen(true);
    setExternalPrompt(promptText);
    // Reset external prompt after short delay
    setTimeout(() => setExternalPrompt(''), 600);
  };

  const handleAskAIAboutItem = (item) => {
    handleTestPrompt(`Tell me more about the ${item.name} ($${item.price}) and why it's delicious!`);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          top: '90px',
          right: '24px',
          zIndex: 150,
          background: 'linear-gradient(135deg, #10b981, #059669)',
          color: '#ffffff',
          padding: '12px 20px',
          borderRadius: '12px',
          fontSize: '0.88rem',
          fontWeight: '700',
          boxShadow: '0 10px 25px rgba(16, 185, 129, 0.4)',
          animation: 'fadeIn 0.25s ease'
        }}>
          {toastMessage}
        </div>
      )}

      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
        onInspectPrompt={() => setIsPromptModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenChat={() => setIsChatOpen(true)}
        onInspectPrompt={() => setIsPromptModalOpen(true)}
        onAddToCart={handleAddToCart}
      />

      {/* Prompt Architecture & Guardrail Showcase Section */}
      <PromptArchitectureSection
        onTestPrompt={handleTestPrompt}
        onInspectPrompt={() => setIsPromptModalOpen(true)}
      />

      {/* Menu Section */}
      <MenuSection
        onAddToCart={handleAddToCart}
        onAskAI={handleAskAIAboutItem}
      />

      {/* Store Info & 30-45 Mins Delivery Guarantee */}
      <StoreInfoSection
        onAskAIQuestion={handleTestPrompt}
      />

      {/* Customer Reviews */}
      <ReviewsSection />

      {/* Footer */}
      <Footer
        onInspectPrompt={() => setIsPromptModalOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Cart Slide-out Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Order Confirmed Modal with Kitchen Tracker */}
      <OrderSuccessModal
        isOpen={isOrderSuccessOpen}
        onClose={() => setIsOrderSuccessOpen(false)}
        orderDetails={latestOrderDetails}
        onAskAIStatus={handleTestPrompt}
      />

      {/* System Prompt Inspector Modal */}
      <SystemPromptModal
        isOpen={isPromptModalOpen}
        onClose={() => setIsPromptModalOpen(false)}
      />

      {/* Gemini 3.8 Flash AI Customer Assistant Chatbot */}
      <ChatbotWidget
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
        onClose={() => setIsChatOpen(false)}
        onInspectPrompt={() => setIsPromptModalOpen(true)}
        onAddToCart={handleAddToCart}
        externalPrompt={externalPrompt}
      />
    </main>
  );
}
