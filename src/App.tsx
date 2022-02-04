import './css/index.css';
import {useState, useEffect} from 'react';
//components
import Header from './components/Header';
import ProjectCreator from './components/PtojectCreator';
import Recipes from './components/Recipes';
import Projects from './components/Projects';
import { projectItem } from './components/ProjectItem';
import { recipiItemProps } from './components/RecipeItem';

function App():JSX.Element {
const [isRecipesLoaded, setIsRecipeIsLoaded] = useState<boolean>(false);
const [recipes, setRecipes] = useState<recipiItemProps[]>([]); 
const [isProjectsLoaded, setIsProjectLoaded] = useState<boolean>(false);
const [projects, setProjects] = useState<projectItem[]>([]);

useEffect(() => {
  const recipeRequest = async () => {
    const request = await fetch('http://localhost:3004/recipes');
    const respond = await request.json();
    return respond
  }
  const projectsRequest = async () => {
    const request = await fetch('http://localhost:3004/projects');
    const respond = await request.json();
    return respond
  }
  recipeRequest().then(data => setRecipes(data));
  projectsRequest().then(data => setProjects(data));
  setIsRecipeIsLoaded(true);
  setIsProjectLoaded(true);
},[])

  return (
    <div className='app-wrapper'>
      <Header/>
     <main>
       <ProjectCreator/>
       {isRecipesLoaded ? <Recipes recipes = {recipes} /> : <h2>Loading data ...</h2>}
       {isProjectsLoaded ? <Projects projects= {projects} /> : <h2>Loading data ...</h2>}
     </main>
    </div>
  );
}

export default App;
