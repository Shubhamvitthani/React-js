import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "../Components/Header"
import { useEffect, useState } from 'react';
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import Swiperslide from '../Components/Swiperslide';
import Footer from '../Components/Footer';
function App() {
  const [menu, setMenu] = useState([]);
  const [slider, setSlider] = useState([]);
  const [categories, setCategories] = useState([]);
  const [swiper, setSwiper] = useState([]);
  const getMenu = async () => {
    try {
      let res = await fetch(`http://localhost:8000/menu`);
      let data = await res.json()
      // console.log(data);
      setMenu(data);
    } catch (err) {
      console.log(err);
    }
  }
  const getSlider = async () => {
    try {
      let res = await fetch(`http://localhost:8000/slider`);
      let data = await res.json()
      // console.log(data);
      setSlider(data);
    } catch (err) {
      console.log(err);
    }
  }
  const getCategories = async () => {
    try {
      let res = await fetch(`http://localhost:8000/categories`);
      let data = await res.json()
      // console.log(data);
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  }
  const getSwiper = async () => {
    try {
      let res = await fetch(`http://localhost:8000/swiper`);
      let data = await res.json()
      setSwiper(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getMenu();
    getSlider();
    getCategories();
    getSwiper();
  }, [])
  return (
    <>

      <Header menuList={menu} />
      <Slider sliderList={slider} />
      <Categories categoriesList={categories} />
      <Swiperslide swiperList={swiper} />
      <Footer />
    </>
  )
}

export default App
