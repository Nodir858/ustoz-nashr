import { books } from '../data/data';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from './cart-context/CartContext';
import { FaCartArrowDown } from "react-icons/fa";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {addToCart } = useCart();
  
  const [products, setProduct] = useState<(typeof books)[0] | null>(null)

  useEffect(() => {
    const foundProduct = books.find(
      (p) => p.id === Number(id)
    );

    if (!foundProduct) {
      navigate('/');
    } else {
      setProduct(foundProduct);
    }
  }, [id, navigate]);

  if (!products) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className='bg-sky-100 h-screen'>
      <div className="flex flex-col md:flex-row p-5 m-auto max-w-7xl gap-5">
        <div className=' p-2 flex justify-center items-center'>
          <img
            src={products.img}
            alt={products.title}
            className="rounded w-2xl h-auto object-contain"
          />
        </div>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='w-full '>
                <h1 className="text-3xl font-bold inline-block overflow-hidden">{products.title}</h1>
                <div className='flex flex-row justify-end gap-5'>
                  <h1 className='bg-sky-500 text-white px-7 py-3 rounded-xl flex items-center gap-2 '>Namunani oqing</h1>
                  <h1 className='bg-neutral-400 text-white px-7 py-3 rounded-xl flex items-center gap-2'>Kitob haqida</h1>
                </div>
                <div className='my-3 font-sans space-y-2'>
                    <p className='text-lg'>{products.description}</p>
                    <h1 className='font-bold text-xl'>Yozuvchi</h1>
                    <p className='text-xl'>{products.author}</p>
                </div>
                <div className='flex justify-between'>
                    <p className="text-4xl font-bold">{products.price.toLocaleString("uz-UZ")} so'm</p>
                    <div className='flex'>
                        <button onClick={() => addToCart(products)}
                          className="bg-sky-600 font-semibold text-white px-10 py-3 rounded-xl flex items-center gap-2"
                          >
                            Savatga
                            <FaCartArrowDown />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

