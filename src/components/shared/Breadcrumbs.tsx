import { Link, useMatches } from "react-router-dom";

interface Handle {
  crumb?: (match: Match) => string;
}

interface Match {
  pathname: string;
  handle?: Handle;
}

function Breadcrumbs() {
  const matches = useMatches() as Match[];

  return (
    <div>
      <ul className="flex gap-2">
        {matches.map((match, i) => (
          <li key={i}>
            <Link to={match.pathname}>
              {match.handle && typeof match.handle.crumb === "function"
                ? match.handle.crumb(match)
                : ""}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Breadcrumbs;