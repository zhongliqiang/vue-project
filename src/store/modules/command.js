export default {
    state: {
        ZLQ_echartResize: "", // 指挥分屏触发echart 得 resize
        ZLQ_newCriminalSuspect: "", // 最新的 上号嫌疑人 用作 自动切换嫌疑人
        ZLQ_rightLocationState:false, // 指挥所在 地图 还是 分屏页面
        ZGY_strengthLinkage: "", // 强度 每一列LI 点击给地图 对应

    },
    mutations: { //同步方法代替构造器
        ZLQ_echartResize(state, payload) {
            state.ZLQ_echartResize = payload.value;
        },
        ZLQ_newCriminalSuspect(state, payload) {
            state.ZLQ_newCriminalSuspect = payload.value;
        },
        ZLQ_rightLocationState(state, payload) {
            state.ZLQ_rightLocationState = payload.value;
        },
        ZGY_strengthLinkage(state, payload) {
            state.ZGY_strengthLinkage = payload.value;
        },
    },
};