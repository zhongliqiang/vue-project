<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    this.getDeviceType();
  },
  methods:{
    getDeviceType(){
      var os = function (){
      　　var ua = navigator.userAgent,
      　　isWindowsPhone = /(?:Windows Phone)/.test(ua),
      　　isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
      　　isAndroid = /(?:Android)/.test(ua),
      　　isFireFox = /(?:Firefox)/.test(ua),
      　　isChrome = /(?:Chrome|CriOS)/.test(ua),
      　　isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
      　　isPhone = /(?:iPhone)/.test(ua) && !isTablet,
      　　isPc = !isPhone && !isAndroid && !isSymbian;
      　　return {
      　　　　isTablet: isTablet,
      　　　　isPhone: isPhone,
      　　　　isAndroid: isAndroid,
      　　　　isPc: isPc
      　　};
      }();
      let type = "pc";
      if (os.isAndroid || os.isPhone) {
          type="phone";
      } else if (os.isTablet) {
          type="pad";
      } else if (os.isPc) {
          type="pc";
      }
      this.$store.commit({
        type: "deviceType",
        value: type
      }); 
    }
  },
  mounted(){
  }
}



</script>

<style>
html,
body {
  height: 100%;
  overflow: hidden;
  background-color: #fcfcfc;
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #999;
  height: 100%;
  background-image: url("assets/img/bg.png");
  background-size: 100% 100%;
}

</style>
