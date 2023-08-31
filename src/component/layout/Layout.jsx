import { FC, PropsWithChildren } from "react";
import Footer from "./Footer"
import Header from "./Header";
import "../../index.css"

export const Layout = ({ children }) => {

  
  return (
    <>
      <div className='centre_wr'>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout