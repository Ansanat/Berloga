<template>
    <div class="v-gallery">
        <img class="gallery" src="@/images/res.jpg"  id="rybak" />
    </div>
</template>

<script>
    export default {
        name: 'v-gallery',
    }

</script>

<style>
.gallery{
    width: 100%;
    aspect-ratio: 16 / 6;
    object-fit: cover;
}


@media screen and (max-width: 700px) {
    .gallery{
        aspect-ratio: 3 / 3;
        object-fit: cover;
    }
}
</style>