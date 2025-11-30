import { useState } from "react";
import { advancedUserSearch } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);
    setPage(1);

    try {
      const data = await advancedUserSearch(username, location, minRepos, 1);

      setResults(data.items);
      setHasMore(data.total_count > data.items.length);
    } catch (err) {
      setError("Unable to fetch results. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const data = await advancedUserSearch(username, location, minRepos, nextPage);

      setResults((prev) => [...prev, ...data.items]);
      setPage(nextPage);
      setHasMore((nextPage * 30) < data.total_count);
    } catch (err) {
      setError("Unable to load more results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form
        onSubmit={handleSearch}
        className="bg-white shadow-md p-4 rounded-lg space-y-4"
      >
        <h2 className="text-xl font-semibold">Advanced GitHub User Search</h2>

        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          className="w-full border p-2 rounded"
          placeholder="Minimum Repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center bg-gray-100 p-3 rounded shadow"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div className="ml-4">
              <h3 className="font-semibold text-lg">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-600 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {hasMore && !loading && (
        <button
          onClick={handleLoadMore}
          className="mt-4 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-black"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
