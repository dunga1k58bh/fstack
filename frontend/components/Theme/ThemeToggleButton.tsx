'use client';

import React from 'react';
import { useTheme } from './ThemeContext';
import { Button } from '@nextui-org/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const ThemeToggleButton: React.FC = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button isIconOnly onClick={toggleTheme} variant="light" radius="full">
			{theme == 'light' ? (
				<MoonIcon width={20} />
			) : (
				<SunIcon width={20} />
			)}
		</Button>
	);
};

export default ThemeToggleButton;
