import React from 'react';
import { createContext, useState } from "react";

export const LangContext = createContext();

export const LangProvider = ({children}) => {
    const [Lang, SetLang] = useState(localStorage.getItem('Lang'));
  return (
    <LangContext.Provider value={[Lang, SetLang]}>
        {children}
    </LangContext.Provider>
  )
}

export default LangContext