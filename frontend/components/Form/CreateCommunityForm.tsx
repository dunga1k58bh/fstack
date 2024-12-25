'use client';

import React, { useState, FC } from 'react';
import {
	Modal,
	Input,
	Button,
	ModalHeader,
	ModalBody,
	ModalContent,
	Textarea,
	ModalFooter
} from '@nextui-org/react';
import styles from './CreateCommunityForm.module.scss'; // Adjust the path as needed
import {
	CreateCommunityDocument,
	CreateCommunityInput,
	CreateCommunityMutation
} from '@/gql/graphql';
import { useMutation, useQuery } from '@apollo/client';

type CreateCommunityFormProps = {
	isOpen: boolean;
	onOpenChange: () => void;
};

type FormInput = {
	createCommunityInput: CreateCommunityInput;
};

const CreateCommunityForm: FC<CreateCommunityFormProps> = ({
	isOpen,
	onOpenChange
}) => {
	const [communityName, setCommunityName] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [step, setStep] = useState<number>(1); // Track the current step

	const handleNextStep = () => {
		if (step === 1 && communityName && description) {
			setStep(2); // Move to the next step
		}
	};

	const handleBackStep = () => {
		setStep(1); // Go back to the first step
	};

	const [createCommunity, { loading, data, error }] = useMutation<
		CreateCommunityMutation,
		FormInput
	>(CreateCommunityDocument);

	const handleCreate = async (e: React.FormEvent) => {
		e.preventDefault();
		// Add your form submission logic here (e.g., call an API or update state)

		await createCommunity({
			variables: {
				createCommunityInput: {
					name: communityName,
					description: description
				}
			}
		});

		// Reset the form and close modal after submission
		setCommunityName('');
		setDescription('');
		onOpenChange(); // Close the modal
	};

	return (
		<Modal
			closeButton
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			size="3xl"
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader
							title="Create a New Community"
							className={styles.header}
						>
							<h2>Tell us about your community</h2>
						</ModalHeader>
						<ModalBody>
							{step === 1 && (
								<>
									<div className={styles.subtitle}>
										A name and description help people
										understand what your community is all
										about.
									</div>
									<div className={styles.main}>
										<form className={styles.form}>
											<Input
												fullWidth
												label="Community Name"
												value={communityName}
												onChange={(e) =>
													setCommunityName(
														e.target.value
													)
												}
												variant="bordered"
												isRequired
												size="lg"
											/>
											<Textarea
												fullWidth
												label="Description"
												value={description}
												onChange={(e) =>
													setDescription(
														e.target.value
													)
												}
												variant="bordered"
												isRequired
												size="lg"
											/>
										</form>
										<div className="flex items-start grow">
											<div className="w-full flex justify-center">
												<div className={styles.preview}>
													<div className="flex justify-start gap-x-md m-4 mb-0">
														<div className="flex-col flex justify-center">
															<div className="block font-semibold text-20 text-neutral-content-strong hover:text-neutral-content-strong hover:no-underline pb-2xs">
																r/
																{communityName ||
																	'communityname'}
															</div>
															<div className="text-12 text-neutral-content-weak">
																1 member - 1
																online
															</div>
														</div>
													</div>

													<div className="p-2 pt-3">
														<p className="m-0 text-ellipsis mb-1 text-[14px]">
															{description ||
																'Your community description'}
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</>
							)}

							{step === 2 && (
								<>
									<div>
										Step 2: Additional Form Fields or
										Confirmation
									</div>
								</>
							)}
						</ModalBody>
						<ModalFooter>
							<Button type="button" onClick={handleBackStep}>
								Back
							</Button>
							<Button
								type="submit"
								color="primary"
								onClick={handleCreate}
							>
								Create
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

export default CreateCommunityForm;
