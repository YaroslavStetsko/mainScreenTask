import './css/index.css';
import {useState, useEffect} from 'react';
//components
import Header from './components/Header';
import ProjectCreator from './components/Project/PtojectCreator';
import Recipes from './components/Recipe/Recipes';
import Projects from './components/Project/Projects';
import { projectItem } from './components/Project/ProjectItem';
import { recipiItemProps } from './components/Recipe/RecipeItem';
import { recipeRequest, projectsRequest } from './services/dbFetch';

function App():JSX.Element {

interface appStateProps {
  isRecipesLoaded: boolean,
  recipes: recipiItemProps[],
  isProjectsLoaded: boolean,
  projects: projectItem[]
} 

const initState : appStateProps = {
  isRecipesLoaded: false,
  recipes: [],
  isProjectsLoaded: false,
  projects: []
}

const [appState, setAppState] = useState(initState)

useEffect(() => {
  Promise.all([recipeRequest(),projectsRequest()]).then(data => {
    const newState = {
      isRecipesLoaded: true,
      recipes: data[0],
      isProjectsLoaded: true,
      projects: data[1]
    }
    setAppState(newState)
  })
},[])

  return (
    <div className='app-wrapper'>
      <Header/>
     <main>
       <ProjectCreator/>
       {appState.isRecipesLoaded ? <Recipes recipes = {appState.recipes} /> : <h2>Loading data ...</h2>}
       {appState.isProjectsLoaded ? <Projects projects= {appState.projects} /> : <h2>Loading data ...</h2>}
     </main>
    </div>
  );
}

export default App;
