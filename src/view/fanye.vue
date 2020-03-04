<template>
  <div class="container-fluid" style="height:100%">
    <div class="row">
      <div class="col-md-12">
      </div>
    </div>
    <div class="flipbook-viewport">
      <div class="container2">
        <div class="flipbook" id="flipbook">
            <div :class="{'first':item == 1,'last':item == fanyeData.length}" v-for="item in fanyeData" :key="item.id"><drag :dataArr="item.arr" :suoyinId="item.id" @dataChange="dataChange" @editBook="editBook"></drag></div>
        </div>
      </div>
      <div class="flipbookControl">
        <div> <el-button @click="previousFun">上一页</el-button><el-button @click="nextFun">下一页</el-button> </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import drag from "../components/drag.vue";
export default {
  name: "transition-example-2",
  // display: "Transitions",
  components: {
    drag
  },
  data() {
    return {
      editBookTog:false,
      maxImg:9,
      picSrc : "https://www.baidu.com/img/bd_logo1.png",
      //模仿后台数据
      fanyeData:[{id:1,arr:[{id:11,src:"https://www.baidu.com/img/bd_logo1.png"},
                            {id:22,src:"https://pg-ad-b1.ws.126.net/yixiao/23698/e365c0c6458efca0a29c9ff4ab90b198.jpg"},
                            {id:9999,src:""}]},
                {id:2,arr:[{id:11,src:"https://www.baidu.com/img/bd_logo1.png"},{id:22,src:"https://pg-ad-b1.ws.126.net/yixiao/23698/e365c0c6458efca0a29c9ff4ab90b198.jpg"},{id:33,src:"https://www.baidu.com/img/bd_logo1.png"},{id:44,src:"https://www.baidu.com/img/bd_logo1.png"}]},
                {id:3,arr:[{id:111,src:"https://www.baidu.com/img/bd_logo1.png"},{id:222,src:"https://pg-ad-b1.ws.126.net/yixiao/23698/e365c0c6458efca0a29c9ff4ab90b198.jpg"},{id:333,src:"https://www.baidu.com/img/bd_logo1.png"},{id:444,src:"https://www.baidu.com/img/bd_logo1.png"}]},
                ]
    };
  },
  computed: {
    ...mapState({
      deviceType: state => state.deviceType
    })
  },
  mounted(){
    let that = this;
    that.xinFanye();
    alert(that.deviceType)
  },
  methods: {
    editBook(val){
      this.editBookTog = val;
      // alert(val)
    },
    dataChange(data){
      let that = this;
      let id = data.suoyin;
      let newPic = data.newPic;
      console.log(newPic)
      //axios
      for(let i=0,len=that.fanyeData.length;i<len;i++){
        if(that.fanyeData[i].id == id){
          let kongwei = that.maxImg + 1 - that.fanyeData[i].arr.length;    //计算空余位置 +1是  一个添加按钮占位
          console.log(kongwei)
          let charuImg = newPic.splice(0,kongwei);
          console.log(charuImg)
          that.fanyeData[i].arr.splice(that.fanyeData[i].arr.length-1,0,...charuImg)
        }
      };
      console.log(that.fanyeData[0].arr)
    },
    changArr(arr){
      arr.push({id:99999});
      arr.splice(arr.length-1,1)
    },
    fanye(){
      alert("cuowule")
        var numberOfPages = 1000; 
        function addPage(page, book) {
            if (!book.turn('hasPage', page)) {
            var element = $('<div />', {'class': 'page '+((page%2==0) ? 'odd' : 'even'), 'id': 'page-'+page}).html('<i class="loader"></i>');
            book.turn('addPage', element, page);
            setTimeout(function(){
                element.html('<div class="data">Data for page '+page+'</div>');
            }, 1000);
            }
        }
        $(window).ready(function(){
            $('#book').turn({acceleration: true,
                pages: numberOfPages,
                elevation: 50,
                gradients: !$.isTouch,
                when: {
                    turning: function(e, page, view) {
                    var range = $(this).turn('range', page);
                    for (page = range[0]; page<=range[1]; page++) 
                        addPage(page, $(this));
    
                    },
    
                    turned: function(e, page) {
                    $('#page-number').val(page);
                    }
                }
            });
            $('#number-pages').html(numberOfPages);
            $('#page-number').keydown(function(e){
            if (e.keyCode==13)
                $('#book').turn('page', $('#page-number').val());
            });
        });
        $(window).bind('keydown', function(e){
            if (e.target && e.target.tagName.toLowerCase()!='input')
            if (e.keyCode==37)
                $('#book').turn('previous');
            else if (e.keyCode==39)
                $('#book').turn('next');
        });
    },
    previousFun(){
      if(this.editBookTog == true){
        this.$message({
          message: '请保存后,重新尝试.',
          type: 'error'
        });
        return;
      }
      $(".flipbook").turn("disable", false);
      $('.flipbook').turn('previous');
      $(".flipbook").turn("disable", true);
    },
    nextFun(){
      if(this.editBookTog == true){
        this.$message({
          message: '请保存后,重新尝试.',
          type: 'error'
        });
        return;
      }
      $(".flipbook").turn("disable", false);
      $('.flipbook').turn('next');
      $(".flipbook").turn("disable", true);
    },
    xinFanye(){
      function loadApp() {
        $('.flipbook').turn({
            width:922,
            height:600,
            elevation: 50,
            gradients: true,
            // display: 'single',
            autoCenter: true
        });
        // $('.flipbook').turn('page', 3);   跳页
        $(".flipbook").turn("disable", true);
        // $(".flipbook").turn("size", 1600, 900);
        // $(".flipbook").turn("peel", "br");
        $(document).keydown(function(e){
        var previous = 37, next = 39;
        switch (e.keyCode) {
          case previous:
          $('.flipbook').turn('previous');
          break;
          case next:
          $('.flipbook').turn('next');
          break;
        }
        });	
      }
      yepnope({
        // test : Modernizr.csstransforms,
        // yep: ['./static/turn.min.js'],
        // nope: ['./static/turn.html4.min.js'],
        // both: [""],
        // both: ['./static/css/basic.css'],
        complete: loadApp
      });

    },
  },

    };
