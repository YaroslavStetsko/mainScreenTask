import '../css/index.css';
import RecepiItem, { recipiItemProps } from '../components/RecipeItem';



interface recipesProps {
  recipes : recipiItemProps[]
}

const Recipes = ({ recipes }: recipesProps) : JSX.Element => {


  return (
       <div className="recipes-wrapper">
         <div className="recipes__info-block">
          <div className="recipes__info-block-title">
             RECCOMENDED RECIPES <br/>
             Browse throught our recepies to learn about use cases to implement in your app
          </div>
          <div className="recipes__info-block-bnts">
            <button className='info-btn'>View All</button>
            <button className='info-btn'><img src="/Assets/close.svg" alt="close icon" /></button>
            </div>
         </div>
         <div className="recipes__recommended-recepies">
             {recipes.map((el:recipiItemProps) => {
               return (
                 <RecepiItem
                 id = {el.id}
                 title = {el.title}
                 description = {el.description}
                 src = {el.src}
                 key = {el.id}                                
                 />
               )
             })}
         </div>
       </div>
  )
}

export default Recipes