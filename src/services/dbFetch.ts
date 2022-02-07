export const recipeRequest = async () => {
  try{
    const request = await fetch('http://localhost:3004/recipes');
    const respond = await request.json();
    return respond
  }
  catch (error) {
      console.log(`An error ${error} has occured`)
  }

}
export const projectsRequest = async () => {
  try{
    const request = await fetch('http://localhost:3004/projects');
    const respond = await request.json();
    return respond
  }
  catch (error) {
    console.log(`An error ${error} has occured`)
  }
 
}