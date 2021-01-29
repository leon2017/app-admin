<template>
  <section class="layout">
    <aside
      class="layout-aside aside-fixed">
      <logo></logo>
      <aside-menu></aside-menu>
    </aside>
    <section
      class="layout layout-main"
      :style="{ paddingLeft: '256px' }">
      <div
        class="layout-header" >
        <top-bar />
      </div>
      <div class="relative container-main" ref="mainBox" style="padding: 20px">
        <el-card>
          <nuxt></nuxt>
        </el-card>
      </div>
    </section>
    <el-backtop></el-backtop>
  </section>
</template>

<script>
import TopBar from "~/components/topBar";
import Footer from "~/components/footer";
import AsideMenu from "~/components/AsideMenu";
import Logo from "~/components/Logo";
import menuConfig from "../configs/menuNavigation";
export default {
  components: {
    TopBar,
    Footer,
    AsideMenu,
    Logo,
  },
  data() {
    return {
      menuList: menuConfig,
    };
  },
  methods: {
    // changeMenu(active) {
    //   console.log("我被切换", active);
    //   let menu = menuConfig.find((m) => m.name == active);
    //   if (menu) {
    //     this.$router.push({
    //       name: menu.router,
    //     });
    //   }
    // },
  },
};
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  flex: auto;
  min-height: 0;
  background: #f0f2f5;
  box-sizing: border-box;
  flex-direction: row;

  .layout-aside {
    width: 256px;
    background: #001529;
    transition: all 0.3s ease-in-out;
    box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);

    &.aside-fixed {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      min-height: 100vh;
    }
  }
}

.layout-main {
  flex-direction: column;
  min-height: 100vh;
}

.layout-header {
  width: 100%;
  height: 64px;
  padding: 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  position: relative;
  height: 60px;
}

.container-main {
  position: absolute;
  left: 256px;
  right: 0;
  top: 65px;
  bottom: 0;
  overflow-y: scroll;
}

.logo {
  padding: 0 10px;

  img {
    width: 40px;
  }
}
</style>
