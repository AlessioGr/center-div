function centerDiv(div) {
    if (!div) return;
  
    function updatePosition() {
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      var divWidth = div.offsetWidth;
      var divHeight = div.offsetHeight;
      var top = (windowHeight - divHeight) / 2;
      var left = (windowWidth - divWidth) / 2;
      div.style.position = 'absolute';
      div.style.top = top + 'px';
      div.style.left = left + 'px';
    }
  
    window.addEventListener('resize', updatePosition);
    window.addEventListener('load', updatePosition);
    updatePosition();
  }
  
  module.exports = centerDiv;
  