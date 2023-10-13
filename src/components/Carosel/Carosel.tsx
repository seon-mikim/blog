import Image from '@components/ui/Image/Image';
import Input from '@components/ui/Input/Input';
import List from '@components/ui/List/List';
import ListItem from '@components/ui/ListItem/ListItem';
import Wrapper from '@components/ui/Wrapper/Wrapper';
import { useState } from 'react';
import Beach from 'src/assets/beach.jpg'
import Desert from 'src/assets/desert.jpg'
import UnderWaterCliffes from 'src/assets/underwater_cliffs.jpg'
import UnderWater from 'src/assets/underwater.jpg'
import Dawn from 'src/assets/dawn.jpg'
const Carosel = () => {
  const [active, setActive] = useState(1);
  const handlePrevClick = () => {
   
    if(active >1) return setActive((prev)=> prev -1)
  }
  const hadleNextClick = () => {
 if (active < 5) return setActive((prev) => prev + 1);
  }
  console.log(active)
  return (
    <div>
      <div className="carousel">
        <List className="carousel__slides">
          <Input
            className="carousel__input"
            type="radio"
            id="img-1"
            name="radio-button"
            checked={active === 1}
            readOnly
          />
          <ListItem className="carousel__slide-container">
            <Wrapper className="carousel__slide-img">
              <Image
                imageSrc={Beach}
                altText="carousel-img-1"
                className="img"
              />
            </Wrapper>
            <Wrapper className="carousel__controller">
              <label className="carousel__slide-prev" onClick={handlePrevClick}>
                <span>&lsaquo;</span>
              </label>
              <label className="carousel__slide-next" onClick={hadleNextClick}>
                <span>&rsaquo;</span>
              </label>
            </Wrapper>
          </ListItem>
              <Input
                className="carousel__input"
                type="radio"
                id="img-2"
                name="radio-button"
                checked={active === 2}
                readOnly
              />
          <ListItem className="carousel__slide-container">
            <Wrapper className="carousel__slide-img">
              <Image
                imageSrc={Desert}
                altText="carousel-img-1"
                className="img"
              />
            </Wrapper>
          </ListItem>
              <Input
                className="carousel__input"
                type="radio"
                id="img-3"
                name="radio-button"
                checked={active === 3}
                readOnly
              />
          <ListItem className="carousel__slide-container">
            <Wrapper className="carousel__slide-img">
              <Image
                imageSrc={UnderWaterCliffes}
                altText="carousel-img-1"
                className="img"
              />
            </Wrapper>
          </ListItem>
              <Input
                className="carousel__input"
                type="radio"
                id="img-4"
                name="radio-button"
                checked={active === 4}
                readOnly
              />
          <ListItem className="carousel__slide-container">
            <Wrapper className="carousel__slide-img">
              <Image
                imageSrc={UnderWater}
                altText="carousel-img-1"
                className="img"
              />
            </Wrapper>
          </ListItem>
          <Input
            className="carousel__input"
            type="radio"
            id="img-5"
            name="radio-button"
            checked={active === 5}
            readOnly
          />
          <ListItem className="carousel__slide-container">
            <Wrapper className="carousel__slide-img">
              <Image imageSrc={Dawn} altText="carousel-img-1" className="img" />
            </Wrapper>
          </ListItem>
          <div className="carousel__dots" >
            <label
              onClick={() => setActive(1)}
              className="carousel__dot"
              id="img-dot-1"
            ></label>
            <label
              onClick={() => setActive(2)}
              className="carousel__dot"
              id="img-dot-2"
            ></label>
            <label
              onClick={() => setActive(3)}
              className="carousel__dot"
              id="img-dot-3"
            ></label>
            <label
              onClick={() => setActive(4)}
              className="carousel__dot"
              id="img-dot-4"
            ></label>
            <label
              onClick={() => setActive(5)}
              className="carousel__dot"
              id="img-dot-5"
            ></label>
          </div>
        </List>
      </div>
    </div>
  );
};

export default Carosel;
