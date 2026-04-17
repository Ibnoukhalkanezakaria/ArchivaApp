"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'English' | 'French' | 'Spanish';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  English: {
    "Dashboard": "Dashboard",
    "Projects": "Projects",
    "RFIs": "RFIs",
    "Documents": "Documents",
    "Configuration": "Configuration",
    "Access Control": "Access Control",
    "Logout": "Logout",
    "Regional settings and language": "Regional settings and language",
    "Language": "Language",
    "Company": "Company",
    "Document types": "Document types",
    "Manage typologies": "Manage typologies",
    "Create types and dynamic fields for documents.": "Create types and dynamic fields for documents.",
    "Team Insights": "Team Insights"
  },
  French: {
    "Dashboard": "Tableau de bord",
    "Projects": "Projets",
    "RFIs": "Appels d'offres",
    "Documents": "Documents",
    "Configuration": "Configuration",
    "Access Control": "Contrôle d'accès",
    "Logout": "Se déconnecter",
    "Regional settings and language": "Paramètres régionaux et langue",
    "Language": "Langue",
    "Company": "Entreprise",
    "Document types": "Types de documents",
    "Manage typologies": "Gérer les typologies",
    "Create types and dynamic fields for documents.": "Créez des types et des champs dynamiques pour les documents.",
    "Team Insights": "Aperçu de l'équipe"
  },
  Spanish: {
    "Dashboard": "Panel de control",
    "Projects": "Proyectos",
    "RFIs": "Solicitudes de información",
    "Documents": "Documentos",
    "Configuration": "Configuración",
    "Access Control": "Control de acceso",
    "Logout": "Cerrar sesión",
    "Regional settings and language": "Configuración regional y de idioma",
    "Language": "Idioma",
    "Company": "Compañía",
    "Document types": "Tipos de documento",
    "Manage typologies": "Gestionar tipologías",
    "Create types and dynamic fields for documents.": "Cree tipos y campos dinámicos para documentos.",
    "Team Insights": "Información del equipo"
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'English',
  setLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('English');

  useEffect(() => {
    const saved = localStorage.getItem('app_language') as Language;
    if (saved && translations[saved]) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_language', lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
