<template>
<div class="v-footer">
        <div class="cities-background">
            <div class="cities">
                <a href="#"><div class="city" style="background-color: #D2B48C;">Новосибирск</div></a>
                <a href="https://берлогакраснообск.рф/"><div class="city">Краснообск</div></a>
                <a href="https://xn--c1adicrgbtec3etdua.xn--p1ai/"><div class="city">Нерюнгри</div></a>
            </div>
        </div>
        <div class="footer">
            <a href="https://go.2gis.com/u66wp" style="text-decoration: none; color: white;">
                <div class="footer-adress">
                    <div>г. Новосибирск, Трикотажный 5-й переулок 23</div>
                    <div style="text-align: center; margin-top: 5px;">292-07-09</div>
                    <div class="icon-block">
                        <span><a href="https://t.me/ErchimBerloga"><img class="icon" src="@/images/telegram_logo.png" /></a></span>
                        <span><a href="https://vk.com/berlogansk"><img class="icon" src="@/images/VK_logo.png" /></a></span>
                        <span><a href="https://www.instagram.com/berlogansk/"><img class="icon" src="@/images/Inst_logo.png" /></a></span>
                    </div>
                </div>
            </a>

            <div class="copyright"> &#169; Берлога 2024 г.</div>
        </div>
</div>
</template>

<script>
    export default {
    name: 'v-footer',
    }
</script>

<style>
.cities-background{
    border-right: 5px solid #121820;
    border-left: 5px solid #121820;
    object-fit: cover;
    height: 200px;
    position: relative;
    background-image: url(@/images/nsk_fon.JPG);
}

.icon-block {
    margin-top: 5px;
}

.icon {
    width: 35px;
    margin: 2px;
}

.cities {
    position: absolute;
    width: 700px;
    height: 60px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); 
}

.city {
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
    width: 200px;
    font-size: 20px;
    font-family: Helvetica;
    color: #121820;
    font-weight: bold;
    font-style: italic;
}

.city:hover{
    background-color: #D2B48C;
}

.footer {
    background-color: #121820;
    width: 100%;
    height: 160px;
    position: relative;
}

.footer-adress{
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    font-family: Helvetica;
    color: white;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    text-decoration: none;
    width: 90%;
}

.copyright{
    font-size:15px;
    color: #858181;
    font-family: Helvetica;
    position: absolute;
    left: 50%;
    top: 90%;
    transform: translate(-50%, -50%);
}

.footer-adress:hover{
    color:#D2B48C;
}

@media screen and (max-width: 700px) {
    .cities-background{
        height: 300px;
    }

    .footer {
        height: 200px;
    }
    .cities {
        position: absolute;
        width: 300px;
        height: 110px;
        left: 60%;
        top: 30%;
        transform: translate(-50%, -50%); 
    }
    .city {
        margin-top: 10px;
        margin-left: 0px;
        margin-right: 0px;
    }
}
</style>