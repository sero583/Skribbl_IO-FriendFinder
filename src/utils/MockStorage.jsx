// Mock storage for development
const mockStorage = {
    sync: {
      get: (keys, callback) => {
        const result = {};
        keys.forEach(key => {
          result[key] = localStorage.getItem(key);
        });
        callback(result);
      },
      set: (items, callback) => {
        Object.keys(items).forEach(key => {
          localStorage.setItem(key, items[key]);
        });
        if(callback) callback();
      },
    },
  };
  
  export default mockStorage;
  