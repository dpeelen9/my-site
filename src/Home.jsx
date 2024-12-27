export default function App(){
  const BASE_URL = import.meta.env.BASE_URL;
  return(
  <div class="row">

    <div class="leftside animate__animated animate__fadeInUp">
      <img src={BASE_URL+"src/me.jpg"} alt="Me!"></img>
      <h3>Danny Peelen</h3>
      <ul>
        <li><i class="bi bi-linkedin"> </i><a href="https://linkedin.com/in/daniel-peelen" target="_blank">LinkedIn</a></li>
        <li><i class="bi bi-github"> </i><a href="https://github.com/dpeelen9" target="_blank">GitHub</a></li>
        <li></li>
      </ul>
    </div>
    
    <div class="bar">
      <hr class="vert"></hr>
    </div>

    <div class="rightside animate__animated animate__fadeInUp">
      <h1>Hello</h1>
    </div>

    
  </div>
);
}
