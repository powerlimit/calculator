import React from 'react';
import Vimeo from '@u-wave/react-vimeo';

export const Video = ({id}) => {

  return (
    <div className="video">
        <Vimeo
          video={id}
          className="vimeo"
        />
    </div>
  )
}
