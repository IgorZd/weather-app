import "./Card.css";

export const Card = ({ data, icon_url }) => {
  return (
    <div className={"card-wrapper"}>
      {icon_url && <img src={icon_url} alt={"IMG"} />}
      <ul className={"card-list"}>
        {data.map((item, index) => {
          const { fieldName, value } = item;

          return (
            <li key={index} className={"card-item"}>
              <span className={"card-key"}>{`${fieldName}: `}</span>
              <span className={"card-value"}>{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
