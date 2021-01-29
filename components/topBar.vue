<template>
  <div class="top-bar">
    <User/>
  </div>
</template>

<script>
import User from '~/components/user'
  export default {
    components: {
      User
    }
  }
</script>

<style lang="less" scoped>
.top-bar {
  display: flex;
  height: 64px;
  justify-content: flex-end;
  align-items: center;
}
</style>