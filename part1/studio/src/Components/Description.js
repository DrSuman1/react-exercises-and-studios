import styles from './Description.module.css';
import React from 'react';



function RecipeAuthor(){
const authorLink='https://pinchofyum.com';
const authorPhoto='https://pinchofyum.com/wp-content/uploads/Chili-Garlic-Noodles-61-2-225x225.jpg'
const authorName = '';
return (
    <div className = {styles.recipeAuthorBlock}>
       <img src={authorPhoto} alt = "Author" className={styles.imageUpdates} />
       <div>
          <h3>{authorName}</h3>
          <a href={authorLink}>Blog name</a> 
       </div>
    </div>
 );
}
 class RecipeDescription extends React.Component
 {
     render(){
    return(
        <div> 
            <div>
                <h1>Recipe Title</h1>
                <p>Short recipe description</p>
            </div>
            <RecipeAuthor />
        </div>
        )
 }
}
export default RecipeDescription;
 