// bad way to keep api key

const api_key=`46ad7457603b9b0104e633e78cd60e16`; 

const loadtemp =(city)=>{
    
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    fetch(url)
    .then(res=>res.json())
    .then(data=>display(data))

}



const display=(data)=>{
const area=document.getElementById('city')
const temp=document.getElementById('temp')
const condition=document.getElementById('condition')
area.innerText=data.name
temp.innerText=data.main.temp
condition.innerText=data.weather[0].main
}

const getlocation =()=>{
    const location=document.getElementById('cityname').value
    loadtemp(location)
}