<template>
  <div class="layout">
    <Sider
      :style="{ position: 'fixed', height: '100vh', left: 0, overflow: 'auto' }"
    >
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']"
        @on-select="changeMenu">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            国际化
          </template>
          <MenuItem name="international-one">主站1</MenuItem>
          <MenuItem name="international-two">主站2</MenuItem>
          <MenuItem name="international-three">主站3</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>
            Item 2
          </template>
          <MenuItem name="2-1">Option 1</MenuItem>
          <MenuItem name="2-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            Item 3
          </template>
          <MenuItem name="3-1">Option 1</MenuItem>
          <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{ marginLeft: '200px' }">
      <Content :style="{ padding: '0 16px 16px' }">
        <Nuxt />
      </Content>
      <Header
        :style="{
          theme: 'dark',
          position: 'fixed',
          width: '100%',
        }"
      ></Header>
    </Layout>
  </div>
</template>
<script>
export default {
    methods: {
        changeMenu (active) {
            console.log("我被切换",active);
            switch (active) {
              case "international-one":
                this.$router.push({
                    name: "international"
                });
                break;
                case "international-two":
                
                break;
                case "international-three":
                
                break;
            
              default:
                break;
            }
        },
    },
};
</script>
<style scoped>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>
