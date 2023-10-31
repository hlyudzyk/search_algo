let array = [20, 1, 80, 30, 4];
function displayArray() {
  let rowElement = document.getElementById("row");

  while (rowElement.firstChild) {
    rowElement.removeChild(rowElement.firstChild);
  }

  for (let i = 0; i < array.length; i++) {
    let div = document.createElement("div");
    div.className = "column";
    div.textContent = array[i];

    rowElement.appendChild(div);
  }
}


displayArray();

function displayFoundElement(index){
  (index == -1)
      ? alert("Element is not present in array")
      : alert("Element is present at index " + index);
}

function linearSearch() {
  bubbleSort();
  let result = -1;
  let n = array.length;
  let x = parseInt(document.getElementById("numberinput").value);

  for (let i = 0; i < n; i++) {
    console.log(array[i]);
    console.log(x);

    if (array[i] == x)
      result = i;
  }
  displayArray()
  displayFoundElement(result);
}


function binarySearch(){
  bubbleSort();
  let result = -1;
  let x = parseInt(document.getElementById("numberinput").value);
  let l = 0;
  let r = array.length - 1;
  let mid;
  while (r >= l) {
    mid = l + Math.floor((r - l) / 2);
    if (array[mid] == x)
      result = mid;
    if (array[mid] > x)
      r = mid - 1;
    else
      l = mid + 1;
  }
  displayArray();
  displayFoundElement(result);
}

function bubbleSort()
{
  var i, j, temp;
  var swapped;
  let n = array.length;
  for (i = 0; i < n - 1; i++)
  {
    swapped = false;
    for (j = 0; j < n - i - 1; j++)
    {
      if (array[j] > array[j + 1])
      {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped == false)
      break;
  }
}