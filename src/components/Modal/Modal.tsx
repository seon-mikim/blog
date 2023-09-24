import Form from '@components/Form/Form'
import React from 'react'

interface ModalProps {
	isName: string
}

const Modal = ({isName }: ModalProps) => {
	return (
		<div>
			<Form isName={ isName} />
		</div>
	)
}

export default Modal