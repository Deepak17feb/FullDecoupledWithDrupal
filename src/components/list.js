import React,{Component} from 'react';
import{ Link } from "react-router-dom";

class List extends Component {
  constructor() {
    super();
    // initial state
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    let api = "http://192.168.33.15/headless-demo/Drupal/export-drupal";
    fetch(api)
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

  getClickedData=(e)=> {
    const nid = e.target.id;
    document.getElementById('getNid').innerHTML = nid;
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
          <div className="listView container">
            <ul>
              {data.map((item) =>(
                <li key={item.id}>
                  <div>
                    <Link to="/SingleView" className="title" id={item.id} onClick={this.getClickedData}>{item.title}</Link>
                  </div>
                  <div className="bodyText" dangerouslySetInnerHTML={{ __html: item.body }}></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default List;