
const isMajorityVisible = (element) => {
  const rect = element.getBoundingClientRect();
  const ratio = 0.5;
  const topPoint = rect.top + (rect.height * ratio)
  const upperLimit = topPoint > 0;
  const lowerLimit = topPoint < (window.innerHeight || document.documentElement.clientHeight)


  const isVisible = (
    rect.left >= 0 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    upperLimit && lowerLimit
  );

  return isVisible;
}

window.addEventListener('scroll', () => {
  const allVideos = document.getElementsByClassName('embed-vid');

  for (const videoPlayer of allVideos) {
    const iframe = videoPlayer.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    const isVis = isMajorityVisible(iframe);
    isVis ? player.play() : player.pause();
  }
})
