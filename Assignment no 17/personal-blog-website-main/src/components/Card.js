import React from 'react'

function Card({data}) {
    
  return (
    <>
    <div class="blog-card">

    <div class="blog-card-banner">
      <img src={data?.image} alt={data?.title}
        width="250" class="blog-banner-img" />
    </div>

    <div class="blog-content-wrapper">

      <button class="blog-topic text-tiny">{data?.topic}</button>

      <h3>
        <a href="#" class="h3">{data?.title}</a>
      </h3>

      <p class="blog-text">{data?.description}</p>

      <div class="wrapper-flex">

        <div class="profile-wrapper">
          <img src={data?.author?.profileImage} alt="Julia Walker" width="50" />
        </div>

        <div class="wrapper">
          <a href="#" class="h4">{data?.author?.name}</a>

          <p class="text-sm">
            <time datetime="2022-01-17">{data?.date}</time>
            <span class="separator"></span>
            <ion-icon name="time-outline"></ion-icon>
            <time datetime="PT3M">{data?.readingTime}</time>
          </p>
        </div>

      </div>

    </div>

    </div>
    </>
  )
}

export default Card