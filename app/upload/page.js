import React from 'react'

function page() {
  return (
    <div className="spark-section-5">
    <div className="spark-container-5 w-container">
      <div className="spark-centered-901">
        <h2>Upload</h2>
        <p className="spark-foreground-secondary-2">감성 디지털화 서비스는 당신의 말과 글을 넘어서는 경험을 제공합니다. 간직하고 싶은 그 순간, 그 감정을 텍스트로 전달하세요.</p>
      </div>
      <div className="spark-regular-form-2 w-form">
        <form id="General-Contact-Form" name="wf-form-General-Contact-Form" data-name="General Contact Form" method="get" data-wf-page-id="660c1c6d3dc8e9d96341e88b" data-wf-element-id="31ac8418-3dcd-bf27-f246-6c316d20204b"><label for="General-Contact-Form---Name">Name</label><input className="spark-input-5 w-input" maxLength="256" name="General-Contact-Form---Name" data-name="General Contact Form - Name" placeholder="Enter Your Name" type="text" id="General-Contact-Form---Name" required=""/><label for="General-Contact-Form---Message">Message</label><textarea id="General-Contact-Form---Message" name="General-Contact-Form---Message" maxLength="5000" data-name="General Contact Form - Message" placeholder="Enter your message" className="spark-input-5 spark-message-input w-input"></textarea><label for="select-1">대분류</label><select id="select-1" name="select-1" data-name="select-1" className="sysf-select sysf-medium w-select">
            <option value="">Select one...</option>
            <option value="First">First Choice</option>
            <option value="Second">Second Choice</option>
            <option value="Third">Third Choice</option>
          </select><label for="General-Contact-Form---Message-2">소분류</label><select id="select-1" name="select-1" data-name="select-1" className="sysf-select sysf-medium w-select">
            <option value="">Select one...</option>
            <option value="First">First Choice</option>
            <option value="Second">Second Choice</option>
            <option value="Third">Third Choice</option>
          </select><input type="submit" data-wait="Please wait..." className="spark-button-5 spark-full-width w-button" value="Record"/><input type="submit" data-wait="Please wait..." className="spark-button-5 spark-full-width w-button" value="Submit"/></form>
        <div className="spark-form-success-4 w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div className="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default page