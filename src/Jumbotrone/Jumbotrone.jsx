import "./Jumbotrone.css";

const Jumbotrone = ({ imgURL, subtitle, title, paragraph, showBtn }) => {
  /* OPZIONE 1 CONDIZIONE
    let btn = '';
    if (showBtn) {
        btn = (
            <button>Read More</button>       
          )
    }
*/
  // OPZIONE 2 CONDIZIONE
  const btn2 = showBtn ? <button>Read More</button> : null;

  return (
    <div className="jumbotroneWrapper">
      <figure className="jumboFigure">
        <img src={imgURL} alt="" />
      </figure>

      <main>
        <div className="mainTop">
          <h3>{subtitle}</h3>
          <h1>{title}</h1>
          <div className="underLine"></div>
          <p>{paragraph}</p>

          {btn2}

          {/* {
            showBtn  (<button>Read More</button> )
          } */}
        </div>

        <div className="mainNav">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </main>
    </div>
  );
};

export default Jumbotrone;
