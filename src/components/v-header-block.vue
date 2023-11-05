<template>
    <div class="v-header-block">
        <img class="block-background" src="@/images/head-block/block1.jpg"/>
        <div class="block-container">
            <div class="block-text">Добро пожаловать в современную общественную баню</div>
            <div class="block-text">Берлога</div>
            <!-- <div class="block-text">г. Новосибирск, Трикотажный 5-й переулок 23</div>
            <div class="block-text">292-07-09</div> -->
            <div class="info-button">Подробнее</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-header-block',
        props: {
        text: String,
    },
    components: {
  }
}
</script>

<style>
.v-header-block {
    border: 4px solid #121820;
    position: relative;
    width: 100%;
    box-sizing: border-box;
}
.block-background {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
}

.block-container{
    width: 500px;
    font-size: 30px;
    color: white;
    position: absolute;
    left: 51%;
    top: 73%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.block-text {
    -webkit-text-stroke: 1px black;
    text-stroke: 1px #121820;
    font-weight: bold;
    margin-top: 5px;
    text-shadow: 2px 2px 5px black;
}

.info-button{
    margin-top: 20px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    line-height: 60px;
    display: inline-block;
    background-color: rgb(222, 222, 222);
    border-color: #121820;
    border-style: solid;
    height: 60px;
    width: 180px;
    font-size: 16px;
    color: #121820;
    font-weight: bold;
    font-style: italic;
}

.info-button:hover{
    background-color: #D2B48C;
}

@media screen and (max-width: 700px) {
    .block-background {
        aspect-ratio: 9 / 14;
    }
    .block-container{
        top: 73%;
        font-size: 20px;
        width: 200px;
    }
    .block-text {
        -webkit-text-stroke: 0px black;
        text-stroke: 0px #121820;
        font-weight: 1;
        margin-top: 5px;
        text-shadow: 2px 2px 5px black;
    }
}

</style>