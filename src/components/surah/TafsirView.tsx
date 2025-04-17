import React, { useState, useEffect } from "react";

// You can import the necessary styles (e.g. font styles for Bengali) and other dependencies

const TafsirComponent = ({ surahNumber, translation }) => {
  const [tafsir, setTafsir] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTafsir = async () => {
      try {
        let url = "";

        // Determine which language to fetch based on the translation prop
        if (translation === "bn") {
          url = `https://raw.githubusercontent.com/spa5k/tafsir_api/main/tafsir/bn-tafseer-ibn-e-kaseer/${surahNumber}.json`;
        } else {
          url = `https://raw.githubusercontent.com/spa5k/tafsir_api/main/tafsir/en-tafisr-ibn-kathir/${surahNumber}.json`;
        }

        const res = await fetch(url);
        const data = await res.json();
        setTafsir(data.ayahs);
      } catch (err) {
        console.error("Error loading tafsir", err);
        setError(true);
      }
    };

    fetchTafsir();
  }, [surahNumber, translation]);

  if (error) {
    return (
      <div className="text-red-500 font-semibold">
        Error loading Tafsir, please try again later.
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Tafsir for Surah {surahNumber}
      </h2>

      {tafsir.length === 0 ? (
        <p className="text-center text-gray-500">Loading Tafsir...</p>
      ) : (
        tafsir.map((entry, index) => (
          <div key={index} className="mb-8 p-6 bg-white shadow-md rounded-lg">
            <div className="font-semibold text-xl text-gray-700 mb-3">
              <span className="text-2xl">{entry.ayah}</span>
            </div>

            <div
              className={
                translation === "bn"
                  ? "font-bangla text-lg text-gray-800 text-justify leading-relaxed space-y-3"
                  : "text-lg text-gray-800 text-justify leading-relaxed space-y-3"
              }
            >
              {entry.text.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TafsirComponent;
