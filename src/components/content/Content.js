import "./Content.css";
import { Card } from "../card/Card";
import { Loader } from "../loader/Loader";

export const Content = ({ data, isSearchInProgress }) => {
  const { cityData, weatherData, icon_url } = data || {};
  const title = cityData ? `The weather in ${cityData[1]?.value}` : "";
  const noResults = "No results, try again please";
  const cards = [cityData, weatherData];

  return (
    <div className={"content-wrapper"}>
      {isSearchInProgress ? (
        <Loader />
      ) : (
        <>
          {data ? (
            <>
              {data?.cityData ? (
                <>
                  <h2>{title}</h2>
                  <div className={"content-container"}>
                    {cards.map((item, index) => (
                      <Card
                        key={index}
                        data={item}
                        icon_url={index === 1 ? icon_url : null}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <h2>{noResults}</h2>
              )}
            </>
          ) : null}
        </>
      )}
    </div>
  );
};
