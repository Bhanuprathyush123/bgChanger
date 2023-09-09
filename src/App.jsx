import { useState } from 'react'


function App() {
  const [color, setColor] = useState('black')

     
  return (
    <>
          <div className='w-full h-screen duration-300' style={{backgroundColor : color}}>
                 <div className='fixed flex flex-wrap bg-white m-4 p-2 rounded-full shadow-2xl-white'>
                      <div className='flex flex-wrap justify-center bg-slate-100 p-1 rounded-full gap-3 shadow-2xl-black '>
                           
                           <button  onClick={()=>setColor('chocolate')} className='outline-none px-4 py-1 rounded-full shadow-xl' style={{ backgroundColor: 'chocolate' }}
                            >
                                chocolate
                           </button>

                           <button onClick={()=>setColor('salmon')} className='outline-none px-4 py-1 rounded-full shadow-xl' style={{backgroundColor : 'salmon'}}>
                                Slamon
                           </button>

                           <button  onClick={()=>setColor('lime')} className='outline-none px-4 py-1 rounded-full shadow-xl' style={{backgroundColor : 'lime'}}>
                                Lime
                           </button>

                           <button onClick={()=>setColor('azure')} className='outline-none px-4 py-1 rounded-full shadow-xl' style={{backgroundColor : 'azure'}}>
                                azure
                           </button>

                           <button onClick={()=>setColor('lightgreen')} className='outline-none px-4 py-1 rounded-full shadow-xl' style={{backgroundColor : 'lightgreen'}}>
                                light green
                           </button>

                           <button onClick={()=>setColor('orchid')} className='outline-none px-4 py-1 rounded-full shadow-xl' style={{backgroundColor : 'orchid'}}>
                                orchid
                           </button>
                      </div>
                 </div>
          </div> 
    </>
  )
}

export default App
