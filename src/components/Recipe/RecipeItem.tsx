import { useState } from 'react';
import '../../css/index.css';

export interface recipiItemProps {
  id : number,
  title: string,
  description: string,
  src: string
}


const RecepiItem = ( {id ,title, description, src} : recipiItemProps ) : JSX.Element => {
const [isHiddenVisible, setIsHiddenVisible] = useState<boolean>(false);

const visibleLogic = isHiddenVisible ? 'flex' : 'none'

  return (
   <div className='recipe-item'>
     <div onMouseEnter={() => setIsHiddenVisible(true)} style={{ backgroundImage: `url('${src}')` }} className="recipe-item__photo">
     </div>
     <div style={{display:visibleLogic }}  onMouseLeave={() => setIsHiddenVisible(false)} className='recipe-item__hidden'>
          <button>Use</button><button>Preview</button>
          </div>
     <div className="recipe-item__text">
         <span className='span-title'>{`${title}`}</span> <br/> {`${description}`}
     </div>
   </div>
  )
}

export default RecepiItem