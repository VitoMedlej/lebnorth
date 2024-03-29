"use client"

import { useState, useEffect } from 'react';

const useCategories = () => {
  const [categories, setCategories] = useState([
    // {
    //     categoryName:'Shop',
    // },
    // {
    //     categoryName:'Collection',
    // }
  ]);

  const fetchDataAndSetCategories = async () => {
    try {
      const cachedCategories = localStorage.getItem('CATES');
      if (cachedCategories) {
        setCategories(JSON.parse(cachedCategories));
        // return; // Return early if categories are already cached
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-categories`,  {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // cache: 'no-store',
  next: {
    revalidate: 10
  }
      }
      );

      console.log('response: ', response);
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const data = await response.json();
      setCategories(data?.record);

      // Cache categories in localStorage
      localStorage.setItem('CATES', JSON.stringify(data?.record));
    } catch (e) {
      console.log('Error fetching categories:', e);
    }
  };

  useEffect(() => {
    fetchDataAndSetCategories();
  }, []); // Fetch categories only once when the component mounts

  return categories;
};

export default useCategories;
