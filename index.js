import { RmxAudioPlayer, Playlist } from "capacitor-plugin-playlist";

const rmxPlayer = new RmxAudioPlayer();

document.addEventListener("DOMContentLoaded", async () => {
  await Playlist.setOptions({ verbose: false, options: { icon: "play" } });
  await rmxPlayer.initialize();

  const tracks = [
    {
      isStream: true,
      trackId: 1,
      assetUrl:
        "https://www.archive.org/download/treasureisland_librivox/treasure_island_01-02_stevenson.mp3",
      title: "Test 1",
      album: "Test",
    },
    {
      isStream: true,
      trackId: 2,
      assetUrl:
        "https://www.archive.org/download/treasureisland_librivox/treasure_island_01-02_stevenson.mp3",
      title: "Test 2",
      album: "Test",
    },
  ];

  await rmxPlayer.setPlaylistItems(tracks);
  document.getElementById("play").addEventListener("click", () => {
    rmxPlayer.play();
  });

  document.getElementById("pause").addEventListener("click", () => {
    rmxPlayer.pause();
  });
});
