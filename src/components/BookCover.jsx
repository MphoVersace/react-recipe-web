import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Cover from './bookPages/Cover/Cover';
import coverVideo from "../assets/Videos/coverVideo.mp4";
import RecipeListPage from './RecipeListPage';
import RecipeDetailPage from './RecipeDetailPage';
import AboutPage from './bookPages/AboutPage';
import FirstPage from './bookPages/ListPages/FirstPage';
import SecondPage from './bookPages/ListPages/SecondPage';

function BookCover(props) {
    return (
        <HTMLFlipBook width={700} height={750} showCover="true">
          <Page number={1}>
          <Cover coverVideo={coverVideo} title="Foodie Favourites" />
          </Page>
          <Page number={2}>
           <FirstPage />
          </Page>
          <Page number={3}>
          <SecondPage />
          </Page>
          <Page number={4}>
          <RecipeListPage />
          </Page>     
          <Page number={5}>
          <AboutPage />
          </Page>   
          <Page number={6}>
          <RecipeDetailPage id={1} />
          </Page>     
          <Page number={7}>
          <RecipeDetailPage id={2} />
          </Page>  
          <Page number={8}>
          <RecipeDetailPage id={3} />
          </Page>
          <Page number={9}>
          <RecipeDetailPage id={4} />
          </Page>     
          <Page number={10}>
          <RecipeDetailPage id={5} />
          </Page>  
          <Page number={11}>
          <RecipeDetailPage id={6} />
          </Page>
        </HTMLFlipBook>
    );
} 

export default BookCover;