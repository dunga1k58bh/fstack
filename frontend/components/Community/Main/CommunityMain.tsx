import { Community } from '@/gql/graphql';
import styles from './CommunityMain.module.scss';

interface CommunityMainProps {
	community: Community;
}

const CommunityMain: React.FC<CommunityMainProps> = ({ community }) => {
	return (
		<div className="main-container flex gap-lg w-full pb-xl">
			<main className="main w-full flex-[1] min-w-0 flex-grid--main-container-card right-sidebar-s"></main>
			<div className="right-sidebar w-[316px] min-w-[316px] hidden s:block styled-scrollbars xs:sticky xs:top-[56px] xs:max-h-[calc(100vh-var(--shreddit-header-height)-1px)] xs:overflow-y-auto xs:overflow-x-hidden"></div>
		</div>
	);
};

export default CommunityMain;
