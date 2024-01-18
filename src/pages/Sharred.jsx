import {useStarredShow} from '../lib/useStarredShow'
const Starred=() =>{

  const [startedShow] =useStarredShow();

  // 
  return (
    <div> 
      shared page  starred : {startedShow.length}
    </div> 
    
  );
  
}
export default Starred;
