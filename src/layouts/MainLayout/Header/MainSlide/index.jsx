import AutoSlider from '../../../../components/slider/AutoSlider'
import './MainSlide.css'

const MainSlide = () => {
  const IMAGE_DATAS = [
    'https://image.tmdb.org/t/p/original//mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg',
    'https://image.tmdb.org/t/p/original//6YwkGolwdOMNpbTOmLjoehlVWs5.jpg',
    'https://image.tmdb.org/t/p/original//7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
  ]

  return (
    <section>
        <AutoSlider images={IMAGE_DATAS}/>
    </section>
  )
}

export default MainSlide