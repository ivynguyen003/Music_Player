{
  $('#album-title').text(album.title);
  $('#album-cover-art').attr("src", album.albumArtUrl);
  $('#release-info').text(album.releaseInfo);
  $('.artist').text(album.artist);
}