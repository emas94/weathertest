import React from "react"

const PostDetails = props => {
  const id = props.match.params.id
  return (
    <div className="container section post-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Post title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            reprehenderit placeat ducimus. Blanditiis veniam deserunt asperiores
            consequatur quo. Quod ad dolorum ullam veniam itaque cum eligendi
            doloribus.
          </p>
        </div>
        <div className="card-action gret lighter-4 grey-text">
          <div>Posted by Przemuś</div>
          <div>Data</div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails
