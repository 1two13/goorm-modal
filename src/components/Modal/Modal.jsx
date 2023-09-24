import {
	Button,
	Modal as ModalComponent,
	Typography,
} from '@goorm-dev/gds-challenge';

import React from 'react';

function Modal({ isOpen, toggle }) {
	return (
		<ModalComponent isOpen={isOpen} toggle={toggle}>
			<ModalComponent.Header toggle={toggle} />
			<ModalComponent.Footer between />
		</ModalComponent>
	);
}

export default Modal;
