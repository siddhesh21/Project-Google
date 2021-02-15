import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./pages/StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoomIcon from "@material-ui/icons/Room";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ImageIcon from "@material-ui/icons/Image";
import DescriptionIcon from "@material-ui/icons/Description";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function SearchPage() {
  const [{ term = "tesla" }, dispatch] = useStateValue();

  // LIVE API call
  //const { data } = useGoogleSearch(term);

  // Saved Response (mocking API call)
  const data = Response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft"></div>

            <div className="searchPage__options active">
              <SearchIcon />
              <Link to="/all">All</Link>
            </div>
            <div className="searchPage__options">
              <DescriptionIcon />
              <Link to="/news">News</Link>
            </div>
            <div className="searchPage__options">
              <ImageIcon />
              <Link to="/images">Images</Link>
            </div>
            <div className="searchPage__options">
              <LocalOfferIcon />
              <Link to="/shopping">Shopping</Link>
            </div>
            <div className="searchPage__options">
              <RoomIcon />
              <Link to="/maps">Maps</Link>
            </div>
            <div className="searchPage__options">
              <MoreVertIcon />
              <Link to="/more">More</Link>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__options">
                <Link to="/settings">Settings </Link>
              </div>
              <div className="searchPage__options">
                <Link to="/tools">Tools </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {true && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            {/* Adding metadata info extracted for searching query */}
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink} <ArrowDropDownIcon />
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
                <p className="searchPage__resultSnippet">{item.snippet}</p>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
//API_KEY
// AIzaSyBVwI548zF1P3DwQyaivbpMh37VcskZl_g
