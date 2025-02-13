import { Range } from "react-range";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRequest from "../hooks/call";
import { maxcontext } from "../pages/Home";


// {npm install react-range}   نزل المكتبه ديه ي اتش 
const PriceFilter = () => {
  const { id } = useParams();
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [values, setValues] = useState([0, 100]);
  const {setmaxandmin} = useContext(maxcontext)

 

  const {data} = useRequest({
    url:`/api/v1/products`,
    method:'GET'
})

  useEffect(() => {
    if (data?.length) {
      const minVal = Math.min(...data.filter((el)=>el.categories[0].id == id).map((el) => el.price));
      const maxVal = Math.max(...data.filter((el)=>el.categories[0].id == id).map((el) => el.price));   
      setMin(minVal);
      setMax(maxVal);
      setValues([minVal, maxVal]);   
    }
  }, [data,id]);

  useEffect(() => {
    if (data?.length) {
     const productdata= data.filter((el)=>el.categories[0].id == id)
    const gretter = productdata.filter((el)=> el.price >= values[0] && el.price <= values[1])
    // console.log(gretter);
    setmaxandmin(gretter)
    // console.log(gretter);
    
    }
  }, [values,data,id]);

  return (
    <div className="flex flex-col items-center gap-[10px]">
      <Range
        step={1}
        min={min}
        max={max}
        values={values}
        onChange={(newValues) => setValues(newValues)}
        renderTrack={({ props, children }) => (
            <div className="rounded-full p-[10px] bg-gray-300 w-[230px]" {...props}>
            {children}
            </div>
        )}
        renderThumb={({ props, index }) => {
            const { key, ...restProps } = props;
            return (
            <div key={index} {...restProps} className="rounded-full size-[15px] bg-blue-500 outline-none" />
            );
        }}
        />
      <p className="text-gray-400  text-nowrap">
        سعر المنتج: ج.م{" "}
        <span className="font-semibold text-blue-600 text-lg">{values[1]}</span> 
        {" "} - ج.م {" "}
        <span className="font-semibold text-blue-600 text-lg">{values[0]}</span> 
      </p>
    </div>
  );
};

export default PriceFilter;
