<template>
    <div class="main">
            <ZNav/>
            <All/>
    </div>
</template>

<script>
import ZNav from "@/components/nav";
import All from "@/components/type/All types"
export default {
    name:'type',
    components: {
        ZNav,
        All
    }
}
</script>

<style lang="scss" scoped>
   .main{
       
   }
</style>