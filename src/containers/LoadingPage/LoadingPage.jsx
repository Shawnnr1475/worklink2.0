import "./loadingPage.css"

const LoadingPage = () => {
  return (
    <div className="LoadingPage">
        <div className="loader-conatiner">
            <div className="inner-circle">
            </div>
        </div>
        <div className="svgs-container">
        <div className="svgs">
        <svg className="loader-svg-1" xmlns="http://www.w3.org/2000/svg"
         width="1em" 
         height="1em"
         viewBox="0 0 1024 1024"><path d="M840 192h-56v-72c0-13.3-10.7-24-24-24H168c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h592c13.3 0 24-10.7 24-24V256h32v200H465c-22.1 0-40 17.9-40 40v136h-44c-4.4 0-8 3.6-8 8v228c0 1.1.2 2.2.6 3.1c-.4 1.6-.6 3.2-.6 4.9c0 46.4 37.6 84 84 84s84-37.6 84-84c0-1.7-.2-3.3-.6-4.9c.4-1 .6-2 .6-3.1V640c0-4.4-3.6-8-8-8h-44V520h351c22.1 0 40-17.9 40-40V232c0-22.1-17.9-40-40-40z"/>
        </svg>
        <svg className="loader-svg-2" xmlns="http://www.w3.org/2000/svg" 
        width="1em" 
        height="1em" 
        viewBox="0 0 50 50"><path d="M45.971 44.396c0-1.994-3.638-7.567-3.638-7.567s-3.693 5.573-3.693 7.567c0 1.99 1.642 3.604 3.666 3.604c2.023 0 3.665-1.614 3.665-3.604zM19.666 13.171h-7.331V5.944h1.999V2H1v3.944h2v11.17c0 2.904 2.388 5.257 5.333 5.257h11.333v1.972h4.001V11.201h-4.001v1.97zm27.332 16.428v-11.17c0-2.903-2.387-5.257-5.329-5.257H30.334v-1.97h-4.001v13.143h4.001v-1.973h7.332v7.227h-1.997v3.944H49v-3.944h-2.002z"/>
        </svg>
        <svg className="loader-svg-3" xmlns="http://www.w3.org/2000/svg" 
        width="1em" 
        height="1em" 
        viewBox="0 0 256 256"><path d="M136 52a4 4 0 0 1 4-4h84a8 8 0 0 1 8 8v32a4 4 0 0 1-4 4h-92Zm48 100h44a4 4 0 0 0 4-4v-36a4 4 0 0 0-4-4h-44Zm-96 0h80v-44H88Zm-16-44H28a4 4 0 0 0-4 4v36a4 4 0 0 0 4 4h44Zm64 60v36a4 4 0 0 0 4 4h84a8 8 0 0 0 8-8v-28a4 4 0 0 0-4-4Zm-16-76V52a4 4 0 0 0-4-4H32a8 8 0 0 0-8 8v32a4 4 0 0 0 4 4Zm0 76H28a4 4 0 0 0-4 4v28a8 8 0 0 0 8 8h84a4 4 0 0 0 4-4Z"/>
        </svg>
        <svg className="loader-svg-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" 
        viewBox="0 0 50 50"><path d="M8.149 16.062h6.06l-.053 3.575l-6.007 5.406v-8.981zm16.758-1.979L1 35.169L3.52 38l21.485-18.954L46.486 38L49 35.169L25.097 14.083L25 14l-.093.083z"/>
        </svg>
        <svg className="loader-svg-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" 
        viewBox="0 0 1024 1024"><path d="m924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1c0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1l74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3l-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2l-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9l-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5l-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5c0-15.3 1.2-30.6 3.7-45.5l6.5-40l-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2l31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3l17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97l38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8l92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"/>
        </svg>
        </div>
        </div>
        <div className="loading-logo">
          <h1>WORKLINK</h1>
        </div>
    </div>
  )
}

export default LoadingPage