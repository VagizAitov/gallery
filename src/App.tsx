import { Suspense, lazy, useState, useEffect } from 'react'
import './App.css'
import classes from './app.module.scss'
import axios from 'axios'
import { useQuery } from 'react-query';


async function getAuthors() {
  const {data} = await axios.get(`https://test-front.framework.team/authors`);
  return {data}.data;
}
async function getPaintings() {
  const {data} = await axios.get(`https://test-front.framework.team/paintings`);
  return {data}.data;
}
async function getLocations() {
  const {data} = await axios.get(`https://test-front.framework.team/locations`);
  return {data}.data;
}


// Works also with SSR as expected
const Filter = lazy(() => import('./components/paginate/filter/Filter'));
const Pagination = lazy(() => import('./components/paginate/pagination/Pagination'));
const Page = lazy(() => import('./components/paginate/page/Page'));
const Header = lazy(() => import('./components/header/Header'));
const Search = lazy(() => import('./components/paginate/search/Search'));
/*<Suspense fallback={<p>Loading card component...</p>}>
        <New />
      </Suspense>*/


function App() {
  // ключ, который отслеживает содержимое в input поиска картин по названию
  const [key, setKey] = useState('')

  // отслеживают всё содержимое в меню фильтрации
  const [selectedYearsFrom, setSelectedYearsFrom] = useState('0');    // ключ фильтрации по дате написание картины(с какого года искать)
  const [selectedYearsTo, setSelectedYearsTo] = useState('2000');     // ключ фильтрации по дате написание картины(до какого года искать)
  const [selectedAuthors, setSelectedAuthors] = useState([]);         // массив с выбранными авторами картин
  const [selectedLocations, setSelectedLocations] = useState([]);     // массив с выбранными местами хранения картин

  // отслеживает показано ли меню фильтрации или нет
  const [isDisp, setIsDisp] = useState(false);

  // достаём все массивы из базы данных
  const authorsData = useQuery('authors', getAuthors);
  const [authors, setAuthors] = useState(authorsData.isLoading ? [] : authorsData.data);
  const locationsData = useQuery('locations', getLocations);
  const [locations, setLocations] = useState(locationsData.isLoading ? [] : locationsData.data);

  const [count, setCount] = useState(0);
  // массивы с URL на картины, авторами и названиями
  const paintingsData = useQuery('paintings', getPaintings);
  const paintings = paintingsData.data;
  const [paintingsToDisplay, setPaintingsToDisplay] = useState(paintingsData.isLoading ? [] : paintingsData.data);

  // переменные для изменения цветовой схемы страницы
  const [icon, setIcon] = useState('moon');
  const [theme, setTheme] = useState('dark');

  // переменная, которая отслеживает изменение ширины страницы
  const [resize, setResize] = useState('');

  // задаём текущую страницу пагинации и количество картин на странице
  const [currentPage, setCurrentPage] = useState(1);
  const [paintingsPerPage] = useState(6);


  // функция, которая очищает массивы, которые используются для фльтрации
  const clear = () => {
    setSelectedYearsFrom('0');
    setSelectedYearsTo('2000');
    setSelectedAuthors([]);
    setSelectedLocations([]);
  }

  // функция поиска картины по названию
  const search = (event: any) =>{
    let sortedPaintings = [];
    let authorsBool = false;
    let locationsBool = false;
    if (selectedAuthors.length == 0){
      authorsBool = true;
      for (let i = 0; i < authors.length; i++){
        selectedAuthors.push(authors[i].name);
      }
    }
    if (selectedLocations.length == 0){
      locationsBool = true;
      for (let i = 0; i < locations.length; i++){
        selectedLocations.push(locations[i].location);
      }
    }
    for (let i = 0; i < paintings.length; i++){
      //console.log(event.target.value, selectedLocations, locations[paintings[i].locationId-1].location,selectedAuthors.includes(authors[paintings[i].authorId-1].name), selectedLocations.includes(locations[paintings[i].locationId-1].location), paintings[i].name);
      if ((paintings[i].name).includes(event.target.value) && selectedAuthors.includes(authors[paintings[i].authorId-1].name) && selectedLocations.includes(locations[paintings[i].locationId-1].location) && (Number(paintings[i].created) >= Number(selectedYearsFrom)) && (Number(paintings[i].created) <= Number(selectedYearsTo))){
        sortedPaintings.push(paintings[i]);
      }
    }
    if(authorsBool){
      setSelectedAuthors([]);
    }
    if(locationsBool){
      setSelectedLocations([]);
    }
    setCurrentPage(1);
    setPaintingsToDisplay(sortedPaintings);
  }

  // функция фильтрации картины по параметрам
  const showFilterResult = () => {
    let sortedPaintings = [];
    let authorsBool = false;
    let locationsBool = false;
    if (selectedAuthors.length == 0){
      authorsBool = true;
      for (let i = 0; i < authors.length; i++){
        selectedAuthors.push(authors[i].name);
      }
    }
    if (selectedLocations.length == 0){
      locationsBool = true;
      for (let i = 0; i < locations.length; i++){
        selectedLocations.push(locations[i].location);
      }
    }
    for(let i = 0; i < paintings.length; i++){
      if ((paintings[i].name).includes(key) && selectedAuthors.includes(authors[paintings[i].authorId-1].name) && selectedLocations.includes(locations[paintings[i].locationId-1].location) && (Number(paintings[i].created) >= Number(selectedYearsFrom)) && (Number(paintings[i].created) <= Number(selectedYearsTo))) {
        sortedPaintings.push(paintings[i]);
      }
      setCurrentPage(1);
      setPaintingsToDisplay(sortedPaintings);
    }
    if(authorsBool){
      setSelectedAuthors([]);
    }
    if(locationsBool){
      setSelectedLocations([]);
    }
  }

  // проверяю, загрузились ли данные
  if (!paintingsData.isLoading && !authorsData.isLoading && !locationsData.isLoading && (count < 1)){
    setPaintingsToDisplay(paintingsData.data);
    setAuthors(authorsData.data);
    setLocations(locationsData.data);
    setCount(count+1);
  }



  // переменные для создания пагинации
  const lastPaintingIndex = currentPage * paintingsPerPage;
  const firstPaintingIndex = lastPaintingIndex - paintingsPerPage;
  const currentPainting = paintingsToDisplay.slice(firstPaintingIndex, lastPaintingIndex);
  const totalPaintings = paintingsToDisplay.length;
  const pageNumbers: any = [];
  const totalPages = Math.ceil(totalPaintings/paintingsPerPage);
  for (let i = 1; i <= Math.ceil(totalPaintings/paintingsPerPage); i++){
    pageNumbers.push(i);
  }

  // функция, которая меняет цветовую схему
  const switchTheme = () => {
    setIcon((cur) => (cur === 'moon' ? "sun" : "moon"));
    setTheme((cur) => (cur === "light" ? "dark" : "light"));
    if (theme == 'dark') {
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }
    else {
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }
  }


  // отслеживаем ширину страницы и по условию меняем масштаб
  if(typeof window !== "undefined") {
  window.addEventListener('resize', () => {
    if (window.innerWidth>768) {
      setResize(classes.width_first);
    }else if(window.innerWidth > 500 && window.innerWidth <= 786){
      setResize(classes.width_second);
    }else{
      setResize(classes.width_third);
    }
  });
}
  // получаем ширину страницы при запуске и подстраиваемся под неё
  useEffect(()=> {
    const resize = () => {
      if (window.innerWidth>768) {
        setResize(classes.width_first);
      }else if(window.innerWidth > 500 && window.innerWidth <= 786){
        setResize(classes.width_second);
      }else{
        setResize(classes.width_third);
      }
    }
    resize();
  }, [])


  // обрезаю массив пагинации
  if (currentPage > 3){
    pageNumbers.splice(1, currentPage-3, '...');
  }
  if (currentPage < totalPages-2){
    pageNumbers.splice(currentPage+1, totalPages-currentPage-2, '...');
  }

  // функция для отображения меню фильтрации
  const showFilterMenu = () => {
    if(isDisp == false){
      setIsDisp(true);
    }else setIsDisp(false);
  }

  // функция записывает в массив выбранных в меню фильтрации авторов, а также меняет фон у выбранного input'а
  const selectAuthors = (event) => {
    if (selectedAuthors.includes(event.target.value)){
      selectedAuthors.splice(selectedAuthors.indexOf(event.target.value), 1);
      event.target.className = classes.notChosen;
    } else {
      setSelectedAuthors([...selectedAuthors, event.target.value]);
      event.target.className = classes.chosen;
    }
  }

  // функция записывает в массив выбранных в меню фильтрации мест хранения картин, а также меняет фон у выбранного input'а
  const selectLocations = (event) => {
    if (selectedLocations.includes(event.target.value)){
      selectedLocations.splice(selectedLocations.indexOf(event.target.value), 1);
      event.target.className = classes.notChosen;
    } else {
      setSelectedLocations([...selectedLocations, event.target.value]);
      event.target.className = classes.chosen;
    }
  }


  return (
    <>
    <div className={resize}>
      <Suspense fallback={<p>Loading component...</p>}>
        <Filter disp={isDisp} setDisp={setIsDisp} authors={authors} locations={locations} selectAuthors={selectAuthors} selectLocations={selectLocations}
        notChosenClass={classes.notChosen} showFilterResult={showFilterResult} setSelectedYearsFrom={setSelectedYearsFrom} setSelectedYearsTo={setSelectedYearsTo} 
        chosenClass={classes.chosen} clear={clear}/>
      </Suspense>
      <Suspense fallback={<p>Loading component...</p>}>
          <Header logo={icon} func={switchTheme}/>
      </Suspense>
      <div className={classes.grid}>
        <div className={classes.wrapperSearch}>
          <Suspense fallback={<p>Loading card component...</p>}>
              <Search search={search} disp={showFilterMenu} setKey={setKey}/>
          </Suspense>
        </div>
        <div className={classes.wrapperPage}>
          {paintingsData.isLoading ? <div>loading...</div> :
          (currentPainting.length == 0) ? <div>
              <p className={classes.noMatches}>No matches for <b>{key}</b>
              <p>Please try again with a different spelling or keywords.</p>
              </p>

             </div> :
            currentPainting.map((painting: object, i: any) => (
              <Suspense fallback={<p>Loading painting...</p>}>
                <Page authors={authors} locations={locations} paintings={painting} key={i}/>
              </Suspense>
            ))
          }
        </div>
        <div className={classes.wrapperPagination}>
          <Suspense fallback={<p>Loading component...</p>}>
            <Pagination pageNumbers={pageNumbers} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
          </Suspense>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
