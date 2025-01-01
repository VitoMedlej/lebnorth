"use client"
import { createContext, useContext, useEffect, useState } from "react";
// import NextNProgress from 'nextjs-progressbar';
// import { loadState, saveState } from "@/Utils/LocalstorageFn";
import useCategories from "@/Hooks/useCategories";


export const DrawerContext = createContext < any > ({});
export const CartContext = createContext < any > ({});
export const Categories = createContext < any > ([]);
export const LangContext = createContext < any > ('en');



 const ContextWrapper  = ({children}:  {
        children: React.ReactNode;
      }
      ) => {
        const [open,
            setOpen] = useState(false);
        const [cartOpen,
            setCartOpen] = useState(false);
            const categories = useCategories()
        
                const [lang,
                    setLang] = useState('en');
                        // Load language from localStorage on component mount
    // useEffect(() => {
    //     const savedLang = loadState('Vz124tf');
    //     if (savedLang) {
    //         setLang(savedLang);
    //     }
    // }, []);

    // Save language to localStorage whenever it changes
    // useEffect(() => {
    //     saveState('Vz124tf', lang);
    // }, [lang]);
            return (
                
                <DrawerContext.Provider value={{open,setOpen}}>
              <Categories.Provider value={{categories}}>

            
        <CartContext.Provider value={{cartOpen, setCartOpen}}>
        <LangContext.Provider value={{lang, setLang}}>

        {/* <SideBar cates={cates}/> */}
                {/* <NextNProgress/> */}
            {/* <QuickCart/> */}
            {children}
            </LangContext.Provider>
   
        </CartContext.Provider>
        </Categories.Provider>
    </DrawerContext.Provider>
            )
        }

export default ContextWrapper

export const useDrawerContext = () => useContext(DrawerContext);
export const useCartContext = () => useContext(CartContext);
export const useCategoriesContext = () => useContext(Categories);
export const useLangContext = () => useContext(LangContext);
