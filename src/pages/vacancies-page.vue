<template>
  <div class="v-vacancies-page" id="vacancies-page">
    <div class="vacant-card">
      <div class="vacant-name">Пармастер</div>
      <div class="vacant-text">
        Опыт неважен<br>
        График сменный<br>
        ЗП от 40.000 руб
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'vacancies-page',
  components: {
  }
}
</script>

<style>
.vacant-card{
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  width: 300px;
  display: inline-block;
  height: 200px;
  background-color: white;
  cursor: pointer;
  border-radius: 20px;
  border: 2px solid black;
  box-shadow: 10px 10px 15px gray;
}

.vacant-card:hover{
  box-shadow: 10px 10px 25px gray;
}

.vacant-name{
  font-size: 30px;
  text-align: center;
  margin-top: 5px;
}

.vacant-text{
  font-size: 20px;
  margin-top: 30px;
  text-align:center;
  margin-bottom: 20px;
}

@media screen and (max-width: 700px) {
  .vacant-card{
    width: 99%;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 0 0px gray;
  }
}

@media screen and (min-width: 701px) and  (max-width: 1100px){

}
</style>
