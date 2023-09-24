import { useState } from 'react';

import { EmptyView, Header } from '@/components';

import styles from './App.module.scss';
import Modal from './components/Modal/Modal';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = (e) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.App}>
			<Header toggle={toggle} />
			<main className={styles.main}>
				<EmptyView />
			</main>
			<Modal isOpen={isOpen} toggle={toggle} />
		</div>
	);
}

export default App;
