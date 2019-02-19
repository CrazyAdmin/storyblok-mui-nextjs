import Head from '../components/Head'
import Header from './Header'
import Footer from '../components/Footer'

const Layout = (props) => {
  return (
    <React.Fragment>
      <Head/>
      <Header settings={props.settings}/>
      <div className="util__container">
        {props.children}
      </div>
      <Footer settings={props.settings}/>

      <style jsx global>{`
        div,h1,h2,h3,h4,h5,h6,p,a,display-1,display-2,display-3,display-4{
          font-family:Nunito;
          font-weight: 400;
        }

        .font-weight-300{
          font-weight:300 !important;
        }

        .mdc-top-app-bar{
          background-color:white !important;
        }

        .mdc-top-app-bar__row{
          max-width: 1140px;
          margin: 0 auto;
        }

        .mdc-top-app-bar__section--shrink-to-fit {
          flex: none;
        }

    `}</style>
    </React.Fragment>
  )
}

export default Layout
