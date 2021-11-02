import { MediaQuery } from 'react-responsive';
import Button from './Button';
import './App.scss';
import DocumentList from './DocumentList';
import DocumentListItem from './DocumentListItem';
import imageList from './Big.png';


const isMobile = MediaQuery < 768;



function App() {
  return (
    <div className="App">
      <div className="btn-group">
        <Button className="btn-orange">button</Button>
        <Button className="btn-gray">button</Button>
      </div>
      <DocumentList className={isMobile ? "mobile" : "desktop"}>
        <DocumentListItem>
          <div className="item">
            <div className="item__content">
              <div className="item__content-image">
                <img src={imageList} alt="document" />
              </div>
              <div className="item__content-description">
                <h5>Rundofase</h5>
                <p>Last Edited: 08/08/2020</p>
              </div>
            </div>
            <Button className="btn-orange">View document</Button>
          </div>
        </DocumentListItem>
        <DocumentListItem>
          <div className="item">
            <div className="item__content">
              <div className="item__content-image">
                <img src={imageList} alt="document" />
              </div>
              <div className="item__content-description">
                <h5>Genco Pura Olive Oil Company</h5>
                <p>Last Edited: 08/08/2020</p>
              </div>
            </div>
            <Button className="btn-orange">View document</Button>
          </div>
        </DocumentListItem>
        <DocumentListItem>
          <div className="item">
            <div className="item__content">
              <div className="item__content-image">
                <img src={imageList} alt="document" />
              </div>
              <div className="item__content-description">
                <h5>Bubba Gump</h5>
                <p>Last Edited: 08/08/2020</p>
              </div>
            </div>
            <Button className="btn-orange">View document</Button>
          </div>
        </DocumentListItem>
      </DocumentList>
    </div>
  );
}

export default App;
