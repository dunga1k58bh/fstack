'use client';

import React, {
	createContext,
	useState,
	useContext,
	useEffect,
	ReactNode
} from 'react';

interface ThemeContextType {
	theme: string;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook to use the theme context
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};

// Define the props for the ThemeProvider component with children
interface ThemeProviderProps {
	children: ReactNode; // This makes sure the component can accept children
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<string>('light');

	useEffect(() => {
		// Retrieve the theme from localStorage or default to 'light'
		const savedTheme = localStorage.getItem('theme') || 'light';
		setTheme(savedTheme);

		// Apply the theme to the document body and documentElement
		if (savedTheme === 'dark') {
			document.body.classList.add('dark-mode');
		} else {
			document.body.classList.remove('dark-mode');
		}
		document.documentElement.setAttribute('data-theme', savedTheme);
	}, [theme]);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme); // Save the theme in localStorage
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
