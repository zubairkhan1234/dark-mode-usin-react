import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function FacebookMedia(profile) {

  profile = {
   date: new Date().toLocaleTimeString(),
   userName: "Muhammad zubair",
   profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
   title: "Czech football season to resume at the end of May",
   imageUrl: "https://cf.bstatic.com/images/hotel/max1024x768/161/161388017.jpg",
   body: "Football matches will start again in the Czech Republic at the end of May after over two months of forced closure due to the COVID-19 pandemic, the League Football Association (LFA) has announced. Teams voted Tuesday to extend the league competition beyond June 30, which is the typical end of the football season, reports Xinhua news agency"
 }

 return <div>

   <div className="mediacard">
     <div className="userData" >
       <div className="userImage">
         <img className="userprofile" src={profile.profilePic}></img>
       </div>
       <div className="NameDate">
         <span className="userName">{profile.userName}</span><br />
         <span className="date">{profile.date}</span>
       </div>
     </div>
     <h3>{profile.title}</h3>
     <p>{profile.body}</p>
     <p><img className="image" src={profile.imageUrl}></img></p>
   </div>

 </div>

}

function IslitDark() {

  const [islit, setlit] = useState(true)
  var themeColor = islit ? "lit": "dark"
  function changeTheme() {
    setlit(prev=>{
      return!prev 
    })
  }

  return (
    <div className={`room ${themeColor}`}>
      <h1> this is {themeColor} </h1>
      <button onClick={changeTheme}> changeTheme Color</button>
      <FacebookMedia />
      <FacebookMedia />
      <FacebookMedia />
    </div>
  )
}




ReactDOM.render(<IslitDark />, document.getElementById('root'))





// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
