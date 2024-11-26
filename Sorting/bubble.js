// Bubble sort

const bubbleSort = (array) => {
    let isSwapped 
    do {
      isSwapped = false
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          let temp = array[i]
          array[i] = array[i + 1]
          array[i + 1] = temp
          isSwapped = true
        }
      }
    } while (isSwapped)
    return array
  }
  
  console.log(bubbleSort([5, 4, 3, 2, 1]))
  
  