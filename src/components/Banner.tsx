import { banners } from '../data/data'

export default function Banner() {
  return (
    <div className='flex justify-center bg-gray-500 items-center'>
        <div className="flex gap-5 rounded-xl m-5">
          {banners.map(b => (
          <img key={b.id} src={b.banner} alt="" className='h-90 rounded-2xl' />
          ))}
      </div>
    </div>
  )
}
