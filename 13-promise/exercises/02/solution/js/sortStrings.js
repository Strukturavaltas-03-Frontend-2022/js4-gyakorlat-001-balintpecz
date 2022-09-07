const sortStrings = (arr) => {
    return new Promise((resolve, reject) => {
      try {
        if (arr.every((e) => typeof e === "string")) resolve(arr.sort());
        else {
          const err1 = "Error: Not all items in the array are strings!";
          reject(new Error(err1));
        }
      } catch (error) {
        const err2 = "Error: Something went wrong with sorting words!";
        reject(new Error(err2));
      }
    });
  };

export default sortStrings;
