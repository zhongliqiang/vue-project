<template>

  <div class="container-fluid" :class="{'phone':deviceType == 'phone'}">
    <div class="row content" style="height:calc(100% - 100px)">
        <div class="col-md-12 itemMsg">
          <el-input
          class="textarea"
          type="textarea"
          :disabled="!editBook"
          resize="none"
          :rows="3"
          placeholder="请输入内容"
          maxlength="200"
          v-model="message">
          </el-input>
          <!-- {{message}} -->
        </div>
        <div class="col-md-12 itemCont">
            <draggable
            class="list-group itemUl"
            tag="ul"
            v-model="list"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
            @update="update"
            :move="getdata" 
            >
            <!-- <transition-group type="transition" :name="!drag ? 'flip-list' : null"> -->
                <li class=" itemPic fl" :class="{'addIcon':item.id == 9999}" v-show="item.id !=9999 || item.id ==9999 && list.length<10 && editBook==true"
                v-for="(item , index) in list"
                :key="item.id">
                  <div v-if="item.id != 9999" style="width:100%;height:100%">
                    <img class="itemPicImg" :src="item.src" alt="暂无">
                    <i class="delItem point" v-if="editBook == true" v-on:click.stop="delImage(index)">x</i>
                  </div>
                  <div class="point" style="width:100%;height:100%" v-if="item.id == 9999 && editBook == true" @click="addPic">
                    <p>+</p>
                  </div>
                </li>
            <!-- </transition-group> -->
            </draggable>
        </div>
        <div class="col-md-12">
          <el-button @click="editBookEdit" v-show="editBook == false"> 编辑 </el-button>
          <el-button @click="editBookSure" v-show="editBook == true"> 保存 </el-button>
          <input type="file" ref="upLoad" accept="image/*" multiple  @change="onFileChange" style="display:none">
        </div>
    </div>
    <div class="row contentEdit">

    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  props:["dataArr","suoyinId"],
  name: "transition-example-2",
  display: "Transitions",
  components: {
    draggable
  },
  data() {
    return {
      list:[{id:"1",src:""},{id:"2",src:""},{id:"3",src:""},{id:"4",src:""}],
      drag: false,
      message:"你好啊今天天气太好了等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等",
      images:[],
      editBook:false
    };
  },
  mounted(){
    let that = this;
    that.list = that.dataArr;
    // console.log(that.deviceType)
    // setTimeout(function(){
    //   that.dragTog = true;
    // },5000)
    // setTimeout(function(){
    //   that.dragTog = false;
    // },10000)
  },
  computed: {
    ...mapState({
      deviceType: state => state.deviceType,
      documentWH: state => state.documentWH,
    }),
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: !this.editBook,
        ghostClass: "ghost",
        filter:".addIcon"
      };
    }
  },
  methods: {
    editBookEdit(){
      this.editBook = true;
      this.$emit("editBook",this.editBook)
    },
    editBookSure(){
      this.editBook = false;
      this.$emit("editBook",this.editBook)
    },
    getdata(evt){
      console.log(evt)
      // console.log(evt.draggedContext.index)
      // console.log(evt.draggedContext.element)
      // console.log(evt.draggedContext.futureIndex)
      // console.log(evt.relatedContext.index)
      // console.log(evt.relatedContext.element)
      // console.log(evt.relatedContext.list)
      // console.log(evt.relatedContext.component)
      return (evt.relatedContext.element.id!== 9999)
    },
    addPic(e){
      // console.log()
      this.$refs.upLoad.click();
        // e.preventDefault();
        // $('input[type=file]').trigger('click');
        // return false;
    },
    onFileChange(e) {
      console.log(e)
      let that = this;
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)return; 
      this.createImage(files).then(res =>{
        that.suoyinId;
        let json = {suoyin:that.suoyinId,newPic:res}
        that.$emit("dataChange",json)
        e.srcElement.value = "";
      }).catch(err =>{
        alert(err)
        return false;
      })
      console.log(that.list.length) 
      
    },
    // createImage(files) {
    //   let that = this;
    //   if(typeof FileReader==='undefined'){
    //       alert('您的浏览器不支持图片上传，请升级您的浏览器');
    //       return false;
    //   }     
    //   var leng=files.length;
    //   for(var i=0;i<leng;i++){
    //       var reader = new FileReader();
    //       reader.readAsDataURL(files[i]); 
    //       let json = files[i];
    //       reader.onload =function(e){
    //         json.id= new Date().getTime();
    //         json.src = e.target.result;
    //         that.list.push(json)   
    //       };                 
    //   }                                             
    // },
     createImage(files){
      return new Promise(function(resolve, reject){
          if (typeof FileReader === 'function') {
              let uploadList = []
              let fileLength = 0;
              const reader = new FileReader();
              reader.readAsDataURL(files[fileLength]);
              reader.onload = function(e) {
                  if(e.target.result) {
                    let json = files[fileLength];
                    json.id= new Date().getTime();
                    json.src = e.target.result;
                    uploadList.push(json);
                    fileLength++;
                    if(fileLength < files.length) {
                        reader.readAsDataURL(files[fileLength]);
                    } else {
                        resolve(uploadList)
                    }
                  }
              }
          }else{
              let error = 'FileReader API不支持'
              reject(error)
          }
      })
    },
    delImage:function(index){
        this.list.splice(index,1);
    },
    removeImage: function(e) {
        this.images = [];
    },
    update(val){

        this.$emit("dataChange",this.list)
    },
    sort() {
      this.list = this.list.sort((a, b) => a.name - b.name);
    },
  },
  watch:{
    dataArr(){
      let that = this;
      that.list = that.dataArr;
    }
  },

    };
