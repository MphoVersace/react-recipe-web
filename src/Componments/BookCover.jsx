import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Cover from './bookPages/Cover/Cover';
import coverImg from "../assets/recipe-book-cover-img.jpeg";

function BookCover(props) {
    return (
        <HTMLFlipBook width={600} height={700} showCover="true">
          <Page number={1}>
          <Cover coverImg={coverImg} title="My Recipe Book" />
          </Page>
          <Page number={2}>
          <div className="demoPage text-white text-3xl">Page 2</div>
          <Page number={3}>
          <div className="demoPage text-white text-3xl">Page 3</div>
          </Page>
          <Page number={4}>
          <div className="demoPage text-white text-3xl">Page 4</div>
          </Page>       
        </HTMLFlipBook>
    );
} 

export default BookCover; 