import { useState, useEffect } from "react";
import "../styles/dashboard.scss";
import Card from "../components/Card";
import Search from "../components/Search";
import { MusicianEndpoint } from "../services/musicianService";
import { toast } from "react-toastify";

const api = new MusicianEndpoint();

const Dashboard = () => {
  const [musician, setMusician] = useState([]);

  async function fetchMusicians() {
    try {
      const musiciansData = await api.listMusician();
    console.log(musiciansData)
      setMusician([...musiciansData.musicians]);
    
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchMusicians();
  }, []);

  console.log(musician.musicStyles, musician);
  return (
    <div className="containerD">
      <div className="contentD">
        <div className="headerD"></div>
        <div className="sectionD">
          <Search />

          <div className="cardsD">

            {
              musician.map((musician) => (
                <Card
                  key={musician.id}
                  name={musician.name}
                  musicStyles={musician.musicStyles}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
