<template>
  <div class="container-fluid">
    <div>fanye</div>
    <!-- <div class="row">
      <div class="col-md-6">
        <div id="book">
          <div class="cover"><h1>The Bible</h1></div>
        </div>
        <div id="controls">
          <label for="page-number">Page:</label> <input type="text" size="3" id="page-number"> of <span id="number-pages"></span>
        </div>
      </div>
      <div class="col-md-4">
        <button class="btn btn-secondary button" @click="sort">
          To original order
        </button>
      </div>
      <div class="col-md-6">
        <draggable
          class="list-group"
          tag="ul"
          v-model="list"
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
          @update="update">
          <transition-group type="transition" :name="!drag ? 'flip-list' : null">
            <li
              class="list-group-item2"
              v-for="element in list"
              :key="element.order">
              <i :class="element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'"
                @click="element.fixed = !element.fixed"
                aria-hidden="true">
              </i>
              {{ element.name }}
            </li>
          </transition-group>
        </draggable>
      </div>
    </div> -->
    <div class="flipbook-viewport">
      <div class="container">
        <div class="flipbook">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import draggable from "vuedraggable";
const message = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
];
export default {
  name: "transition-example-2",
  display: "Transitions",
  order: 7,
  components: {
    draggable
  },
  data() {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1 };
      }),
      drag: false
    };
  },
  mounted(){
    this.xinFanye();
  },
  methods: {
    update(val){
      console.log(this.list)
    },
    sort() {
      this.list = this.list.sort((a, b) => a.order - b.order);
    },
    fanye(){
      console.log($("#app"))
        console.log($('#book'))
        var numberOfPages = 1000; 
        function addPage(page, book) {
            if (!book.turn('hasPage', page)) {
            var element = $('<div />', {'class': 'page '+((page%2==0) ? 'odd' : 'even'), 'id': 'page-'+page}).html('<i class="loader"></i>');
            book.turn('addPage', element, page);
            console.log("111")
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
    xinFanye(){
      function loadApp() {
        $('.flipbook').turn({
            width:922,
            height:600,
            elevation: 50,
            gradients: true,
            autoCenter: true
        });
      };
      yepnope({
        test : Modernizr.csstransforms,
        yep: ['../../static/turn.js'],
        nope: ['../../static/turn.html4.min.js'],
        both: ['../assets/css/basic.css'],
        complete: loadApp
      });
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
};
</script>
    <style lang="scss">
      //   .chang{
      //   img{
      //       display: inline-block;
      //       width:50px;
      //       height:50px;
      //       border:1px solid red;
      //   }
      //   }
      //   .button {
      //   margin-top: 35px;
      //   }
      //   .flip-list-move {
      //   transition: transform 0.5s;
      //   }
      //   .no-move {
      //   transition: transform 0s;
      //   }
      //   .ghost {
      //   opacity: 0.5;
      //   background: #c8ebfb;
      //   }
      //   .list-group {
      //   width:240px;
      //   height:240px;
      //   display: block !important;
      //   }
      //   .list-group-item2 {
      //   cursor: move;
      //   width:50px;
      //   height:50px;
      //   background: red;
      //   display: inline-block;
      //   margin:10px;
      //   }
      //   .list-group-item2 i {
      //   cursor: pointer;
      //   }
      // body{
      //   background:#ccc;
      // }
      // #book{
      //   width:800px;
      //   height:500px;
      // }
      
      // #book .turn-page{
      //   background-color:white;
      // }
      
      // #book .cover{
      //   background:#333;
      // }
      
      // #book .cover h1{
      //   color:white;
      //   text-align:center;
      //   font-size:50px;
      //   line-height:500px;
      //   margin:0px;
      // }
      
      // #book .loader{
      //   width:24px;
      //   height:24px;
      //   display:block;
      //   position:absolute;
      //   top:238px;
      //   left:188px;
      // }
      
      // #book .data{
      //   text-align:center;
      //   font-size:40px;
      //   color:#999;
      //   line-height:500px;
      // }
      
      // #controls{
      //   width:800px;
      //   text-align:center;
      //   margin:20px 0px;
      //   font:30px arial;
      // }
      
      // #controls input, #controls label{
      //   font:30px arial;
      // }
      
      // #book .odd{
      //   background: #fff;
      //   background-image:-webkit-linear-gradient(left, #FFF 95%, #ddd 100%) !important;
      //   background-image:-moz-linear-gradient(left, #FFF 95%, #ddd 100%) !important;
      //   background-image:-o-linear-gradient(left, #FFF 95%, #ddd 100%) !important;
      //   background-image:-ms-linear-gradient(left, #FFF 95%, #ddd 100%) !important;
      // }
      
      // #book .even{
      //   background: #fff;
      //   background-image:-webkit-linear-gradient(right, #FFF 95%, #ddd 100%);
      //   background-image:-moz-linear-gradient(right, #FFF 95%, #ddd 100%);
      //   background-image:-o-linear-gradient(right, #FFF 95%, #ddd 100%);
      //   background-image:-ms-linear-gradient(right, #FFF 95%, #ddd 100%);
      // }
    </style>