</script>
    <style lang="scss">
      .flipbookControl{
        position:absolute;
        top:calc(50% + 300px + 10px);
        left:0;
        right:0;
        margin:auto;
      }
      .flipbook-viewport{
        overflow:hidden;
        width:100%;
        height:100%;
      }

      .flipbook-viewport .container2{
        position:absolute;
        top:50%;
        left:50%;
        margin:auto;
      }

      .flipbook-viewport .flipbook{
        width:922px;
        height:600px;
        left:-461px;
        top:-300px;
      }

      .flipbook-viewport .page{
        width:461px;
        height:600px;
        background-color:white;
        background-repeat:no-repeat;
        background-size:100% 100%;
      }

      .flipbook .page{
        -webkit-box-shadow:0 0 20px rgba(0,0,0,0.2);
        -moz-box-shadow:0 0 20px rgba(0,0,0,0.2);
        -ms-box-shadow:0 0 20px rgba(0,0,0,0.2);
        -o-box-shadow:0 0 20px rgba(0,0,0,0.2);
        box-shadow:0 0 20px rgba(0,0,0,0.2);
      }

      .flipbook-viewport .page img{
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        margin:0;
      }

      .flipbook-viewport .shadow{
        -webkit-transition: -webkit-box-shadow 0.5s;
        -moz-transition: -moz-box-shadow 0.5s;
        -o-transition: -webkit-box-shadow 0.5s;
        -ms-transition: -ms-box-shadow 0.5s;

        -webkit-box-shadow:0 0 20px #ccc;
        -moz-box-shadow:0 0 20px #ccc;
        -o-box-shadow:0 0 20px #ccc;
        -ms-box-shadow:0 0 20px #ccc;
        box-shadow:0 0 20px #ccc;
      }

      .flipbook .odd{
        background: #fff;
        background-image:-webkit-linear-gradient(right, #fff 95%, #dadada 100%);
        background-image:-moz-linear-gradient(right, #fff 95%, #dadada 100%);
        background-image:-ms-linear-gradient(right, #fff 95%, #dadada 100%);
        background-image:-o-linear-gradient(right, #fff 95%, #dadada 100%);
        background-image:linear-gradient(right, #fff 95%, #dadada 100%);
        // background-image: none;
      }
      
      .flipbook .even{
        background-image:-webkit-linear-gradient(left, #fff 95%, #dadada 100%);
        background-image:-moz-linear-gradient(left, #fff 95%, #dadada 100%);
        background-image:-ms-linear-gradient(left, #fff 95%, #dadada 100%);
        background-image:-o-linear-gradient(left, #fff 95%, #dadada 100%);
        background-image:linear-gradient(left, #fff 95%, #dadada 100%);
      }
    </style>
