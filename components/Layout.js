import Head from '../components/Head'
import Header from './Header'
import Footer from '../components/Footer'

const Layout = (props) => {
  return (
    <div>
      <Head />
      <Header settings={props.settings}/>
      <div className="util__container">
        {props.children}
      </div>
      <Footer settings={props.settings}/>

      <style jsx global>{`
        div,h1,h2,h3,h4,h5,h6,p,a,display-1,display-2,display-3,display-4{
          font-family:Nunito;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizelegibility;
          font-weight: 400;
        }
        .font-weight-300{
          font-weight:300 !important;
        }

    `}</style>
    </div>
  )
}

export default Layout
