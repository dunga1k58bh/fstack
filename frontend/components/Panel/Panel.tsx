'use client';

import React from 'react';
import styles from './Panel.module.scss';
import Logo from '@/public/images/logo.svg';
import Logo2 from '@/public/images/logo2.svg';
import ThemeToggleButton from '../Theme/ThemeToggleButton';
import clsx from 'clsx';
import { Avatar, Button } from '@nextui-org/react';
import {
	CursorArrowRippleIcon,
	ChatBubbleLeftEllipsisIcon,
	PlusIcon,
	BellIcon
} from '@heroicons/react/24/outline';

const Panel: React.FC = () => {

	return (
		<div className={clsx(styles.panel)}>
			<div className={styles.logo}>
				<span className="image">
					<Logo />
				</span>
				<span className={styles.text}>
					<Logo2 />
				</span>
			</div>
			<div className={styles.searchBar}>
				<div className={styles.searchBarMain}>
					<div className="search-component flex justify-stretch w-full xl:block xl:pointer-events-auto xl:w-[560px] xl:mx-auto">
						<input
							className={`${styles.input} h-[40px] w-full`}
							type="text"
							placeholder="Search..."
						/>
					</div>
				</div>
			</div>
			<div className={styles.actions}>
				<Button isIconOnly={true} radius="full" variant="light">
					<CursorArrowRippleIcon width={20} />
				</Button>
				<Button isIconOnly={true} radius="full" variant="light">
					<ChatBubbleLeftEllipsisIcon width={20} />
				</Button>
				<Button radius="full" variant="light" aria-label="Create post">
					<PlusIcon width={20} />
					Create
				</Button>
				<Button isIconOnly={true} radius="full" variant="light">
					<BellIcon width={20} />
				</Button>
				<ThemeToggleButton />
				<Button variant="light" isIconOnly>
					<Avatar
						isBordered
						src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
						size="sm"
					/>
				</Button>
			</div>
		</div>
	);
};

export default Panel;
