<template>
    <div class="v-nav-bar">
        <ul class="menu-list">
        <router-link :to="{ name: 'Main', hash: '#main-page'}" style="text-decoration: none;"><li class="menu-item">Главная</li></router-link>
            <router-link :to="{ name: 'Main', hash: '#maleTime'}" style="text-decoration: none;"><li class="menu-item">Мужское время</li></router-link>
            <router-link :to="{ name: 'Main', hash: '#femaleTime'}" style="text-decoration: none;"><li class="menu-item">Женское время</li></router-link>
            <router-link :to="{ name: 'Family', hash: '#family-page'}" style="text-decoration: none;"><li class="menu-item">Семейный номер</li></router-link>
            <router-link :to="{ name: 'Kitchen', hash: '#kitchen-page'}" style="text-decoration: none;"><li class="menu-item">Кухня</li></router-link>
            <router-link :to="{ name: 'Kitchen', hash: '#kitchen-page'}" style="text-decoration: none;"><li class="menu-item">Аксессуары и доп. услуги</li></router-link>
            <router-link :to="{ name: 'Contacts', hash: '#contacts-page'}" style="text-decoration: none;"><li class="menu-item">Контакты</li></router-link>
            <router-link :to="{ name: 'Vacancies', hash: '#vacancies-page'}" style="text-decoration: none;"><li class="menu-item">Вакансии</li></router-link>
            <router-link :to="{ name: 'Rules', hash: '#rules-page'}" style="text-decoration: none;"><li class="menu-item">Правила посещения</li></router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'v-nav-bar',
    }
</script>

<style>
.v-nav-bar {
    margin: none;
    display: block;
    padding-top: 1%;
    padding-bottom: 1%;
    background-color: #121820;
    text-decoration: none;
}

.menu-list {
    text-decoration: none;
    text-align: center;
    list-style: none;
}

.menu-item {
    text-decoration: none;
    display: inline-block;
    margin-left: 1%;
    margin-right: 1%;
    font-size: 1.2em;
    color: white;
    cursor: pointer;
}

.menu-item:hover {
    color: #D2B48C;
}

@media screen and (max-width: 700px) {
    .menu-item {
        text-decoration: none;
        margin-left: 0px;
        display: block;
        margin-top: 10px;
        font-size: 20px;
    }
}

@media screen and (min-width: 701px) and  (max-width: 1100px){
    .menu-item {
        font-size: 1em;
    }
}
</style>