// App.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ProjectCard from '../components/ProjectCard';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const recipes = [
    {
      id: 1,
      title: "LOTEK PERKEDEL",
      rating: 4.9,
      chef: "Chef Fery",
      description: "Fear lemonade beans intake, lemonade, egg, gingerbread, etc.",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      ingredients: [
        "Lemonade beans",
        "Egg",
        "Gingerbread",
        "Intake mixture",
        "Special spices",
        "Fresh herbs"
      ]
    }
  ];

  const nextRecipe = () => {
    setCurrentIndex((prev) => (prev + 1) % recipes.length);
  };

  const prevRecipe = () => {
    setCurrentIndex((prev) => (prev - 1 + recipes.length) % recipes.length);
  };

  return (
    <div className="min-h-screen bg-white">
   
      <div className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: 300, opacity: 0, rotateY: 15 }}
            animate={{ x: 0, opacity: 1, rotateY: 0 }}
            exit={{ x: -300, opacity: 0, rotateY: -15 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ProjectCard recipe={recipes[currentIndex]} />
          </motion.div>
        </AnimatePresence>
        
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button 
            onClick={prevRecipe}
            className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            ← Previous
          </button>
          <button 
            onClick={nextRecipe}
            className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;