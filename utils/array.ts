function searchInArrayByProp(value = '', array = [], elementProperty = '') {
  let result = [null, null];

  array.forEach((element, index) => {
    if (element[elementProperty] === value) {
      result = [element, index];
    }
  });

  return result;
}

export { searchInArrayByProp };
