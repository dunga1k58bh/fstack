'use client';

import { usePathname } from 'next/navigation';
import styles from './Menu.module.scss';
import Link from 'next/link';
import {
	ArrowUpCircleIcon,
	BookOpenIcon,
	BriefcaseIcon,
	ChartBarIcon,
	FaceSmileIcon,
	HomeIcon,
	LifebuoyIcon,
	MegaphoneIcon,
	PencilIcon,
	PlusIcon,
	QuestionMarkCircleIcon,
	SquaresPlusIcon,
	UserGroupIcon,
	UsersIcon
} from '@heroicons/react/24/outline';
import {
	Accordion,
	AccordionItem,
	Button,
	useDisclosure
} from '@nextui-org/react';
import CreateCommunityForm from '../Form/CreateCommunityForm';
import CommunitySection from '../Community/MenuList/MenuList';

const Menu: React.FC = () => {
	const pathname = usePathname();

	const menuItems = [
		{ name: 'Home', path: '/home', icon: <HomeIcon width={20} /> },
		{
			name: 'Popular',
			path: '/r/popular',
			icon: <ArrowUpCircleIcon width={20} />
		},
		{ name: 'Explore', path: '/explore', icon: <UsersIcon width={20} /> },
		{ name: 'All', path: '/r/all', icon: <ChartBarIcon width={20} /> }
	];

	const resourceItems1 = [
		{
			name: 'About Reddit',
			path: '/about',
			icon: <FaceSmileIcon width={20} />
		},
		{
			name: 'Advertise',
			path: '/advertise',
			icon: <MegaphoneIcon width={20} />
		},
		{
			name: 'Help',
			path: '/help',
			icon: <QuestionMarkCircleIcon width={20} />
		},
		{ name: 'Blog', path: '/blog', icon: <BookOpenIcon width={20} /> },
		{
			name: 'Careers',
			path: '/careers',
			icon: <BriefcaseIcon width={20} />
		},
		{ name: 'Press', path: '/press', icon: <PencilIcon width={20} /> }
	];

	const resourceItems2 = [
		{
			name: 'Community',
			path: '/commnity',
			icon: <UserGroupIcon width={20} />
		},
		{
			name: 'Best of reddit',
			path: '/best',
			icon: <LifebuoyIcon width={20} />
		},
		{
			name: 'Topics',
			path: '/topics',
			icon: <SquaresPlusIcon width={20} />
		}
	];

	const itemClasses = {
		base: styles.base,
		title: styles.title,
		trigger: styles.trigger,
		indicator: styles.indicator,
		content: styles.content
	};

	//Create community hanlde
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<div className={styles.menu}>
			<ul className={`${styles.list}`}>
				{menuItems.map((item) => (
					<li
						key={item.path}
						className={`${styles.item} ${
							pathname.startsWith(item.path) ? styles.active : ''
						} xl:rounded-[8px]`}
					>
						<Link className={styles.itemMain} href={item.path}>
							{item.icon}
							<span className={styles.text}>{item.name}</span>
						</Link>
					</li>
				))}
			</ul>

			<Accordion
				defaultExpandedKeys="all"
				selectionMode="multiple"
				className={styles.accordition}
				itemClasses={itemClasses}
			>
				<AccordionItem
					key="feed"
					aria-label="Custom feed"
					subtitle="Custom feed"
					className={styles.section}
					textValue="Custom feed"
				>
					<Button variant="light" className={styles.button}>
						<PlusIcon width={20} />
						Create a custom feed
					</Button>
				</AccordionItem>
				<AccordionItem
					key="recent"
					aria-label="Recent"
					subtitle="Recent"
					textValue="Recent"
				></AccordionItem>
				<AccordionItem
					key="community"
					subtitle="Community"
					textValue="Community"
				>
					<Button
						variant="light"
						className={styles.button}
						onClick={onOpen}
					>
						<PlusIcon width={32} />
						Create a community
					</Button>
					<CreateCommunityForm
						isOpen={isOpen}
						onOpenChange={onOpenChange}
					/>
					<CommunitySection></CommunitySection>
				</AccordionItem>
				<AccordionItem
					key="resources"
					subtitle="Resources"
					textValue="Resources"
				>
					<ul className={styles.list}>
						{resourceItems1.map((item) => (
							<li
								key={item.path}
								className={`${styles.item} ${
									pathname.startsWith(item.path)
										? styles.active
										: ''
								} xl:rounded-[8px]`}
							>
								<Link
									className={styles.itemMain}
									href={item.path}
								>
									{item.icon}
									<span className={styles.text}>
										{item.name}
									</span>
								</Link>
							</li>
						))}
					</ul>
					<div className={styles.sep} />
					<ul className={styles.list}>
						{resourceItems2.map((item) => (
							<li
								key={item.path}
								className={`${styles.item} ${
									pathname.startsWith(item.path)
										? styles.active
										: ''
								} xl:rounded-[8px]`}
							>
								<Link
									className={styles.itemMain}
									href={item.path}
								>
									{item.icon}
									<span className={styles.text}>
										{item.name}
									</span>
								</Link>
							</li>
						))}
					</ul>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default Menu;
