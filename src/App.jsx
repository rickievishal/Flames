import { useState } from 'react'


function App() {
  const [Name1set, SetName1set] = useState('')
  const [Name1, SetName1] = useState('')
  const [Name2set, SetName2set] = useState('')
  const [Name2, SetName2] = useState('')


  const [JoinedName, SetConcatenatedName] = useState('')
  const [JoinedLength, SetConcatenatedLength] = useState('')
  const[Removeduplicate,SetRemovedupChars]=useState('')
  const[Removeduplength,SetRemovedupCharslength]=useState('')

  const[Flames,SetFlamesResult]=useState('')
  

  const handleInputChangeName1 = (e) => {
    SetName1set(e.target.value);
  };

  const handleInputChangeName2=(e)=>{
    SetName2set(e.target.value);
  };

  const Setvaluefun=()=>{

    SetName1(Name1set)
    SetName2(Name2set)

    
    let namefinal1=Name1set.toLowerCase().replace(/\s/g,'')
    let namefinal2=Name2set.toLowerCase().replace(/\s/g,'')


   

    const combined = namefinal1 + '' + namefinal2;
    SetConcatenatedName(combined);
    const LengthName = combined.length
    SetConcatenatedLength(LengthName)


    let name1Arr = namefinal1.split('');
    let name2Arr = namefinal2.split('');

    for (let i = 0; i < name1Arr.length; i++) {
      let char = name1Arr[i]
      let indexInName2 = name2Arr.indexOf(char)
      if (indexInName2 !== -1) {
        name1Arr.splice(i, 1)
        name2Arr.splice(indexInName2, 1)
        i-- 
      }
    }

    const remainingChars = name1Arr.concat(name2Arr).join('');
    SetRemovedupChars(remainingChars);
    SetRemovedupCharslength(remainingChars.length);


    let Flames=['F','L','A','M','E','S']
    let count=remainingChars.length

  while(Flames.length>1){
    let index=(count-1)%Flames.length
    Flames.splice(index,1)

    Flames = Flames.slice(index).concat(Flames.slice(0, index));

  }
  const flamesMap = {
    'F': 'Friends',
    'L': 'Love',
    'A': 'Affection',
    'M': 'Marriage',
    'E': 'Enemy',
    'S': 'Sibling',
  };

  SetFlamesResult(flamesMap[Flames[0]]);
  };

  


  return (
    <>


    <div>
    <div className='w-full h-screen'>
        <div>
          <h1>sd</h1>
        </div>
    </div>
    </div>
    

    <div>

    </div>
      {/* <input type="text"  onChange={handleInputChangeName1} placeholder='Enter the first Name'  className='border border-b-2 ' />
      <input type="text" onChange={handleInputChangeName2} placeholder='Enter the Second Name'  className='border border-b-2 ' />
      <button onClick={Setvaluefun}>Check It</button>
      <p>{Name1set}</p>
      <p>{Name2set}</p>
      <p>{Name1}</p>
      <p>{JoinedName}</p>
      <p>{JoinedLength}</p>
      <p>{Removeduplicate}</p>
      <p>{Removeduplength}</p> 
      <p>{Flames}</p>
      <p>{}</p> */}

      
    </>
  )
}

export default App