</script>
    <style scoped lang="scss">
        .container-fluid.phone{
          padding:0 10px;
          .itemCont{
            max-height: calc(100% - 120px);
            overflow: hidden;
            .itemUl{
              height:auto;
              // max-height: calc(100vh - 120px - 50px - 60px);   //120 上 50 底部 60编辑+bottom
              .itemPic{
                width:calc((100vw - 20px) / 3 - 20px);
                height:calc((100vw - 20px) / 3 - 20px);
                &.addIcon{
                  p{
                    height:100%;
                    width:100%;
                    text-align: center;
                    // line-height: 100%;
                    line-height: calc((100vw - 20px) / 3 - 20px);
                  }
                }
              }
            }
          }
        }
        .container-fluid{
          width:100%;
          height:100%;
          .itemMsg{
            text-align: left;
            padding:20px 15px;
            height:120px;
          }
          .itemPic{
            position: relative;
            cursor: move;
            width:120px;
            height:120px;
            line-height: 120px;
            display: inline-block;
            margin:10px;
            background-size: 100% 100%;
            border-radius: 10px;
            // overflow: hidden;
            &.addIcon{
              font-size: 40px;
              color: #000;
              cursor:auto;
              border:1px solid #000;
            }
            i{
              cursor: pointer;
            }
            .itemPicImg{
              display: inline-block;
              width:100%;
              height:100%;
              object-fit: cover;
              border-radius: 10px;
              overflow: hidden;
            }
            .delItem{
              position: absolute;
              display: block;
              top:-10px;
              right:-10px;
              width:30px;
              height:30px;
              line-height: 30px;
              background-color: #fff;
              border:1px solid #333;
              color:#333;
              border-radius: 50%;
            }
          }
          .itemUl{
            width:100%;
            height:410px;
            display: block !important;
          }
        }
     

        .flip-list-move {
        transition: transform 0.5s;
        }
      #book .odd{
        background: #fff;
        background-image:-webkit-linear-gradient(left, #FFF 95%, #ddd 100%) !important;
        background-image:-moz-linear-gradient(left, #FFF 95%, #ddd 100%) !important;
        background-image:-o-linear-gradient(left, #FFF 95%, #ddd 100%) !important;
        background-image:-ms-linear-gradient(left, #FFF 95%, #ddd 100%) !important;
      }
      
      #book .even{
        background: #fff;
        background-image:-webkit-linear-gradient(right, #FFF 95%, #ddd 100%);
        background-image:-moz-linear-gradient(right, #FFF 95%, #ddd 100%);
        background-image:-o-linear-gradient(right, #FFF 95%, #ddd 100%);
        background-image:-ms-linear-gradient(right, #FFF 95%, #ddd 100%);
      }
    </style>
