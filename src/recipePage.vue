<template>
    <div class="[ row ]">
      <div v-for="recipe in recipes" class="[ col-sm-12 ]">
        <recipesComponent v-bind:recipeImg="recipe.thumbnail"
                             v-bind:title="recipe.title"
                             v-bind:ingredients="recipe.ingredients"
                             v-bind:recipe="recipe.href">
        </recipesComponent>
    </div>
  </div>
</template>

<script>
import recipesComponent from './components/recipesComponent.vue'
export default {
 name: 'Recipes',
 components:{
   recipesComponent
 },
 data(){
  return{
    recipes: []
  }
 },
 beforeMount: function(){
  const app = this;

  const conversionUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'http://www.recipepuppy.com/api/';

      fetch(conversionUrl + url)
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        app.recipes = result;
      })
 }
}
</script>
