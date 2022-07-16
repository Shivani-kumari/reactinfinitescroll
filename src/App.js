import React, { useState} from 'react'
import usePosts from './hooks/usePosts'
import './App.css';
import Post from './Post';

function App() {
  const [pageNum,setPageNum] = useState(1)
  const {
    isLoading,
    isError,
    error,
    results,
    hasNextPage
  } = usePosts(pageNum)
    if(isError) return <p className='center'>Error: {error.message}</p>

    const content = results.map((post,i) =>{
      
      return <Post key={i} post = {post}/>
    })
    const handleInfiniteScroll = (e) => {
    
    const {scrollHeight ,scrollTop,clientHeight} = e.target
    const bottomSpaceLeftToScroll = (
      scrollHeight - scrollTop - clientHeight
  )
  if(bottomSpaceLeftToScroll>0) return

      if ( hasNextPage) {
        setPageNum(pageNum + 1)
      }
      
      console.log(bottomSpaceLeftToScroll,"bottomSpaceLeftToScroll")
    };
    return (
      <>
            <h1 id="top">&infin; Infinite Query &amp; Scroll<br />&infin; Ex. 1 - React only</h1>
            <div onScroll={handleInfiniteScroll}  
            className='scroll'
    >
            {content}
            </div>
           
            {isLoading && <p className="center">Loading More Posts...</p>}
            <p className="center"><a href="#top">Back to Top</a></p>
        </>
    );
}

export default App;
