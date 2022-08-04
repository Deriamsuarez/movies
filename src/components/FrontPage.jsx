import React from 'react'

const frontPage = () => {
  return (
    <section className="frontPageContainer">
      <div className="contentWrap">
        <div className="title">
          <h2>Welcome.</h2>
          <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
        </div>
        <div className="searxh_Box">
          <input id='search' type="text" placeholder="Search for a movie, tv show, person......" />
          <button type="submit"> <i className="fi fi-br-search"></i></button>
        </div>
      </div>
    </section>
  )
}

export default frontPage