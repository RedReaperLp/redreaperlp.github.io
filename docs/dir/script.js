function alert() {
  const width = document.documentElement.clientWidth;
  if (width < 360) {
    window.alert("Your screen is too small for correct view!");
  }
}
