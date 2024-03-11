import { useState } from "react";

export function useGeolocation(defaultPosition = null) {
  const [isLoading, SetIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    SetIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        SetIsLoading(false);
      },
      (error) => {
        setError(error.message);
        SetIsLoading(false);
      }
    );
  }

  return {isLoading, position, error, getPosition}
}
