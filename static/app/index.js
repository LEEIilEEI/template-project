import Video from './Video'

const v = new Video({
  wrap: document.querySelector('.container'),
  resource: 'http://he.yinyuetai.com/uploads/videos/common/05FD013C7314ACD622CACC5F99549EF3.flv?sc=6ab0dc147b84f531'
})

v.on('play', () => {
  console.log('start')
})
.on('timeupdate', () => {
  console.log('播放中，时间：')
})