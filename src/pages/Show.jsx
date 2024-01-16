import { Params, useParams } from "react-router-dom"
export default function Show() {
    const {ex}=useParams();
    console.log(ex);
  return (
    <div>
        Show data 
    </div>
  )
}
