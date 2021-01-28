<template>
  <div class="footer">
    <el-divider></el-divider>
    <div class="copy-right">
      <span>Copyright © 2021 Lightinthebox All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  height: 88px;
}
.copy-right {
  .flex-justify-align--center;
  color: @blackColor;
  a {
    .marginL(20px);
    color: @redColor;
  }
}
</style>