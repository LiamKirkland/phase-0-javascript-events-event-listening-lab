function addingEventListener() {
  const input = document.getElementById("button");
  input.addEventListener("click", function () {
    alert("I was clicked!");
    console.log("clicked")
  });
}

addingEventListener() // I was wondering why the button wasn't doing anything, realized it's cause the function was never called