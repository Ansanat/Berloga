<template>
    <div class="v-gallery">
        <img class="gallery" src="@/images/banya/Image1.jpeg"  @load="gallery(6)" id="rybak" />
    </div>
</template>

<script>
    var i_gallery=2;
    export default {
        name: 'v-gallery',
        methods: {
            gallery(imgCount) {
                setTimeout(() => {
                    if (i_gallery < imgCount)
                        i_gallery++;
                    else
                        i_gallery = 1;
                    document.getElementById('rybak').id = 'rybak'+i_gallery;
                }, 5000);
            }
        }
    }

</script>

<style>
.gallery{
    width: 100%;
    aspect-ratio: 16 / 4;
    object-fit: cover;
}

#rybak {
    animation: ease 5s, hide 3s ease 1s;
    animation-fill-mode: forwards;
    opacity:1;
 }
 #rybak1 {
    background: url('@/images/banya/Image2.jpeg');
    animation: ease 5s, hide 3s ease 1s;
    animation-fill-mode: forwards;
    opacity:1;
 }
@keyframes show{
    0%{
        opacity:0;
    }
    100% {
        opacity:1;
    }
}
@keyframes hide{
    0%{
        opacity:1;
    }
    100% {
        opacity:0;
    }
}

@media screen and (max-width: 700px) {
    .gallery{
        aspect-ratio: 3 / 3;
        object-fit: cover;
    }
}
</style>