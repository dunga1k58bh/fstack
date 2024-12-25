// components/CommunitySection.tsx
import React from 'react';
import styles from './MeuList.module.scss';
import { StarIcon } from '@heroicons/react/24/outline';
import RandomAvatar from '@/components/Common/RandomAvatar/RandomAvatar';
import Link from 'next/link';
import { MyCommunitiesDocument, MyCommunitiesQuery } from '@/gql/graphql';
import { useQuery } from '@apollo/client';

const CommunitySection: React.FC = () => {
	const { data, loading, error } = useQuery<MyCommunitiesQuery>(
		MyCommunitiesDocument
	);

	if (loading) return <div>Loading...</div>;
	if (error) return <div></div>;

	return (
		<div className={styles.section}>
			<ul className={styles.list}>
				{data?.communities.map((community) => (
					<li key={community.id} className={styles.item}>
						<Link
							className={styles.itemMain}
							href={`/r/${community.name}`}
						>
							<span className={styles.left}>
								<RandomAvatar
									name={community.name}
								></RandomAvatar>
								<div className={styles.name}>
									r/{community.name}
								</div>
							</span>
							<span className={styles.right}>
								<StarIcon width={16}></StarIcon>
							</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CommunitySection;
