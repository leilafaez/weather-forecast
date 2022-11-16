window.addEventListener('load',()=>{
    let long;
    let lat;
    let tempertureDescription = document.querySelector(".tempature-description");
    let tempertureDegree = document.querySelector(".degree");
    let locationTimeZone = document.querySelector(".location-timezone");
    let tempertureSection = document.querySelector(".tempature");
    let tempertureSpan = document.querySelector(".tempature span");
    let icon=document.querySelector(".icon");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long = position.coords.longitude;
            lat=position.coords.latitude;
            
            const api = `http://api.weatherapi.com/v1/current.json?key= e817dd484a064348baf222702221511&q=${lat},${long}&aqi=no`;
            fetch(api)
              .then((response) => {return response.json()})
              .then((data) => 
              {
                console.log(data);
                const { temp_c,temp_f, condition } = data.current;

                tempertureDegree.textContent = temp_c;
                tempertureDescription.textContent=condition.text;
                locationTimeZone.textContent=data.location.tz_id;
                icon.src=condition.icon;
                tempertureSection.addEventListener("click",()=>{
                    if(tempertureSpan.textContent==="F"){
                        tempertureDegree.textContent=temp_c;
                        tempertureSpan.textContent="C";
                    }else{
                        tempertureDegree.textContent=temp_f;
                        tempertureSpan.textContent="F";
                    }
                })
              })
                .catch(error=>console.log(error));
        });
    }

    
});