const getters = {
    test: (state, getters) => {
      function getDeviceIdArrayFromTraceArray(traceArray) {
        let temp = [];
        for (let item of traceArray) {
          temp.push(item.dId);
        }
        return temp;
      }
      return getDeviceIdArrayFromTraceArray(state.traceData.result);
    }
  };
  
  export default getters;
  