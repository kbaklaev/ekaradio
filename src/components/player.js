import React from 'react'

const stream = new Audio()

const Player = (props) => {
  const { url, station, cb, play } = props

  stream.preload = 'none'

  const streamStop = () => {
    stream.src = ''
    stream.pause()
    stream.load()
  }

  const streamStart = () => {
    stream.src = url
    stream.load()
    stream.play()
  }

  const streamToggler = () => {
    play ? streamStop() : streamStart()
    cb(station)
  }

  return (
    <div>
      <button
        type="button"
        id={station}
        onClick={streamToggler}>
          {play ? 'STOP' : 'PLAY'}
      </button>
    </div>
  )
}

export default Player
