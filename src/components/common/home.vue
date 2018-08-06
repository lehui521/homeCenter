<template>
    <div class="pages">
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

