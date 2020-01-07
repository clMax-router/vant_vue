<template>
    <div>
        <Nav/>
        <User/>
    </div>
</template>

<script>
import User from "@/components/user";
import Nav from  "@/components/nav/index2"
    export default {
    name:'user',
    components:{
        User,
        Nav
    }
}
</script>

<style lang="scss" scoped>

</style>