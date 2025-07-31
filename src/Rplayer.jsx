import React from 'react'
import ReactPlayer from 'react-player'

const Rplayer = () => {
  return (
    <div>
        <h1>this is rplayer component</h1>
        <ReactPlayer src='https://youtu.be/ZgcIwHoLGKE?si=rUdhqjTR1BR7WZAu' playing={false} controls={true} width="100%" height="600px"/>
    </div>
  )
}

export default Rplayer

// Prop	Description	Default
// src	The url of a video or song to play	undefined
// playing	Set to true or false to play or pause the media	undefined
// preload	Applies the preload attribute where supported	undefined
// playsInline	Applies the playsInline attribute where supported	false
// crossOrigin	Applies the crossOrigin attribute where supported	undefined
// loop	Set to true or false to loop the media	false
// controls	Set to true or false to display native player controls.
//   ◦  For Vimeo videos, hiding controls must be enabled by the video owner.	false
// volume	Set the volume of the player, between 0 and 1
//   ◦  null uses default volume on all players #357	null
// muted	Mutes the player	false
// playbackRate	Set the playback rate of the player
//   ◦  Only supported by YouTube, Wistia, and file paths	1
// pip	Set to true or false to enable or disable picture-in-picture mode
//   ◦  Only available when playing file URLs in certain browsers	false
// width	Set the width of the player	320px
// height	Set the height of the player	180px
// style	Add inline styles to the root element	{}
// light	Set to true to show just the video thumbnail, which loads the full player on click
//   ◦  Pass in an image URL to override the preview image	false
// fallback	Element or component to use as a fallback if you are using lazy loading	null
// wrapper	Element or component to use as the container element	null
// playIcon	Element or component to use as the play icon in light mode	
// previewTabIndex	Set the tab index to be used on light mode	0