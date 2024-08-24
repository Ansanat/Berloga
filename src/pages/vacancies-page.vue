<template>
  <div class="v-vacancies-page" id="vacancies-page">
    <div class="v-service-card">
      <img src="@/images/parmaster.jpg" class="service-img"/>
      <div class="service-name">
        Пармастер
      </div>
      <div class="service-description">
        Опыт неважен <br>
        График сменный<br>
        ЗП от 40.000 руб<br>
      </div>
    </div>

    <div class="v-service-card">
      <img src="@/images/povar.jpg" class="service-img"/>
      <div class="service-name">
        Повар
      </div>
      <div class="service-description">
        Опыт от одного года <br>
        График сменный<br>
        ЗП от 40.000 руб<br>
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
.v-service-card{
  color: black;
  text-decoration: none;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  display: inline-block;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  height: auto;
  width: 430px;
  background-color: white;
  box-shadow: 3px 3px 10px gray;
}

.service-name{
  padding-top: 10px;
  margin: auto;
  text-align: center;
  font-size: 30px;
  width: 310px;
  font-weight: bold;
}

.service-button{
  font-size: 15px;
  margin: auto;
  margin-top: 10px;
  height: 30px;
}

.service-description{
  font-size: 20px;
  padding-top: 4px;
  margin: auto;
  text-align: center;
  width: 420px;
  height: 90px;
}

.v-service-card:hover{
  box-shadow: 3px 3px 20px gray;
}

.service-img{
  width: 100%;
  aspect-ratio: 16 / 12;
  object-fit: cover;
}

@media screen and (max-width: 700px) {
  .v-service-card{
    text-align: center;
    width: 85%;
    height: auto;
    padding-bottom: 10px;
  }
  .service-description{
    width: 290px;
    height: auto;
  }

}
@media screen and (min-width: 701px) and  (max-width: 1100px){
  .v-service-card{
    text-align: center;
    width: 85%;
    height: auto;
    padding-bottom: 10px;
  }
}
</style>
