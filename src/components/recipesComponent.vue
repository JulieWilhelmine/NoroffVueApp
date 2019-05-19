<template>
  <div class="[ card ]">
    <div class="[ row ]">
      <div class="[ col-sm-4 ]"></div>
      <div class="[ col-sm-4 ]"><img :src="recipeImg" /><br /><br /><br /></div>
      <div class="[ col-sm-4 ]"></div>
    </div>
        <div class="[ card--information ]"><br />
            <b>Title: </b>{{title}}<br />
            <b>Ingredients: </b>{{ingredients}}<br />
            <b>Recipe: </b><a href="recipe" target="_blank">Click Here</a><br />
        </div>
        </div>
</template>

<script>
export default {
  name: 'recipesComponent',
  props: ['recipeImg', 'title', 'ingredients', 'recipe'],
}
</script>

<style scoped>
.card{
    border: solid 1px orange;
    border-radius: 4px;
    padding: 0px 20px 30px;
    margin-top: 30px
}

.card img{
    width: 100%;
    padding-top: 20px;
}
</style>
