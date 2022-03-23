
        // find the URL :- 
    
        // 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=cricket&key=[YOUR_API_KEY]'
    
        // https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=cricket&key=[YOUR_API_KEY]
    
    // API Key :- AIzaSyBcKXyV13HjadbiUbb-92oAAQTVFo7Dods
    
    const search_results_div =document.getElementById('search_results')
    
    
    
    
    
    const searchVideos = async  ()=>{
    
        try{
    
         let inp = document.getElementById("search").value   
    
      let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inp}&key=AIzaSyBcKXyV13HjadbiUbb-92oAAQTVFo7Dods&maxResults=40`);
    
          let data = await res.json();
    
        let videos = data.items;
    
        appendVideos(videos);
    
        console.log("videos:",videos);
    
        // return videos;
    
    
        //   console.log("data:",data);
    
        }catch(error){
        console.log("error:",error);
        }
    };
    
    const appendVideos = (data)=>{
    
    search_results_div.innerHTML=null 
    
    
        try{
            data.forEach(({snippet,id})=>{
         
         let div =document.createElement("div");
    
         let title =document.createElement("p");
    
         title.innerText =snippet.title;
    
         let iframe =document.createElement("iframe");
    
         iframe.src =` https://www.youtube.com/embed/${id.videoId}`;
    
         iframe.height="100%"
         iframe.width ="100%"
         iframe.allow="fullscreen"
    
    
         div.append(iframe,title)
         
         search_results_div.append(div);
    
    
        });
    
    
        }catch(err){
            console.log("err:",err);
        }
    
      
    };
    
    
    //embeded URL   https://www.youtube.com/embed/kYeJk38rZ3o
    
    
    