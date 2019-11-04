import React, {Component} from 'react';


class SingleView extends Component {
  constructor() {
    super();
    // initial state
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    let nidVal = document.getElementById('getNid').innerText;
    let singleViewApi = `http://192.168.33.15/headless-demo/Drupal/export-drupal-single/`+nidVal;
    fetch(singleViewApi)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          data: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  goBack() {
    window.history.back();
  }

  render() {
    const {error, isLoaded, data} = this.state;
    if(error) {
      return <div>Error: {error.message}</div>
    } else if(!isLoaded) {
      return <div className="loader">Loading...</div>
    } else {
      return(
        <div>
          <div className="singleview container">
            <div className="btn">
              <span onClick={this.goBack} className="goBack">Go Back</span>
            </div>
            <div className="singleViewContainer">
              {data.map(item =>(
                <div key={item.id}>
                  <div className="title">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="bodyText" dangerouslySetInnerHTML={{ __html: item.body }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  }
}



export default SingleView;