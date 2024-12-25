import React from 'react';
import Panel from '../Panel/Panel';
import styles from './Layout.module.scss';
import Menu from '../Menu/Menu';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Panel />
			<div className={styles.container}>
				<Menu />
				<main className={styles.content}>{children}</main>
			</div>
		</div>
	);
};

export default Layout;
