import React from 'react'

interface ImageProps {
	imageSrc: string,
	altText: string
	className: string
}

const Image = ({imageSrc, altText, className}: ImageProps) => {
	return <img className={className } src={imageSrc} alt={ altText} />;
};

export default Image