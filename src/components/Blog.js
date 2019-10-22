import React, { Component, useState } from "react"
// import { getFirebase } from "../firebase"

import "./Blog.css"

// const [loading, setLoading] = useState(true)
// const [blogPosts, setBlogPosts] = useState([])

// if (loading && !blogPosts.length) {
//   getFirebase()
//     .database()
//     .ref("/posts")
//     .orderByChild("date")
//     .once("value")
//     .then(snapshot => {
//       let posts = []
//       const snapshotVal = snapshot.val()
//       for (let title in snapshotVal) {
//         posts.push(snapshotVal[title])
//       }

//       const newestFirst = posts.reverse()
//       setBlogPosts(newestFirst)
//       setLoading(false)
//     })
// }

// if (loading) {
//   return <h1>Loading...</h1>
// }
class Blog extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Lorem ipsum dolor sit.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorem quia est? Repellendus repellat optio eum, quasi facere sint maiores eaque eligendi blanditiis quas aperiam?",
        date: "21.10.19",
        author: "Przemysław Matkowski",
        category: "Sport",
        img: "./img/post.jpg"
      },
      {
        id: 2,
        title: "Lorem ipsum dolor sit.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorem quia est? Repellendus repellat optio eum, quasi facere sint maiores eaque eligendi blanditiis quas aperiam?",
        date: "21.10.19",
        author: "Przemysław Matkowski",
        category: "Sport",
        img: "./img/post1.jpg"
      },
      {
        id: 3,
        title: "Lorem ipsum dolor sit.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorem quia est? Repellendus repellat optio eum, quasi facere sint maiores eaque eligendi blanditiis quas aperiam?",
        date: "21.10.19",
        author: "Przemysław Matkowski",
        category: "Sport",
        img: "./img/post.jpg"
      },
      {
        id: 4,
        title: "Lorem ipsum dolor sit.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorem quia est? Repellendus repellat optio eum, quasi facere sint maiores eaque eligendi blanditiis quas aperiam?",
        date: "21.10.19",
        author: "Przemysław Matkowski",
        category: "Sport",
        img: "./img/post.jpg"
      }
    ]
  }

  render() {
    const posts = this.state.posts.map(post => (
      <div key={post.id} className="blog__news">
        <div className="blog__news__header">
          {post.title} - {post.date}
        </div>
        <div className="blog__news__content">
          <img src={post.img} alt="" />
          <p>{post.content}</p> <span>Show More</span>
        </div>
        <div className="blog__news__footer">
          {post.author} - {post.category}
        </div>
      </div>
    ))
    return (
      <div className="blog">
        <div className="blog__post">{posts}</div>
      </div>
    )
  }
}

export default Blog
