import React from 'react'
import ReactDOMServer from 'react-dom/server';
import App from 'components/App';
import axios from 'axios';
import stateApi from 'start-api';
import cf from 'config';

const serverRender = async () => {
  const resp = await axios.get(`http://${cf.host}:${cf.port}/data`);
  const store = new stateApi(resp.data)

  // const initialData = {
  //   articles: api.getArticles(),
  //   authors: api.getAuthors()
  // }

  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App store={store}/>
    ),
    initialData: resp.data,
  }
}

export default serverRender; 