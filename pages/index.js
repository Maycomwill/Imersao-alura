import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {

  return (
    <>
    <CSSReset />
    <div style={{
      display: "flex",
      flexDirection: "column",
      flex: 1
    }}>
      <Menu />
      <Header />
      <Timeline playlists={config.playlists} />
    </div>
    </>
  );
}
export default HomePage;

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
    margin-top: 50px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" /> */}
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(props) {
  const playlistsNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistsNames.map((item) => {
        const videos = props.playlists[item];
        return (
          <section>
            <h2>{item}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url} target="_blank">
                    <img src={video.thumbnail} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  );
}
