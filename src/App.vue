<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    let that = this;
    this.getDeviceType();
    that.getDefaultWH();
    window.addEventListener("resize",that.getDefaultWH,false);
    console.log("lianxi")
    console.log("lianxi")
  },
  mounted(){
    let that = this;
    that.getRem(750,100);
    window.addEventListener("resize", that.getRem(750,100), false);
    that.stopsuofang();

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
    },
    getDefaultWH(){
      let that = this;
      let width = that.getBrowserInterfaceSize().pageWidth;
      let height = that.getBrowserInterfaceSize().pageHeight;
      let json = {width:width,height:height}
      this.$store.commit({
        type: "documentWH",
        value: json
      }); 
    },
    getBrowserInterfaceSize() {
      var pageWidth = window.innerWidth;
      var pageHeight = window.innerHeight;
      if (typeof pageWidth != "number") {
          //在标准模式下面
          if (document.compatMode == "CSS1Compat" ) {
              pageWidth = document.documentElement.clientWidth;
              pageHeight = document.documentElement.clientHeight;
          } else {
              pageWidth = document.body.clientWidth;
              pageHeight = window.body.clientHeight;
          }
      }

      return {
          pageWidth: pageWidth,
          pageHeight: pageHeight
      }
    },
    getRem(pwidth,prem){
      var html = document.getElementsByTagName("html")[0];
      var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
      html.style.fontSize = oWidth/pwidth*prem + "px";
    },
    stopsuofang(){
      window.onload = function() {
        document.addEventListener('touchstart', function(event) {
          if (event.touches.length > 1) {
            event.preventDefault()
          }
        })
        document.addEventListener('gesturestart', function(event) {
          event.preventDefault()
        })
      }
    }
  }
}



</script>

<style>
html,
body {
  height: 100%;
  width:100%;
  overflow: hidden;
  background-color: #fcfcfc;
  margin:0;
  padding:0;
}
body{
  /* height:100%; */
  /* overflow: scroll; */
  box-shadow:  0 0 10px red inset;
}
#app {
  /* display: none; */
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
