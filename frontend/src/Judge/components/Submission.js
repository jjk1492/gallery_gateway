import React from 'react'
import PropTypes from 'prop-types'

import VideoSubmission from '../components/VideoSubmission'
import PhotoSubmission from '../components/PhotoSubmission'
import OtherMediaSubmission from '../components/OtherMediaSubmission'

// Submission types
const VIDEO = 'VIDEO'
const PHOTO = 'PHOTO'
const OTHER = 'OTHER'

const Submission = props => (
  <div>
    <h5>{props.submission.title}</h5>
    <div>
      {props.submission.entryType === VIDEO ? (
        <VideoSubmission provider={props.submission.provider} videoId={props.submission.videoId} />
      ) : props.submission.entryType === PHOTO ? (
        <PhotoSubmission />
      ) : props.submission.entryType === OTHER ? (
        <OtherMediaSubmission />
      ) : null}
    </div>
  </div>
)

Submission.propTypes = {
  submission: PropTypes.shape({ 
    entryType: PropTypes.string.isRequired,
    title: PropTypes.string,
    provider: PropTypes.string,
    videoId: PropTypes.string
  })
}

export default Submission
