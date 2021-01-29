<template>
  <div>
    <el-header>
      <top-bar />
    </el-header>
    <el-container class="main">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)" v-if="$store.state.user.userName">
        <el-menu :router="true" :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>国际化</template>
            <el-menu-item-group>
              <el-menu-item v-for="(v,k) in menuList" v-bind:key="k" :index="'1-'+k" :route="v.router">{{v.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-menu"></i>导航二</template
            >
            <el-menu-item-group>
              <template slot="title"
                >分组一</template
              >
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title"
                >选项4</template
              >
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <nuxt />
        </el-main>
      </el-container>
    </el-container>
    <!-- <el-footer class="footer">
      <Footer />
    </el-footer> -->
  </div>
</template>

<script>
import TopBar from "~/components/topBar";
import Footer from "~/components/footer";
import menuConfig from "../configs/menuNavigation";
export default {
  components: {
    TopBar,
    Footer,
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
.footer {
  position: absolute;
  bottom: 0;
  width: calc(100% - 20px);
}
.main {
  min-height: 600px;
}
</style>
