const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCMyVy_Q6xXwKFX4UleHk-vg&part=snippet%2Cid&order=date&maxResults=16';

const content = null || document.getElementById('content');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cf63ef5b63msh4ab2222fbabec3ap14215djsn1b497a007056',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
  const response=await fetch(urlApi,options);
  const data=await response.json();
  return data;
}
(async()=>
  {try{
    const videos=await fetchData(API);
    let view=`
    ${videos.items.map(video=>`
    <div class="exercise">
      <a href="https://youtube.com/watch?v=${video.id.videoId}"target ="blank">     
        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}">
        <p>
            ${video.snippet.title}
        </p>
        </a>
    </div>
    `).slice(0,12).join('')}
    `;
    content.innerHTML = view;
  }catch (error){
    console.log(error);
  }
})();