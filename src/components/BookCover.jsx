import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Cover from './bookPages/Cover/Cover';
import coverVideo from "../assets/Videos/coverVideo2.mp4";
import RecipeListPage from './RecipeListPage';
import RecipeDetailPage from './RecipeDetailPage';
import FirstPage from './bookPages/RecipeListPages/FirstPage';
import SecondPage from './bookPages/RecipeListPages/SecondPage';

function BookCover(props) {
    return (
        <HTMLFlipBook width={600} height={700} showCover="true">
          <Page number={1}>
          <Cover coverVideo={coverVideo}  />
          </Page>
          <Page number={2}>
          <div className='relative h-screen'>
          <FirstPage />
        </div>
      </Page>
      <Page number={3}>
      <div className='relative h-screen'>
          <SecondPage />
        </div>
      </Page>
      <Page number={4}>

      </Page>    
          <Page number={5}>
          <RecipeListPage />
          </Page>   
          <Page number={6}>
          <RecipeDetailPage id={1} />
          </Page>     
          <Page number={7}>
          <RecipeDetailPage id={2} />
          </Page>  
          <Page number={8}>
          <div className="demoPage text-white text-3xl">Page 8</div>
          </Page>
        </HTMLFlipBook>
    );
} 

export default BookCover;