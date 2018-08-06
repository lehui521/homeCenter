<template>
    <div class="home">
        <keep-alive>
            <!-- 防止重复复渲染dome -->
            <router-view></router-view>
        </keep-alive>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "./footer.vue"
export default {
    components:{Footer}
}
</script>
<style lang="scss" scoped>
.home{
    padding-bottom:1.2rem;
}
</style>


