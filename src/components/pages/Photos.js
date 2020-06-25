import React from 'react'
import axios from 'axios'
import DisplayPhoto from './DisplayPhoto'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.getPhoto = this.getPhoto.bind(this)
  }

  getPhoto() {
    axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=1&query=france&client_id=sSiN4TxWyMDbZq2P4TASV0BkQZ1uNJGqnNAAOA8PVAU`)
      .then(res => res.data)
      .then(data => {
        this.setState({
          image: data[0]
        })
      })
      console.log('coucou')
  }


  render() {
    console.log('kjhkjhk')
    return (
      <div>
        <DisplayPhoto src={this.state.image} />
      </div>
    );
  }
}

export default App
