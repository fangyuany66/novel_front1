<template>
  <section>
<!--    &lt;!&ndash;是否登录&ndash;&gt;-->
    <login-welcome />

<!--    &lt;!&ndash;今日赠言&ndash;&gt;-->
    <tip-card />

<!--    &lt;!&ndash;资源推介&ndash;&gt;-->
<!--    <PromotionCard />-->
  </section>


</template>

<script>
 import TipCard from '@/views/card/Tip'
// import PromotionCard from '@/views/card/Promotion'
 import LoginWelcome from '@/views/card/LoginWelcome'

export default {
  name: 'CardBar',
   components: { LoginWelcome,TipCard }// PromotionCard,
}
</script>

<style scoped>
</style>
