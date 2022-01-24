import React from 'react'

import { DragOverlay } from 'components'

import './PictureUpload.scss'
import defaultProfileImage from 'default-avatar.png'

export class BannerUpload extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isHovering: false
    }

    this.fileInputRef = React.createRef()

    this.handleDrop = this.handleDrop.bind(this)
    this.toggleHover = this.toggleHover.bind(this)
    this.handleFileUpload = this.handleFileUpload.bind(this)
  }

  async handleDrop(e) {
    e.preventDefault()

    const { uploadHandler } = this.props

    if (uploadHandler) {
      let fileData = new FormData()
      fileData.append('banner', e.dataTransfer.items[0].getAsFile())
      await uploadHandler(fileData)
    }

    this.setState({ isHovering: false })
  }

  async handleFileUpload(e) {
    e.preventDefault()

    if (!e.target.files[0]) {
      return false
    }

    const { uploadHandler } = this.props

    let fileData = new FormData()
    fileData.append('banner', e.target.files[0])
    await uploadHandler(fileData)
  }

  toggleHover() {
    this.setState({ isHovering: !this.state.isHovering })

    return false
  }

  render() {
    const {
      name = name,
      value = value
    } = this.props
    const { isHovering } = this.state

    const currentImage = value || defaultProfileImage

    return (
      <>
        <DragOverlay
          onDragOver={e => e.preventDefault()}
          onDragEnter={this.toggleHover}
          onDragLeave={this.toggleHover}
          onDrop={this.handleDrop}
        >
            <div className="w-full relative bg-gray-500 h-48 overflow-hidden">
                <img className="w-full h-auto" src={value} />
                <div onClick={(e) => document.getElementById(name).click()} style={{top:'40%', left:'35%'}} className="absolute border rounded border-dashed text-white mx-0 mx-auto text-center p-3 text-sm hover:bg-gray-600 cursor-pointer">
                    <i className="material-icons mr-1 text-sm">photo_camera</i> Change Background Photo (700 x 250)
                </div>
            </div>
            <div className="text-center text-xs text-gray-600 py-3">Maximum file size: 5MB - (JPEG, PNG)</div>
        </DragOverlay>
        <input
          type="file"
          id={name}
          name={name}
          className="hidden"
          onChange={this.handleFileUpload}
        />
      </>
    )
  }
}
