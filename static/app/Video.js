import { EventEmitter } from 'events'

class VideoBase extends EventEmitter {
  constructor () {
    super()
  }

  play () {
    this.emit('play')
  }

  pause () {
    this.emit('pause')
  }

  update () {
    this.emit('timeupdate')
  }
}

class Video extends VideoBase {
  constructor ({
    wrap,
    resource
  }) {
    super()

    wrap.appendChild(this.createVideo())


    this.video.style.width = '50%'
    this.video.style.height = 'auto'
    this.video.src = resource

    this.video.on = ((type, eventHandle) => {
      this.video.addEventListener(type, () => {
        eventHandle.call(this)
      })
      return this.video
    })

    this.video.on('canplay', () => {
      this.play()
    })
    .on('timeupdate', () => {
      console.log(this.video.currentTime, this.video.duration)
      this.update()
    })
  }

  createVideo () {
    this.video = document.createElement('video')

    return this.video
  }

  play () {
    this.video.play()
    super.play()
  }
}

export default Video