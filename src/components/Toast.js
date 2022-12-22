import { ToastContainer, toast } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';

function Toastify({message}){
    const notify = () => toast({message});

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }

export default Toastify;