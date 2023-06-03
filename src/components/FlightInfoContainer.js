import React, { useEffect, useState } from "react";
import FlightSegment from "./FlightSegment";
import Api from "../config/api";
import Pagination from "@mui/material/Pagination";

const FlightInfoContainer = () => {
  const api = new Api();
  const [flights, setFlights] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchCount, setFetchCount] = useState(0);
  const [fetchStatus, setFetchStatus] = useState("");
  let interval;

  // Fetch available flights
  const fetchAvailableFlights = async (page = 1) => {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const session = searchParams.get("session");

      const response = await api.get(`http://localhost:8000/api/v1/flight/search/${session}?page=${page}`);
      // const response = await api.get(`integration/flight/search/${session}?page=${page}&size=${10}&sort=compliant`);
      const { items, total_pages, total, status } = response.data;


      setFlights(items);
      setTotalPages(total_pages);
      setTotalItems(total);
      
      setFetchStatus(status);
      setFetchCount((prevCount) => prevCount + 1);
    } catch (error) {
      console.log("Error fetching flights:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const sessionParam = searchParams.get("session");
    if (sessionParam) {
      fetchAvailableFlights();
    }
  }, []);

  useEffect(() => {
    if (fetchStatus === "PENDING") {
      interval = setInterval(() => {
        fetchAvailableFlights(currentPage);
      }, 4000);
    } else {
      setIsLoading(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [currentPage, fetchCount, fetchStatus]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    fetchAvailableFlights(page);
  };

  return (
    <div className="md:mt-10 flex-1 flex flex-col items-start justify-start gap-[12px] text-left text-lg text-dimgray-300 font-components-button-large md:flex-[unset] md:self-stretch">
      <div className="relative tracking-[0.26px] text-lightslategray">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          `${flights.length} out of ${totalItems} Results`
        )}
      </div>

      {isLoading ? (
        <div>Loading flights...</div>
      ) : (
        <>
          {flights.map((flight) => (
            <FlightSegment key={flight.id} flight={flight} />
          ))}
          <Pagination
            className="mb-5"
            page={currentPage}
            count={totalPages}
            onChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default FlightInfoContainer;
