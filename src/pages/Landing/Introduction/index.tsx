import React from 'react';
import { AnimatedTitle, Reveal } from 'react-genie';
import { Animation } from 'react-genie-styled-components';

const Introduction = () => (
	<div
		className="bg-dark d-flex justify-content-center align-items-center position-relative"
		style={{ height: '100vh' }}
	>
		<Reveal animation={Animation.FadeInUp}>
			<h1 className="text-light">
				<AnimatedTitle animation={Animation.FadeInUp}>
					Lucas Bittencourt
				</AnimatedTitle>
			</h1>

			<label className="text-danger font-weight-bold">
				<AnimatedTitle animation={Animation.FadeInUp}>
					Desenvolvedor full-stack
				</AnimatedTitle>
			</label>
		</Reveal>

		<a href="#certificates">
			<svg
				width="40"
				height="40"
				viewBox="0 0 16 16"
				className="bi bi-arrow-down-circle-fill text-light position-absolute up-down-effect"
				style={{
					bottom: 10,
					left: '50%',
					transform: 'translateX(-50%)',
				}}
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z"
				/>
			</svg>
		</a>
	</div>
);

export default Introduction;
