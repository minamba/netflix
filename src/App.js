import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header" //je l'importe de cette maniere vu que dans lexport du Header, j'ai utilisé un export nommé
import {Home, Details, NotFound, MoviePlayer} from "./routes";
import { API_URL, API_KEY ,IMAGE_BASE_URL, BACKDROP_SIZE} from './config';
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Spinner } from './components/Spinner';
import {Provider} from "react-redux"
import store from "./store"




class App extends Component  {

  state = {
      loading: true,
      movies : [],
      badge :0,
      image: null,
      mTitle:"",
      mDesc : "",
      activePage:0,
      totalPages:0,
      searchText:""
  }

async componentDidMount(){
  try
  {
    const {data : {results, page, total_pages}} = await this.loadmovies()
    console.log("res", results);
    this.setState({
      movies : results,
      loading : false,
      activePage: page,
      totalPages:total_pages,
      image : `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
      mTitle : results[0].title,
      mDesc : results[0].overview
    })
  } 
  catch(e)
  {
    console.log("e",e)
  }
}

  loadmovies = () => {
    const page = this.state.activePage + 1
    const url = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=fr`

    return axios.get(url)
  }

  
  searchMovie = () => {
    const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${this.state.searchText}&language=fr`
    return axios.get(url)
  }

  handleSearch = value => {
    // lancer la recherche
    try
    {
      this.setState({loading: true, searchText: value, image:null}, async () => {

        const {data : {results, page, total_pages}} = await this.searchMovie()
        console.log("res", results)
        this.setState({
          movies : results,
          loading : false,
          activePage: page,
          totalPages:total_pages,
          image : `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
          mTitle : results[0].title,
          mDesc : results[0].overview
      })

      })
    } 
    catch(e)
    {
      console.log("e",e)
    }
  }

  loadMore = async() => {
    try
    {
      this.setState({loading : true}) // permet d'afficher le loading avant que l'api nous reponde
      const {data : {results, page, total_pages}} = await this.loadmovies()
      console.log("res", results)
      this.setState({
        movies : [...this.state.movies, ...results], //ceci permet de concatener les films de la page 1 que contient deja le state a mon nouveau tableau de film de la page 2 et ainsi de suite
        loading : false,
        activePage:page,
        totalPages:total_pages,
        image : `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
        mTitle : results[0].title,
        mDesc : results[0].overview
      })
    }
    catch(e){
        console.log("e",e)
    }
  }


  render()
  {
    return (
      <Provider store={store}>
      <BrowserRouter>
   
      <div className="App">
        <Header badge={15}/>
        {!this.state.image? (<Spinner/>):(
            <Switch>
            <Route path="/" exact render={() => (
              <Home {...this.state}
              onSearchClick={this.handleSearch}
              onButttonClick={this.loadMore}
              />   
            )}/>
            <Route path="/player" exact component={MoviePlayer} />
            <Route path="/player/id" exact component={MoviePlayer} />
            <Route path="/:id" exact component={Details}/>
            <Route component={NotFound}/>
            </Switch>
         )}
      </div>
 
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
