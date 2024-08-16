import React, { createContext, useState } from 'react';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState({
        name: '',
        text: "",
        floor: '',
        pin:[0,0]
      },);

      const closePopup = () => {
        setSelectedCategory(0);
      };

    return (
        <CategoryContext.Provider value={{ closePopup,selectedCategory, setSelectedCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};