<template>
  <div class="container-fluid">
    <!-- <div class="chang"> <img src="../assets/img/111.jpg" alt="asdf"> </div> -->
    <div class="row">
      <div class="col-2">
        <el-tabs v-model="activeName">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
      <div class="col-4">
        <button class="btn btn-secondary button" @click="sort">
          To original order
        </button>
      </div>
      <div class="col-6">




        <!-- 拖动插件 -->
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
      // img:"../assets/img/chang.png",
      list: message.map((name, index) => {
        return { name, order: index + 1 };
      }),
      drag: false
    };
  },
  mounted(){
    this.$router.push({name:"fanye"})
  },
  methods: {
    update(val){
      console.log(this.list)
    },
    sort() {
      this.list = this.list.sort((a, b) => a.order - b.order);
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
.container{
  width:100%;
}
.chang{
  img{
    display: inline-block;
    width:50px;
    height:50px;
    border:1px solid red;
  }
}
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  width:240px;
  height:240px;
  display: block !important;
}
.list-group-item2 {
  cursor: move;
  width:50px;
  height:50px;
  background: red;
  display: inline-block;
  margin:10px;
  /* transition: all 2s; */
}
.list-group-item2 i {
  cursor: pointer;
}
</style>