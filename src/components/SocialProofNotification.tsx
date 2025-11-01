import React, { useState, useEffect, useRef } from 'react';
import { X, ShoppingBag } from 'lucide-react';

// Import all product arrays
import { cannabisProducts, concentratesProducts, ediblesProducts } from "../pages/ProductCategory";
import { products as cartridgesProducts } from "../pages/Cartridges";
import { gummiesProducts } from "../pages/Gummies";
import { products as preRollsProducts } from "../pages/PreRolls";
import { products as drinksProducts } from "../pages/Drinks";
import { products as merchProducts } from "../pages/Merch";

// Combine all products into a single array
const allProducts = [
  ...cannabisProducts,
  ...concentratesProducts,
  ...ediblesProducts,
  ...cartridgesProducts,
  ...gummiesProducts,
  ...preRollsProducts,
  ...drinksProducts,
  ...merchProducts
];

const DEMO_BUYERS = [
  { name: 'Jacob', city: 'San Antonio', state: 'Texas' },
  { name: 'Sarah', city: 'Austin', state: 'Texas' },
  { name: 'Michael', city: 'Houston', state: 'Texas' },
  { name: 'Emma', city: 'Dallas', state: 'Texas' },
  { name: 'David', city: 'El Paso', state: 'Texas' },
  { name: 'Olivia', city: 'Fort Worth', state: 'Texas' },
  { name: 'Liam', city: 'Arlington', state: 'Texas' },
  { name: 'Sophia', city: 'Corpus Christi', state: 'Texas' },
];

const SocialProofNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState<any>(null);
  const [timeAgo, setTimeAgo] = useState('');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomTime = () => {
    const minutes = Math.floor(Math.random() * 120) + 5; // 5-125 minutes
    if (minutes < 60) {
      return `About ${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      const hours = Math.floor(minutes / 60);
      return `About ${hours} hour${hours > 1 ? 's' : ''} ago`;
    }
  };

  const showNotification = () => {
    const randomBuyer = DEMO_BUYERS[Math.floor(Math.random() * DEMO_BUYERS.length)];
    const randomProduct = allProducts[Math.floor(Math.random() * allProducts.length)];

    if (!randomProduct || !randomProduct.name || !randomProduct.image) return; // Ensure product has name and image

    setCurrentNotification({
      buyer: randomBuyer,
      product: randomProduct,
    });
    setTimeAgo(getRandomTime());
    setIsVisible(true);

    // Auto-hide after 8 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 8000);
  };

  useEffect(() => {
    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 3000);

    // Show notification every 15-30 seconds
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 15000 + 15000); // Random between 15-30 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible || !currentNotification || !currentNotification.product) return null;

  const { buyer, product: purchasedProduct } = currentNotification;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-slide-in">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 max-w-sm flex items-start gap-3 hover:shadow-3xl transition-shadow duration-300">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img 
            src={purchasedProduct.image} 
            alt={purchasedProduct.name}
            className="w-16 h-16 rounded-md object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-900 font-medium mb-1">
            <span className="font-semibold">{buyer.name}</span> in{' '}
            <span className="font-semibold">{buyer.city}, {buyer.state}</span> purchased
          </p>
          <p className="text-sm text-gray-900 font-semibold mb-1">
            {purchasedProduct.name}
          </p>
          <p className="text-xs text-gray-500 italic">
            {timeAgo}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close notification"
        >
          <X size={18} />
        </button>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slide-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SocialProofNotification;
