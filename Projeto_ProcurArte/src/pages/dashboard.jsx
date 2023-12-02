import { useState, useEffect } from "react";
import "../styles/dashboard.scss";
import Card from "../components/Card";
import Search from "../components/Search";
import { MusicianEndpoint } from "../services/musicianService";
const api = new MusicianEndpoint();

const Dashboard = () => {
  const [musician, setMusician] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  async function fetchMusicians() {
    try {
      const musiciansData = await api.listMusician();
      setMusician([...musiciansData.musicians]);
    } catch (error) {
      console.error("Error fetching musicians:", error.message);
    }
  }

  useEffect(() => {
    fetchMusicians();
  }, []);

  const handleFilterChange = () => {
    // const filtered = musician.filter(
    //   (musician) =>
    //     musician.name.toLowerCase().includes(filter.toLowerCase()) ||
    //     musician.musicStyles.toLowerCase().includes(filter.toLowerCase())
    // );
    console.log(musician);
    setFilteredCards(musician);
  };

  return (
    <div className="containerD">
      <div className="contentD">
        <div className="headerD"></div>
        <div className="sectionD">
          <Search onFilterChange={handleFilterChange} />

          <div className="cardsD">
            {filteredCards.length > 0 ? (
              filteredCards.map((musician) => (
                <Card
                  key={musician.id}
                  urlFoto={musician.portfolio.profilePhoto}
                  name={musician.name}
                  //musicStyles={musician.musicStyles }
                />
              ))
            ) : (
              <div className="infoD">
                <p>Artista ou Banda não encontrada!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
