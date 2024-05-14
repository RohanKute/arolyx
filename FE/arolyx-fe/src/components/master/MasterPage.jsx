import Footer from "../layout/Footer";
import NavBar from "../layout/Navbar";


export default function MasterPage(){
     return(
        <>
            <div className="container-sm h-screen masterPage">
               <NavBar/>
               <main className="container-m mt-2" >

               </main>
               <Footer/>
            </div>

        </>
     )
}