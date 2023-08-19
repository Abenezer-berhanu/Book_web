import {Carousel} from 'react-bootstrap'
import logo from '../assets/logo.png'
export default function HomeAutoScroll() {
  return (
    <div >
    <Carousel className='carousel'>
      <Carousel.Item interval={4000}>
        <img 
        className=''
        src={logo}
        alt="" 
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <img 
        className=''
        src="https://images.pexels.com/photos/9566338/pexels-photo-9566338.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="" 
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <img 
        className=''
        src="https://images.pexels.com/photos/10141956/pexels-photo-10141956.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="" 
        />
        <Carousel.Caption className='carousel-text'>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
