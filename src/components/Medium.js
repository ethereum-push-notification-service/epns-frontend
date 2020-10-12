import React from "react";

import styled, { css } from 'styled-components';
import {ItemH} from 'components/SharedStyling';

import Loader from 'react-loader-spinner';

import MediumCard from 'components/MediumCard';

// Create Header
function Medium({ numberOfPosts }) {
  const [postsLoaded, setPostsLoaded] = React.useState(false);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    if (numberOfPosts) {
      fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/ethereum-push-notification-service')
      .then((res) => res.json())
      .then((data) => {
         // Fillter the array
         const res = data.items //This is an array with the content. No feed, no info about author etc..
         const postsArray = res.filter(item => item.categories.length > 0) // That's the main trick* !
         const limitedPosts = postsArray.slice(0, numberOfPosts);
         setPosts(limitedPosts);

         //console.log(limitedPosts);
         setPostsLoaded(true);
      })
    }

  }, [numberOfPosts]);

  // RENDER
  return (
    <ItemH margin="-20px" align="stretch" columnGap="40px" rowGap="40px">
      {!postsLoaded &&
        <Loader
         type="Oval"
         color="#fff"
         height={32}
         width={32}
        />
      }

      {postsLoaded &&

        posts.map(function(item, id){
          return (
            <MediumCard
              title={item.title}
              thumbnail={item.thumbnail}
              link={item.link}
              key={item.guid}
            />
          );
        })
      }
    </ItemH>
  );
}

// css style


// Export Default
export default Medium;
