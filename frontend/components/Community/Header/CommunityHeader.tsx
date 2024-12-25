import { Community } from '@/gql/graphql';
import styles from './CommunityHeader.module.scss';
import RandomAvatar from '@/components/Common/RandomAvatar/RandomAvatar';
import { Button } from '@nextui-org/react';
import { EllipsisHorizontalIcon, PlusIcon } from '@heroicons/react/24/outline';

interface CommunityHeaderProps {
	community: Community;
}

const CommunityHeader: React.FC<CommunityHeaderProps> = ({ community }) => {
	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<div className={styles.banner}></div>
			</div>
			<div className={styles.actions}>
				<div className="flex flex-1 items-end justify-between flex-col xs:flex-row">
					<div className="flex items-end justify-start xs:justify-center gap-[8px] w-100 xs:w-auto">
						<div className="xs:w-[88px] xs:h-[88px] w-2xl h-2xl text-48 shrink-0">
							<RandomAvatar name={community.name} size={88} />
						</div>

						<div className="flex flex-col">
							<h1 className="flex items-center font-bold text-18 xs:text-32 mb-0">
								r/{community.name}
							</h1>
						</div>
					</div>
					<div className="flex w-100 xs:w-auto mt-xs xs:mt-0">
						<div className="mr-sm">
							<Button
								radius="full"
								variant="bordered"
								startContent={<PlusIcon width={24} />}
							>
								Create Post
							</Button>
						</div>
						<div className="">
							<div className="flex items-center gap-sm">
								<Button radius="full" variant="bordered">
									Join
								</Button>
								<Button
									isIconOnly
									radius="full"
									variant="bordered"
								>
									<EllipsisHorizontalIcon
										width={20}
									></EllipsisHorizontalIcon>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommunityHeader;
