import React from 'react';
import { Avatar } from '@nextui-org/react';

interface RandomAvatarProps {
	name: string;
	size?: number; // Custom size in pixels
}

const RandomAvatar: React.FC<RandomAvatarProps> = ({ name, size }) => {
	const avatarUrl = `https://api.dicebear.com/6.x/adventurer/svg?seed=${encodeURIComponent(
		name
	)}`;

	return (
		<Avatar
			src={avatarUrl}
			alt={`${name}'s avatar`}
			style={{ width: size || 32, height: size || 32 }} // Default size is 40px
		/>
	);
};

export default RandomAvatar;
