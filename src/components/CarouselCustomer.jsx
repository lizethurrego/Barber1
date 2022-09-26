import Carousel from 'react-bootstrap/Carousel';


const CarouselCustomer = () => {
  return (
    <Carousel slide={false}>
      <Carousel.Item >
        <img
          className="d-block w-90 rounded-xl"
          src="/img/c1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='font-bold lg:text-lg uppercase hidden 2xl:block'>We are Experts</h3>
          <p className='hidden xl:block'>Taking care of you.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-90 rounded-xl "
          src="/img/c2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='font-bold lg:text-lg uppercase hidden 2xl:block'>Best hair care products</h3>
          <p className='hidden xl:block'>science to the service of man, guaranteed.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-90 rounded-xl"
          src="/img/c3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='font-bold lg:text-lg uppercase hidden 2xl:block'>comfort</h3>
          <p className='hidden xl:block'>
          Technology, sophisticated designs, beauty, power and versatility come together here.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselCustomer