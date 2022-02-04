import React from 'react';

interface customIMGProps {
 url : string,
 alt: string
}

const CustomTinyImg = ({url, alt} : customIMGProps) => {
  return <img src={url} alt={alt} width="5px" />
}

export default CustomTinyImg;

