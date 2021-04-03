import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Godas is back", "Top news - 3828 readers")}
      {newsArticle("Corona is back", "Top news - 2311 readers")}
      {newsArticle("Bitcoin is back", "Top news - 2311 readers")}
      {newsArticle("League of legends is back", "Top news - 2311 readers")}
      {newsArticle("Aldamir is back", "Top news - 2311 readers")}
      {newsArticle("Aka is back", "Top news - 2311 readers")}
    </div>
  );
}

export default Widgets;
