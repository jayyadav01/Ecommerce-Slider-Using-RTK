import React, { useEffect } from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';  
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData, leftbutton, rightbutton } from './Slice'

const Slider = () => {

      const dispatch = useDispatch();
      const data = useSelector((state) => {
          return state.slider
      })

      console.log(data);

      useEffect(() => {
          dispatch(getAllData(data.page))
      } , [data.page])
    
  return (
    <>  

          {
              (data.loading) ?
                <h1 className='load'>... Loading</h1>
              :
                <div className='slider'>
                    <div  className='box'>

                        <div className='left'>
                          <img src={data.products.image}></img>
                        </div>

                        <div className='right'>
                          <h2>{data.products.title}</h2>
                          <p>{data.products.description}</p>
                          <p><CurrencyRupeeIcon/>{data.products.price}</p>
                        </div>

                    </div>

                    <div className='navigation'>
                      <button disabled={data.page==1 ? true : false} onClick={() => dispatch(leftbutton())} className='left-btn'><ChevronLeftIcon/></button>
                      <button disabled={data.page==19 ? true : false} onClick={() => dispatch(rightbutton())} className='right-btn'><ChevronRightIcon/></button>
                    </div>
                </div>
          }
    </>
  )
}

export default Slider
