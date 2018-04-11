{
  $("button#play-pause").on("click",function(){
    helper.playPauseAndUpdate();
    $(this).attr("playState",player.playState);
  });

  $("button#next").on("click",function(){
    if(player.playState !== "playing"){return};
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex +1; 
    if( nextSongIndex >= album.songs.length){return};

    const nextSong = album.songs[nextSongIndex];
    helper.playPauseAndUpdate(nextSong);

  });

  $("button#previous").on("click",function(){
     if(player.playState !== "playing"){return};
     const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
     const prevSongIndex = currentSongIndex -1;
     if(prevSongIndex === -1){return};
   
     const prevSong = album.songs[prevSongIndex];
     helper.playPauseAndUpdate(prevSong);
  });

//--To accept input time position from user--
  $('#time-control input').on('input',function(event){
    console.log(event);
    player.skipTo(event.target.value);//what 'event' the function prefer to? 
  });

//--To display the time position on the play bar--
  setInterval( () => {
  	if(player.playState !== 'playing') {return;}
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text(player.prettyTime(currentTime));
    $('#time-control input').val(percent); // why not use .seek-bar
  }, 1000);
  $('#volume-control input').on('input', function(){
    player.setVolume(event.target.value);
  });

}