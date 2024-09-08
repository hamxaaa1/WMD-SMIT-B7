import React from 'react'

function Topic(props) {
  const name = props.data.name;  
  return (
    <>
    <a href="#" class="topic-btn">
      <div class="icon-box">
        <ion-icon name={name}></ion-icon>
      </div>

      <p>{props.data.topicName}</p>
    </a>
    </>
  )
}

export default Topic