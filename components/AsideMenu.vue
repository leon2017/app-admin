<template>
  <div>
    <el-menu router :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"
            ><i class="el-icon-message"></i>国际化</template
          >
          <el-menu-item-group>
            <el-menu-item
              v-for="(v, k) in menuList"
              v-bind:key="k"
              :index="v.name"
              :route="v.router+'?typeName='+v.name"
              >{{ v.name }}</el-menu-item
            >
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
  </div>
</template>

<style lang="less" scoped>
  .icon {
    font-size: 20px;
  }

  .menu-vertical:not(.el-menu--collapse) {
    width: 256px;
  }

  .el-menu--collapse {
    width: 80px;

    .collapse-text-center {
      text-align: center;
    }
  }

</style>

<script>
  import menuConfig from "../configs/menuNavigation";

  export default {
    name: 'AsideMenu',
    props: [
      'collapse'
    ],

    data() {
      return {
        activeRoute: 'index',
        menuList: menuConfig
      };
    },

    created() {
      this.activeRoute = this.parseRoute(this.$route.path)
    },

    watch: {
      '$route'(newVal, oldVal) {
        console.log(newVal)
        this.activeRoute = this.parseRoute(newVal.path)
      }
    },

    methods: {
      parseRoute(fullPath) {
        if (fullPath == '/') {
          return 'index'
        }
        let segmentation = fullPath.split('/')
        if (segmentation[0] === '') {
          segmentation.shift()
        }

        if (segmentation.length < 2) {
          return segmentation[0]
        }

        let res = segmentation.filter(item => {
          return !(/^\d+$/.test(item))
        })

        return res.join('-')
      },

      selectMenu(key, keyPath) {
        console.log('selectMenu', key, keyPath);
      },

      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
